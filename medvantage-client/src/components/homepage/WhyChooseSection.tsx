"use client";

import { motion } from "motion/react";
import { Card } from "@heroui/react";
import {
    HiOutlineSparkles,
    HiOutlineDocumentMagnifyingGlass,
    HiOutlineShieldCheck,
    HiOutlineBolt,
} from "react-icons/hi2";
import type { IconType } from "react-icons";



interface Feature {
    icon: IconType;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: HiOutlineSparkles,
        title: "AI Trial Matching",
        description:
            "Our AI analyzes eligibility criteria, condition history, and location to surface trials patients actually qualify for — not just keyword matches.",
    },
    {
        icon: HiOutlineDocumentMagnifyingGlass,
        title: "Document Intelligence",
        description:
            "Upload medical records once. MedVantage extracts and structures the details needed to check eligibility automatically, no manual re-entry.",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Secure Platform",
        description:
            "End-to-end encryption and HIPAA-aligned data handling keep patient information protected at every step, from upload to match.",
    },
    {
        icon: HiOutlineBolt,
        title: "Fast Discovery",
        description:
            "Get a ranked shortlist of relevant trials in seconds instead of weeks of manual searching across scattered registries.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function WhyChooseSection() {
    return (
        <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
            {/* ambient background, echoes the Hero's palette */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-[#0F6B62]/5 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#5B5FEF]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                {/* heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <motion.span
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        custom={0}
                        className="block font-mono text-[11px] font-medium uppercase tracking-wider text-[#0F6B62]"
                    >
                        Why MedVantage
                    </motion.span>
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        custom={1}
                        className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl"
                    >
                        Built for patients and researchers alike
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        custom={2}
                        className="mt-4 text-base leading-relaxed text-slate-600"
                    >
                        Every part of MedVantage is designed around one goal: closing the
                        gap between patients and the trials that could help them.
                    </motion.p>
                </div>

                {/* feature grid */}
                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
                    {features.map(({ icon: Icon, title, description }, i) => (
                        <motion.div
                            key={title}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i + 3}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group"
                        >
                            <Card className="relative h-full overflow-hidden border border-slate-100 bg-white transition-shadow duration-300 group-hover:border-[#0F6B62]/25 group-hover:shadow-xl group-hover:shadow-[#0F6B62]/10">
                                <Card.Content className="flex h-full flex-col p-6">
                                    {/* icon */}
                                    <motion.div
                                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F6B62]/10"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        <Icon className="h-6 w-6 text-[#0F6B62] transition-colors duration-300 group-hover:text-[#0F6B62]" />
                                    </motion.div>

                                    <h3 className="text-base font-semibold text-[#0B1F2A]">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {description}
                                    </p>

                                    {/* accent underline on hover */}
                                    <span className="mt-5 block h-0.5 w-8 rounded-full bg-[#0F6B62]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#0F6B62]" />
                                </Card.Content>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}