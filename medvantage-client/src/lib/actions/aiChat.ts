'use server'

import { getTokenServer } from "../getToken"

const baseURl = process.env.NEXT_PUBLIC_API_URL

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

export const sendChatMessage = async (messages: ChatMessage[]) => {
    const token = await getTokenServer()
    const res = await fetch(`${baseURl}/api/ai/chat`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ messages })
    })

    if (!res.ok || !res.body) {
        throw new Error("Failed to communicate with the AI server")
    }

    return res.body
}

export const getChatHistory = async () => {
    const token = await getTokenServer()
    const res = await fetch(`${baseURl}/api/ai/chat/history`, {
        headers: { authorization: `Bearer ${token}` },
        cache: 'no-store',
    })
    if (!res.ok) return { messages: [] }
    return res.json()
}





export const clearChatHistory = async () => {
    const token = await getTokenServer()
    await fetch(`${baseURl}/api/ai/chat/history`, {
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
    })
}