import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6 flex flex-col gap-8 min-h-[100vh] justify-center items-center bg-zinc-50/50">
            <div className="flex flex-col items-center justify-center gap-3 my-8">
                <Spinner size="lg" color="success" className="scale-125" />
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest animate-pulse">
                    Loading Data Logs...
                </span>
            </div>
        </div>
    );
};

export default Loading;