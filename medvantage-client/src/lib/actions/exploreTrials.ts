'use server'

import { getTokenServer } from "../getToken"

const baseURl = process.env.NEXT_PUBLIC_API_URL

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



export const createTrial = async (exploreData: TrialFormData) => {
    const token = await getTokenServer()
    const res = await fetch(`${baseURl}/api/explore`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(exploreData)
    })

    const data = await res.json()
    return data
}