
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

}

export const getAllExploreTrialItems = async (
    options?: TrialQueryParams
): Promise<TrialFormData[]> => {
    const params = new URLSearchParams();
    if (options?.limit) params.set("limit", String(options.limit));
    if (options?.search) params.set("search", options.search);

    const query = params.toString() ? `?${params.toString()}` : "";
    const res = await fetch(`${baseURl}/api/explore${query}`, { cache: "no-store" });
    const data = await res.json();
    return data;
};


