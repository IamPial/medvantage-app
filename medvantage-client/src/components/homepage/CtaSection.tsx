"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { HiArrowRight, HiOutlineMagnifyingGlass } from "react-icons/hi2";



export default function CtaSection() {
    return (
        <section className="px-6 py-10 lg:px-12 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F6B62] via-[#12786D] to-[#5B5FEF] px-6 py-16 text-center shadow-2xl shadow-[#0F6B62]/20 sm:px-12 sm:py-20 lg:px-20"
            >
                {/* decorative overlay */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[#0B1F2A]/20 blur-3xl" />
                    <svg
                        className="absolute inset-0 h-full w-full opacity-[0.08]"
                        viewBox="0 0 800 400"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <path
                            d="M-20 300 C 100 260, 220 340, 340 300 C 440 268, 480 180, 580 180 C 660 180, 690 320, 800 300"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                <div className="relative mx-auto max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Accelerate Clinical Research with AI
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                        Join the researchers publishing trials in minutes and the
                        patients finding them the moment they qualify — all matched
                        automatically by MedVantage.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link href="/login" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full bg-white text-[#0F6B62] shadow-lg shadow-black/10 hover:bg-white/90 sm:w-auto"
                            >
                                <span className="flex items-center gap-2">
                                    Get Started
                                    <HiArrowRight className="h-4 w-4" />
                                </span>
                            </Button>
                        </Link>
                        <Link href="/explore" className="w-full sm:w-auto">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full border border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto"
                            >
                                <span className="flex items-center gap-2">
                                    <HiOutlineMagnifyingGlass className="h-4 w-4" />
                                    Explore Trials
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}