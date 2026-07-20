import 'dotenv/config';
import express, { type Express, type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import { createRemoteJWKSet, jwtVerify } from 'jose-cjs';
import OpenAI from 'openai';

const app: Express = express();
const port = process.env.PORT || 5000;

declare global {
  namespace Express {
    interface Request {
      user?: import('jose-cjs').JWTPayload;
    }
  }
}



app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});




interface TrialFormData {
  title: string;
  disease: string;
  hospital: string;
  country: string;
  location: string;
  phase: string;
  status: string;
  image?: string;
  description: string;
}


interface ChatMessageDoc {
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

interface ChatSessionDoc {
  userId: string;
  messages: ChatMessageDoc[];
  updatedAt: Date;
}





const uri: string = process.env.MONGODB_URI as string

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
);


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS);
    req.user = payload;
    console.log(req.user);
    next();
  } catch (error) {
    console.error("Token validation failed:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};






async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("medvantage_db")
    const exploreTrialCollections = db.collection('explore')
    const chatCollections = db.collection<ChatSessionDoc>('ai_chats');


    //explore trials related apis
    app.get('/api/explore', async (req: Request, res: Response) => {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 0;
      const { search, country, phase } = req.query;

      let query: Record<string, any> = {};

      if (search && search !== 'undefined') {
        query.title = { $regex: search as string, $options: "i" };
      }


      if (country && country !== 'undefined') {
        query.country = { $regex: country as string, $options: "i" };
      }
      if (phase && phase !== 'undefined') {
        query.phase = phase as string;
      }

      let cursor = exploreTrialCollections.find(query);
      if (Number(limit)) cursor = cursor.limit(Number(limit));

      const result = await cursor.toArray();
      res.json(result);
    });



    app.post('/api/explore', verifyToken, async (req: Request<{}, {}, TrialFormData>, res: Response) => {
      const userId = req.user?.id;
      const addItems = { ...req.body, userId };
      const result = await exploreTrialCollections.insertOne(addItems)
      res.json(result)
    })

    app.get('/api/explore/:id', async (req: Request<{ id: string }>, res: Response) => {
      const { id } = req.params
      const result = await exploreTrialCollections.findOne({
        _id: new ObjectId(id)
      })
      res.send(result)
    })






    //Ai Assistant Chatboat
    app.post('/api/ai/chat', verifyToken, async (req: Request, res: Response) => {
      const { messages } = req.body;
      const userId = req.user?.id as string;
      if (!userId) {
        return res.status(401).json({ message: "Invalid token: missing user id" });
      }

      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      let fullReply = "";

      try {
        const systemPrompt = `You are MedVantage AI Assistant — a helpful, friendly, and knowledgeable assistant built into the MedVantage clinical trial matching platform.

Your role:
- Answer questions about clinical trials, phases, eligibility criteria, and how trials work.
- Explain medical terms and conditions in clear, easy-to-understand language.
- Help users navigate the MedVantage platform (Explore Trials, Dashboard, Add Trial, AI Assistant pages).
- Provide general health education and awareness.

Strict rules you MUST follow:
- NEVER diagnose any disease or medical condition.
- NEVER prescribe or recommend any specific medication or treatment.
- NEVER provide personalized medical advice.
- ALWAYS recommend consulting a qualified healthcare professional for medical decisions.
- If a user asks for diagnosis or prescription, politely decline and suggest they speak with their doctor.

Tone: Professional yet warm and approachable. Use clear language. Be concise but thorough. Format responses with markdown when helpful (bold, lists, headings).`;

        const groq = new OpenAI({
          apiKey: process.env.GROK_AI_ASSISTANT_API,
          baseURL: 'https://api.groq.com/openai/v1',
        });

        const stream = await groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((msg: { role: string; content: string }) => ({
              role: msg.role as 'user' | 'assistant',
              content: msg.content,
            })),
          ],
          stream: true,
        });

        for await (const chunk of stream) {
          const token = chunk.choices[0]?.delta?.content || '';
          if (token) {
            fullReply += token;
            res.write(`data: ${JSON.stringify({ token })}\n\n`);
          }
        }

        // পুরো conversation DB-তে আপডেট করো (শেষ ১৫টা message রাখো, বাকি ছাঁটো)
        const lastUserMsg = messages[messages.length - 1];
        await chatCollections.updateOne(
          { userId },
          {
            $push: {
              messages: {
                $each: [
                  { role: 'user', content: lastUserMsg.content, createdAt: new Date() },
                  { role: 'assistant', content: fullReply, createdAt: new Date() }
                ],
                $slice: -30 // শেষ ৩০টা (১৫ pair) রাখো
              }
            },
            $set: { updatedAt: new Date() }
          },
          { upsert: true }
        );

        res.write('data: [DONE]\n\n');
        res.end();

      } catch (error: any) {
        console.error("AI Chat Error:", error?.message || error);
        res.write(`data: ${JSON.stringify({ error: true })}\n\n`);
        res.end();
      }
    });


    app.delete('/api/ai/chat/history', verifyToken, async (req: Request, res: Response) => {
      const userId = req.user?.id as string;
      if (!userId) return res.status(401).json({ message: "Invalid token" });

      await chatCollections.deleteOne({ userId });
      res.json({ success: true });
    });







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});