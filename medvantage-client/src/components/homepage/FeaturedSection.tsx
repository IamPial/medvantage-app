"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Card, Chip } from "@heroui/react";
import {
    HiOutlineBeaker,
    HiOutlineHeart,
    HiOutlineCpuChip,
    HiOutlineHandRaised,
    HiOutlineCloud,
    HiOutlineShieldCheck,
    HiOutlineBuildingOffice2,
    HiOutlineGlobeAlt,
} from "react-icons/hi2";



export type TrialCategory =
    | "endocrine"
    | "oncology"
    | "neurology"
    | "rheumatology"
    | "respiratory"
    | "nephrology";

export type TrialPhase = "Phase I" | "Phase II" | "Phase III" | "Phase IV";

export interface ClinicalTrial {
    id: string;
    disease: string;
    hospital: string;
    country: string;
    phase: TrialPhase;
    category: TrialCategory;
    imageUrl?: string;
}

const FEATURED_TRIALS: ClinicalTrial[] = [
    {
        id: "type-2-diabetes-cgh",
        disease: "Type 2 Diabetes",
        hospital: "City General Hospital",
        country: "United States",
        phase: "Phase III",
        category: "endocrine",
    },
    {
        id: "breast-cancer-nci",
        disease: "Breast Cancer",
        hospital: "National Cancer Institute",
        country: "India",
        phase: "Phase II",
        category: "oncology",
    },
    {
        id: "alzheimers-royal-care",
        disease: "Alzheimer's Disease",
        hospital: "Royal Care Hospital",
        country: "United Kingdom",
        phase: "Phase III",
        category: "neurology",
    },
    {
        id: "rheumatoid-arthritis-st-marys",
        disease: "Rheumatoid Arthritis",
        hospital: "St. Mary's Medical Center",
        country: "Canada",
        phase: "Phase I",
        category: "rheumatology",
    },
    {
        id: "asthma-green-valley",
        disease: "Asthma",
        hospital: "Green Valley Clinic",
        country: "Australia",
        phase: "Phase II",
        category: "respiratory",
    },
    {
        id: "ckd-sunrise-health",
        disease: "Chronic Kidney Disease",
        hospital: "Sunrise Health Institute",
        country: "Germany",
        phase: "Phase III",
        category: "nephrology",
    },
];

const CATEGORY_STYLES: Record<
    TrialCategory,
    { icon: React.ComponentType<{ className?: string }>; gradient: string }
> = {
    endocrine: { icon: HiOutlineBeaker, gradient: "from-[#0F6B62] to-[#0C574F]" },
    oncology: { icon: HiOutlineHeart, gradient: "from-[#5B5FEF] to-[#3F42B8]" },
    neurology: { icon: HiOutlineCpuChip, gradient: "from-[#0F6B62] to-[#5B5FEF]" },
    rheumatology: { icon: HiOutlineHandRaised, gradient: "from-[#3F42B8] to-[#0F6B62]" },
    respiratory: { icon: HiOutlineCloud, gradient: "from-[#0C574F] to-[#0F6B62]" },
    nephrology: { icon: HiOutlineShieldCheck, gradient: "from-[#5B5FEF] to-[#0F6B62]" },
};

const PHASE_STYLES: Record<TrialPhase, string> = {
    "Phase I": "border-slate-200 bg-slate-50 text-slate-600",
    "Phase II": "border-[#5B5FEF]/20 bg-[#5B5FEF]/10 text-[#5B5FEF]",
    "Phase III": "border-[#0F6B62]/20 bg-[#0F6B62]/10 text-[#0F6B62]",
    "Phase IV": "border-emerald-200 bg-emerald-50 text-emerald-700",
};

function TrialCard({ trial, index }: { trial: ClinicalTrial; index: number }) {
    const { icon: Icon, gradient } = CATEGORY_STYLES[trial.category];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full"
        >
            <Card className="h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                {/* trial image / themed fallback */}
                <div className="relative h-44 w-full overflow-hidden">
                    {trial.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={trial.imageUrl}
                            alt={`${trial.disease} clinical trial`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div
                            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`}
                        >
                            <Icon className="h-12 w-12 text-white/90" />
                        </div>
                    )}
                    <div className="absolute left-3 top-3">
                        <Chip
                            size="sm"
                            variant="soft"
                            className={`border ${PHASE_STYLES[trial.phase]} backdrop-blur`}
                        >
                            <span className="font-mono text-[10px] font-medium uppercase tracking-wider">
                                {trial.phase}
                            </span>
                        </Chip>
                    </div>
                </div>

                <Card.Content className="flex h-full flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold leading-snug text-[#0B1F2A]">
                        {trial.disease}
                    </h3>

                    <div className="flex flex-col gap-1.5 text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                            <HiOutlineBuildingOffice2 className="h-4 w-4 shrink-0 text-slate-400" />
                            {trial.hospital}
                        </span>
                        <span className="flex items-center gap-2">
                            <HiOutlineGlobeAlt className="h-4 w-4 shrink-0 text-slate-400" />
                            {trial.country}
                        </span>
                    </div>

                    <div className="mt-auto pt-2">
                        <Link href={`/trials/${trial.id}`} className="block">
                            <Button
                                variant="secondary"
                                className="w-full border border-slate-200 bg-white text-[#0B1F2A] hover:border-[#0F6B62]/40 hover:bg-[#0F6B62] hover:text-white"
                            >
                                View Details
                            </Button>
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </motion.div>
    );
}

export default function FeaturedSection({
    trials = FEATURED_TRIALS,
}: {
    trials?: ClinicalTrial[];
}) {
    return (
        <section className="bg-[#F7FBFA] px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-white text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            Featured Trials
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        Actively recruiting studies
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        A snapshot of trials currently matching patients across our
                        partner network.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {trials.map((trial, i) => (
                        <TrialCard key={trial.id} trial={trial} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}