"use client";

import { useState } from "react";
import {
    FiLogOut,
    FiMenu,
    FiX,
    FiHome,
    FiPieChart,
    FiActivity,
} from "react-icons/fi";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { IoCreateOutline } from "react-icons/io5";
import { RiEditCircleLine, RiProfileLine } from "react-icons/ri";
import { MdOutlineRecommend } from "react-icons/md";
import { LuBot } from "react-icons/lu";

const dashboardItems = [
    { name: "Overview", icon: <FiPieChart />, href: "/dashboard" },
    { name: "Add Trial", icon: <IoCreateOutline />, href: "/dashboard/add-trial" },
    { name: "Manage Trial", icon: <RiEditCircleLine />, href: "/dashboard/manage-trials" },
    { name: "AI Assistant", icon: <LuBot />, href: "/dashboard/ai-assistant" },
];



const DashBoardSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();




    const handleSignOut = async () => {
        await authClient.signOut();
        toast("Logout successful!", {
            style: {
                color: "#f10808",
            },
        });
        router.push("/");
        router.refresh();
    };

    return (
        <>
            <div className="md:hidden flex items-center justify-between p-4 bg-[#f8fafc] border-b border-gray-300 w-full fixed top-0 left-0 z-50">
                <span className="font-bold text-xl tracking-wider text-[#0f172a] flex items-center ">
                    Medvantage
                </span>
                <Button
                    isIconOnly
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#0f172a] bg-transparent "
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </Button>
            </div>

            <aside
                className={`border-r border-gray-300/50 fixed md:sticky top-0 left-0 z-40 w-64 h-screen bg-[#f8fafc]/95 md:bg-white backdrop-blur-xl   p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full md:flex"
                    }`}
            >
                <div className="flex flex-col gap-8 pt-20 md:pt-0">
                    <div className="hidden md:block">
                        <Link
                            href="/"
                            className="font-extrabold text-2xl tracking-wider text-[#0f172a] flex items-center">Medvantage
                        </Link>

                    </div>

                    <nav className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {dashboardItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${isActive
                                            ? "bg-[#0F6B62] text-white shadow-lg shadow-[#0F6B62]/20"
                                            : "text-[#0f172a] hover:bg-gray-300/45 hover:text-[#0F6B62] "
                                            }`}
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-6">
                    <Button
                        onClick={handleSignOut}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-start gap-4 px-4 py-3.5 rounded-xl font-medium w-full "
                    >
                        <FiLogOut className="text-lg" />
                        Logout
                    </Button>

                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex border border-gray-300 items-center gap-4 px-4 py-3.5 text-[#0f172a] hover:bg-gray-300/45 rounded-xl font-medium text-sm transition-all"
                    >
                        <FiHome className="text-lg" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default DashBoardSideBar;