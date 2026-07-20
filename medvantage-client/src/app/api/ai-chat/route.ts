import { getTokenServer } from "@/lib/getToken";

export async function POST(req: Request) {
    const { messages } = await req.json();
    const token = await getTokenServer();

    const backendRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ messages }),
    });

    return new Response(backendRes.body, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
        },
    });
}