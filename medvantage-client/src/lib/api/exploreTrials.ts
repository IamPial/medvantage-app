import { getTokenServer } from "../getToken";

const baseURl = process.env.NEXT_PUBLIC_API_URL

export interface TrialFormData {
    _id: string;
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


//get all explore trials
interface TrialQueryParams {
    limit?: number;
    search?: string;
    country?: string;
    phase?: string;
}

export const getAllExploreTrialItems = async (
    options?: TrialQueryParams
): Promise<TrialFormData[]> => {
    const params = new URLSearchParams();
    if (options?.limit) params.set("limit", String(options.limit));
    if (options?.search) params.set("search", options.search);
    if (options?.country) params.set("country", options.country);
    if (options?.phase) params.set("phase", options.phase);


    const query = params.toString() ? `?${params.toString()}` : "";
    const res = await fetch(`${baseURl}/api/explore${query}`, { cache: "no-store" });
    const data = await res.json();
    return data;
};


//details
export const getExploreItemsDetails = async (id: string): Promise<TrialFormData> => {
    const res = await fetch(`${baseURl}/api/explore/${id}`)
    const data = await res.json()
    return data
}


export const getMyExploreTrials = async (): Promise<TrialFormData[]> => {
    const token = await getTokenServer();
    const res = await fetch(`${baseURl}/api/explore/my-items`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("API Error:", res.status, text.slice(0, 200));
        throw new Error(`Failed to fetch trials: ${res.status}`);
    }

    const data = await res.json();
    return data;
};

