import { Chip } from "@heroui/react";
import TrialCard from "../TrialCard";
import { getAllExploreTrialItems, type TrialFormData } from "@/lib/api/exploreTrials";

export default async function FeaturedSection() {
    const trials = await getAllExploreTrialItems({ limit: 6 });

    return (
        <section className="bg-[#F7FBFA] px-6 py-10 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-white text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            Featured Trials
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        Actively recruiting studies
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        A snapshot of trials currently matching patients across our
                        partner network.
                    </p>
                </div>

                {trials.length === 0 ? (
                    <p className="mt-14 text-center text-slate-500">
                        No trials found right now.
                    </p>
                ) : (
                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {trials.map((trial: TrialFormData, i) => (
                            <TrialCard key={trial._id} trial={trial} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}