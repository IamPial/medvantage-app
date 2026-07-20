"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button, Card, Chip } from "@heroui/react";
import {

    HiOutlineBuildingOffice2,
    HiOutlineGlobeAlt,
} from "react-icons/hi2";
import Image from "next/image";
import { TrialFormData } from "@/lib/api/exploreTrials";


interface TrialCardProps {
    trial: TrialFormData;
    index?: number;
}

export default function TrialCard({ trial, index = 0 }: TrialCardProps) {

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

                    {trial.image && <Image
                        src={trial.image}
                        alt={`${trial.disease} clinical trial`}
                        fill
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />}


                    <div className="absolute left-3 top-3">
                        <Chip
                            size="sm"
                            variant="soft"
                            className={`border backdrop-blur`}
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
                        <Link href={`/explore/${trial._id}`} className="block">
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