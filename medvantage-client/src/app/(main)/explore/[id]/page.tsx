


import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";

import { LuBuilding, LuMapPin, LuGlobe, LuLayers, LuActivity, LuArrowLeft } from "react-icons/lu";
import { getExploreItemsDetails, type TrialFormData } from "@/lib/api/exploreTrials";
import ApplyNowBtn from "@/components/ApplyNowBtn";



interface PageProps {
    params: Promise<{ id: string }>;
}




export default async function TrialDetailsClient({ params }: PageProps) {
    const { id } = await params;
    const trial = await getExploreItemsDetails(id);
    console.log(trial)

    // Status Color Matrix mapping
    const getStatusStyles = (status: string) => {
        const s = status.toLowerCase();
        if (s.includes("recruit")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
        if (s.includes("active")) return "bg-blue-50 text-blue-700 border-blue-200";
        if (s.includes("complete")) return "bg-zinc-100 text-zinc-700 border-zinc-300";
        return "bg-amber-50 text-amber-700 border-amber-200";
    };


    return (
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 space-y-6">

            {/* --- HERO SECTION --- */}
            <div className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm shadow-zinc-200/40">
                <div className="relative h-64 md:h-96 w-full bg-zinc-100">
                    <Image
                        src={trial.image || "/images/trial-fallback.jpg"}
                        alt={trial.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <Chip className={`border text-xs font-semibold rounded-lg ${getStatusStyles(trial.status)}`} size="sm">
                                {trial.status}
                            </Chip>
                            <Chip className="bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs font-medium rounded-lg" size="sm">
                                {trial.disease}
                            </Chip>
                        </div>
                        <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                            {trial.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* --- TRIAL INFORMATION CARD --- */}
            <div className="w-full">
                <Card className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 shadow-sm shadow-zinc-200/40">
                    <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Trial Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-emerald-600 mt-0.5">
                                <LuBuilding size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">Hospital</p>
                                <p className="text-sm font-semibold text-zinc-800 mt-0.5">{trial.hospital}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-emerald-600 mt-0.5">
                                <LuGlobe size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">Country</p>
                                <p className="text-sm font-semibold text-zinc-800 mt-0.5">{trial.country}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-emerald-600 mt-0.5">
                                <LuMapPin size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">Location</p>
                                <p className="text-sm font-semibold text-zinc-800 mt-0.5">{trial.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-emerald-600 mt-0.5">
                                <LuLayers size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">Trial Phase</p>
                                <p className="text-sm font-semibold text-zinc-800 mt-0.5">{trial.phase}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 text-emerald-600 mt-0.5">
                                <LuActivity size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">Status</p>
                                <p className="text-sm font-semibold text-zinc-800 mt-0.5">{trial.status}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* --- DESCRIPTION CARD --- */}
            <div className="w-full">
                <Card className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 shadow-sm shadow-zinc-200/40 space-y-4">
                    <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Clinical Trial Description</h2>
                    <div className="h-px bg-zinc-100 w-full" />
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed whitespace-pre-line">
                        {trial.description}
                    </p>
                </Card>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">


                <Link href="/explore">
                    <Button
                        className="w-full sm:w-auto bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all h-11"
                    >
                        Back to Explore
                    </Button>
                </Link>
                <ApplyNowBtn disease={trial.disease} />
            </div>

        </div>
    );
}