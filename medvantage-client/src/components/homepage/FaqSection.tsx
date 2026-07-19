"use client";

import { motion } from "motion/react";
import { Accordion, Chip } from "@heroui/react";
import { HiChevronDown } from "react-icons/hi2";


interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

const FAQS: FaqItem[] = [
    {
        id: "matching",
        question: "How does MedVantage's AI decide which trials I'm eligible for?",
        answer:
            "The AI compares your condition, medical history, location, and any documents you've uploaded against each trial's published eligibility criteria. It only surfaces trials where you meet the core requirements, ranked by how closely you match — you can still review the full criteria yourself before applying.",
    },
    {
        id: "cost",
        question: "Is there any cost to patients for joining a trial through MedVantage?",
        answer:
            "MedVantage itself is free for patients to browse trials and receive recommendations. Whether a specific trial covers study-related costs, travel, or compensation depends on that trial's sponsor — those details are listed on each trial's page before you apply.",
    },
    {
        id: "data-security",
        question: "How is my medical data protected?",
        answer:
            "All uploaded documents and personal health information are encrypted in transit and at rest, and access is limited to what's needed to check eligibility for trials you've expressed interest in. We follow HIPAA-aligned data handling practices throughout the platform.",
    },
    {
        id: "upload-format",
        question: "What format should researchers use to upload trial protocols?",
        answer:
            "PDF is the recommended format. Our Document Intelligence engine extracts eligibility criteria, dosing schedules, and endpoints directly from the file — there's no need to manually re-enter structured fields before publishing the trial.",
    },
    {
        id: "withdraw",
        question: "Can I leave a trial after I've enrolled through MedVantage?",
        answer:
            "Yes. Participation in any clinical trial is voluntary, and you can withdraw at any point by contacting the study site directly. MedVantage only facilitates the initial match — the trial site manages enrollment and withdrawal from there.",
    },
];

export default function FaqSection() {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-10 lg:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#0F6B62]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-white text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            FAQ
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        Everything patients and researchers usually ask before getting
                        started with MedVantage.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12"
                >
                    <Accordion className="rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50">
                        {FAQS.map((faq) => (
                            <Accordion.Item key={faq.id} id={faq.id} className="border-slate-100">
                                <Accordion.Heading>
                                    <Accordion.Trigger className="px-5 py-4 text-left text-sm font-semibold text-[#0B1F2A] hover:text-[#0F6B62] sm:px-6 sm:py-5 sm:text-base">
                                        {faq.question}
                                        <Accordion.Indicator>
                                            <HiChevronDown className="h-4 w-4 text-slate-400" />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>
                                <Accordion.Panel>
                                    <Accordion.Body className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                                        {faq.answer}
                                    </Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}