import { Skeleton } from "@heroui/react";

export default function Loading() {
    const loadingArray = Array.from({ length: 5 });

    return (
        <div className="p-4 bg-zinc-50/50 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48 rounded-xl bg-zinc-200" />
                    <Skeleton className="h-4 w-72 rounded-lg bg-zinc-200" />
                </div>
                <Skeleton className="h-10 w-40 rounded-xl bg-emerald-200" />
            </div>

            {/* Main Container */}
            <div className="bg-white border border-zinc-200/60 rounded-2xl shadow-lg overflow-hidden">
                {/* Desktop View (Table) */}
                <div className="hidden md:block p-4">
                    <div className="grid grid-cols-7 gap-4 border-b border-zinc-100 pb-3 mb-2 px-2">
                        <Skeleton className="h-4 w-24 rounded bg-zinc-200 col-span-2" />
                        <Skeleton className="h-4 w-16 rounded bg-zinc-200" />
                        <Skeleton className="h-4 w-20 rounded bg-zinc-200" />
                        <Skeleton className="h-4 w-12 rounded bg-zinc-200 justify-self-center" />
                        <Skeleton className="h-4 w-12 rounded bg-zinc-200 justify-self-center" />
                        <Skeleton className="h-4 w-16 rounded bg-zinc-200 justify-self-end" />
                    </div>

                    {loadingArray.map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-7 gap-4 py-4 items-center border-b border-zinc-50 last:border-0 px-2"
                        >
                            <div className="flex items-center gap-3 col-span-2">
                                <Skeleton className="w-12 h-12 rounded-xl bg-zinc-200 shrink-0" />
                                <div className="space-y-1.5 w-full">
                                    <Skeleton className="h-4 w-3/4 rounded-md bg-zinc-200" />
                                    <Skeleton className="h-3 w-1/2 rounded-md bg-zinc-200" />
                                </div>
                            </div>

                            <Skeleton className="h-4 w-16 rounded-md bg-zinc-200" />
                            <Skeleton className="h-4 w-24 rounded-md bg-zinc-200" />
                            <Skeleton className="h-5 w-10 rounded bg-zinc-200 justify-self-center" />
                            <Skeleton className="h-5 w-14 rounded-full bg-zinc-200 justify-self-center" />

                            <div className="flex justify-end gap-2">
                                <Skeleton className="h-8 w-8 rounded-lg bg-zinc-200" />
                                <Skeleton className="h-8 w-8 rounded-lg bg-zinc-200" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="block md:hidden p-4 space-y-4">
                    {loadingArray.map((_, index) => (
                        <div
                            key={index}
                            className="border border-zinc-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm bg-white"
                        >
                            <div className="flex gap-3">
                                <Skeleton className="w-14 h-14 rounded-xl bg-zinc-200 shrink-0" />
                                <div className="overflow-hidden space-y-2 w-full">
                                    <Skeleton className="h-4 w-2/3 rounded-md bg-zinc-200" />
                                    <Skeleton className="h-3 w-full rounded-md bg-zinc-200" />
                                </div>
                            </div>

                            <div className="flex justify-between items-center border-t border-zinc-50 pt-2.5 mt-1">
                                <div className="space-y-1">
                                    <Skeleton className="h-2 w-20 rounded bg-zinc-200" />
                                    <div className="flex gap-2 items-center">
                                        <Skeleton className="h-4 w-10 rounded-md bg-zinc-200" />
                                        <Skeleton className="h-3 w-12 rounded-md bg-zinc-200" />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Skeleton className="h-8 w-14 rounded-lg bg-zinc-200" />
                                    <Skeleton className="h-8 w-8 rounded-lg bg-zinc-200" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}