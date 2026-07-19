"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button, Card, Chip } from "@heroui/react";
import { HiSparkles, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiArrowRight, FiActivity } from "react-icons/fi";


const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

export default function HeroSection() {
    const prefersReducedMotion = useReducedMotion();

    const floatAnim = (delay: number, distance = 10) =>
        prefersReducedMotion
            ? {}
            : {
                animate: { y: [0, -distance, 0] },
                transition: {
                    duration: 5,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                },
            };

    return (
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#F7FBFA] lg:h-[70vh]">
            {/* ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#0F6B62]/10 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#5B5FEF]/10 blur-3xl" />
                <svg
                    className="absolute inset-0 h-full w-full opacity-[0.35]"
                    viewBox="0 0 1200 800"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path
                        d="M0 420 C 200 380, 300 460, 420 420 C 520 388, 560 300, 640 300 C 700 300, 720 500, 780 500 C 860 500, 880 340, 960 340 C 1040 340, 1080 420, 1200 400"
                        stroke="#0F6B62"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-0">
                {/* LEFT COLUMN */}
                <div className="text-center lg:text-left">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0}
                        className="mb-5 inline-flex"
                    >
                        <Chip
                            variant="soft"
                            size="sm"
                            className="border border-[#0F6B62]/20 bg-white text-[#0F6B62] shadow-sm"
                        >
                            <span className="flex items-center gap-1.5">
                                <HiSparkles className="h-3.5 w-3.5" />
                                <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                                    AI-Powered Trial Matching
                                </span>
                            </span>
                        </Chip>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={1}
                        className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#0B1F2A] sm:text-5xl lg:text-6xl"
                    >
                        Find the Right{" "}
                        <span className="relative whitespace-nowrap text-[#0F6B62]">
                            Clinical Trial
                            <svg
                                className="absolute -bottom-1 left-0 w-full"
                                height="8"
                                viewBox="0 0 200 8"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M1 5.5C40 1.5 160 1.5 199 5.5"
                                    stroke="#0F6B62"
                                    strokeOpacity="0.35"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </span>{" "}
                        with AI
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={2}
                        className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0"
                    >
                        MedVantage matches patients to actively recruiting clinical
                        trials using AI trained on eligibility criteria, location, and
                        condition history — so the right study finds you faster.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={3}
                        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <Link href="/explore">
                            <Button
                                size="lg"
                                className="bg-[#0F6B62] text-white shadow-lg shadow-[#0F6B62]/20 hover:bg-[#0C574F]"
                            >
                                <span className="flex items-center gap-2">
                                    Explore Trials
                                    <FiArrowRight className="h-4 w-4" />
                                </span>
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="border border-slate-200 bg-white text-[#0B1F2A] hover:border-[#0F6B62]/40 hover:text-[#0F6B62]"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={4}
                        className="mt-9 flex items-center justify-center gap-2 text-slate-500 lg:justify-start"
                    >
                        <HiOutlineBuildingOffice2 className="h-4 w-4 text-[#5B5FEF]" />
                        <span className="text-xs">
                            Trusted by research institutions across{" "}
                            <span className="font-medium text-slate-700">12+ countries</span>
                        </span>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="relative mx-auto h-[340px] w-full max-w-md lg:h-full lg:max-w-none">
                    {/* base dashboard panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-10 lg:inset-x-6"
                    >
                        <Card className="h-[240px] border border-slate-100 bg-white/80 shadow-xl shadow-slate-200/60 backdrop-blur">
                            <Card.Content className="p-5">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                                        Patient Match Overview
                                    </span>
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#0F6B62]/60" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0F6B62]" />
                                    </span>
                                </div>
                                <div className="mt-6 flex h-28 items-end gap-2">
                                    {[38, 62, 45, 80, 55, 70, 90].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                                            className="w-full rounded-md bg-gradient-to-t from-[#0F6B62]/40 to-[#5B5FEF]/60"
                                        />
                                    ))}
                                </div>
                            </Card.Content>
                        </Card>
                    </motion.div>

                    {/* floating card: AI Recommendation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        {...floatAnim(0, 12)}
                        className="absolute right-0 top-2 w-52 sm:right-4 lg:right-0"
                    >
                        <Card className="border border-slate-100 bg-white shadow-xl shadow-slate-200/70">
                            <Card.Content className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0F6B62]/10">
                                        <svg className="absolute h-12 w-12 -rotate-90" viewBox="0 0 44 44">
                                            <circle cx="22" cy="22" r="18" fill="none" stroke="#E6EEEC" strokeWidth="4" />
                                            <motion.circle
                                                cx="22"
                                                cy="22"
                                                r="18"
                                                fill="none"
                                                stroke="#0F6B62"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeDasharray={2 * Math.PI * 18}
                                                initial={{ strokeDashoffset: 2 * Math.PI * 18 }}
                                                animate={{ strokeDashoffset: 2 * Math.PI * 18 * (1 - 0.92) }}
                                                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                                            />
                                        </svg>
                                        <span className="font-mono text-[11px] font-semibold text-[#0F6B62]">
                                            92%
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-[#0B1F2A]">
                                            AI Recommendation
                                        </p>
                                        <p className="font-mono text-[10px] text-slate-400">Match score</p>
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>
                    </motion.div>

                    {/* floating card: vitals */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        {...floatAnim(0.8, 10)}
                        className="absolute bottom-4 left-0 sm:left-4 lg:left-0"
                    >
                        <Card className="border border-slate-100 bg-white shadow-xl shadow-slate-200/70">
                            <Card.Content className="flex items-center gap-2 px-4 py-3">
                                <FiActivity className="h-4 w-4 text-[#5B5FEF]" />
                                <div>
                                    <p className="text-[11px] font-semibold text-[#0B1F2A]">
                                        Live eligibility check
                                    </p>
                                    <p className="font-mono text-[10px] text-slate-400">Updated 2m ago</p>
                                </div>
                            </Card.Content>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}