import { Button } from "@heroui/react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="bg-zinc-50/50 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
            <div className="max-w-md w-full space-y-6">

                {/* Big 404 Badge */}
                <div className="relative select-none">
                    <h1 className="text-9xl font-black tracking-tighter text-zinc-200/60 animate-pulse">
                        404
                    </h1>
                    <p className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-emerald-600 tracking-wide uppercase mt-4">
                        Trial Not Found
                    </p>
                </div>

                {/* Messaging */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
                        Lost in Research?
                    </h2>
                    <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                        The trial or data panel you are looking for might have been archived, had its ID changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Button */}
                <div className="flex flex-col sm:flex-row justify-center items-center pt-2">
                    <Link href="/" className="w-full sm:w-auto">
                        <Button
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-5 py-2.5 text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FiHome size={16} /> Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}