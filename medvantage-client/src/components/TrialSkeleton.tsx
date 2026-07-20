import React from "react";
import { Skeleton, Card } from "@heroui/react";

const TrialsSkeleton = () => {

    const skeletonCards = Array.from({ length: 3 });

    return (
        <div className="bg-zinc-50/50 min-h-screen text-zinc-900 py-10 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-8">


                <div className="text-center md:text-left space-y-3">
                    <Skeleton className="h-9 w-64 md:w-80 rounded-xl mx-auto md:mx-0" />
                    <Skeleton className="h-4 w-full max-w-2xl rounded-lg mx-auto md:mx-0" />
                </div>


                <div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        <div className="md:col-span-5 space-y-2">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Search Trials</span>
                            <Skeleton className="h-11 w-full rounded-xl" />
                        </div>
                        <div className="md:col-span-3 space-y-2">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Disease Category</span>
                            <Skeleton className="h-11 w-full rounded-xl" />
                        </div>
                        <div className="md:col-span-4 space-y-2">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Sort By Phase</span>
                            <Skeleton className="h-11 w-full rounded-xl" />
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skeletonCards.map((_, index) => (
                        <Card
                            key={index}
                            className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden shadow-sm flex flex-col h-full space-y-5 p-0"
                        >

                            <Skeleton className="h-48 w-full rounded-t-2xl" />


                            <div className="p-5 flex flex-col flex-1 justify-between gap-6 pt-0">
                                <div className="space-y-3">

                                    <Skeleton className="h-5 w-3/4 rounded-lg" />


                                    <div className="space-y-2 pt-1">
                                        <Skeleton className="h-3 w-1/2 rounded-md" />
                                        <Skeleton className="h-3 w-1/3 rounded-md" />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                                    <div className="space-y-1">
                                        <Skeleton className="h-2 w-8 rounded" />
                                        <Skeleton className="h-5 w-14 rounded-md" />
                                    </div>

                                    <Skeleton className="h-9 w-24 rounded-xl bg-emerald-50" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TrialsSkeleton;