"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";

interface ApplyNowBtnProps {
    disease: string;
}

const ApplyNowBtn = ({ disease }: ApplyNowBtnProps) => {

    const { data: session } = authClient.useSession()
    const user = session?.user;


    const handleApply = () => {
        toast.success("Application Submitted Successfully", {
            style: {
                color: "#00c950",
            },
        });
    };

    return (
        <div >
            {user ? (<Button
                onClick={handleApply}
                className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
                Apply Now
            </Button>
            ) : (

                <Link href="/login">
                    <Button
                        className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                        Login to Apply Now
                    </Button>
                </Link>
            )}

        </div>
    );
};

export default ApplyNowBtn;