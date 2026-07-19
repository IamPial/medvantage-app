"use client";

import { motion } from "motion/react";
import { Chip } from "@heroui/react";
import type { IconType } from "react-icons";
import {
    HiOutlineDocumentArrowUp,
    HiOutlineCpuChip,
    HiOutlineClipboardDocumentCheck,
    HiOutlineBellAlert,
    HiArrowRight,
    HiArrowDown,
} from "react-icons/hi2";


interface WorkflowStep {
    icon: IconType;
    title: string;
    description: string;
}

const STEPS: WorkflowStep[] = [
    {
        icon: HiOutlineDocumentArrowUp,
        title: "Researcher Uploads PDF",
        description:
            "Trial protocols and consent documents are uploaded directly to MedVantage.",
    },
    {
        icon: HiOutlineCpuChip,
        title: "AI Extracts Information",
        description:
            "Our AI parses eligibility criteria, dosing, and endpoints automatically.",
    },
    {
        icon: HiOutlineClipboardDocumentCheck,
        title: "Clinical Trial Published",
        description:
            "The structured trial goes live and becomes searchable across the platform.",
    },
    {
        icon: HiOutlineBellAlert,
        title: "Patient Receives AI Recommendations",
        description:
            "Matching patients are notified the moment a relevant trial opens.",
    },
];

function StepCard({ step, index }: { step: WorkflowStep; index: number }) {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-[220px] flex-col items-center text-center lg:mx-0"
        >
            <div className="relative mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0F6B62]/20 bg-white shadow-md shadow-slate-200/60">
                    <Icon className="h-7 w-7 text-[#0F6B62]" />
                </div>
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0F6B62] font-mono text-[11px] font-semibold text-white">
                    {index + 1}
                </span>
            </div>
            <h3 className="text-sm font-semibold text-[#0B1F2A] sm:text-base">
                {step.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {step.description}
            </p>
        </motion.div>
    );
}

function Connector({ index }: { index: number }) {
    const delay = index * 0.25 + 0.2;

    return (
        <>
            {/* mobile / tablet: vertical connector */}
            <div className="flex flex-col items-center py-2 lg:hidden">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.35, delay, ease: "easeOut" }}
                    style={{ transformOrigin: "top" }}
                    className="h-8 w-px bg-[#0F6B62]/25"
                />
                <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: delay + 0.35 }}
                >
                    <HiArrowDown className="h-4 w-4 text-[#0F6B62]/60" />
                </motion.div>
            </div>

            {/* desktop: horizontal connector */}
            <div className="hidden flex-1 items-center px-2 lg:flex">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, delay, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                    className="h-px flex-1 bg-[#0F6B62]/25"
                />
                <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.3, delay: delay + 0.4 }}
                >
                    <HiArrowRight className="h-4 w-4 shrink-0 text-[#0F6B62]/60" />
                </motion.div>
            </div>
        </>
    );
}

export default function WorkflowSection() {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-10 lg:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#0F6B62]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                <div className="mx-auto max-w-2xl text-center">
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-white text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            How It Works
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        From upload to patient match, automatically
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        MedVantage turns a raw trial document into a live, matchable
                        listing without manual data entry at any step.
                    </p>
                </div>

                <div className="mt-16 flex flex-col lg:flex-row lg:items-start">
                    {STEPS.map((step, i) => (
                        <div key={step.title} className="flex flex-col lg:flex-1 lg:flex-row lg:items-start">
                            <StepCard step={step} index={i} />
                            {i < STEPS.length - 1 && <Connector index={i} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}