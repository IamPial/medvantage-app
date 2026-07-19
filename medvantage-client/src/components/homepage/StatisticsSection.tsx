"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    useReducedMotion,
    animate,
} from "framer-motion";
import { Card, Chip } from "@heroui/react";
import {
    HiOutlineBeaker,
    HiOutlineBuildingOffice2,
    HiOutlineGlobeAlt,
    HiOutlineCheckBadge,
} from "react-icons/hi2";

/**
 * MedVantage — Statistics Section
 * Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS · HeroUI v3.2.2
 *        · React Icons · Framer Motion
 *
 * "use client" is required — Framer Motion's useInView / useMotionValue and
 * the imperative `animate()` call all need the browser.
 */

type Stat = {
    label: string;
    value: number;
    suffix?: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: "teal" | "indigo";
};

const STATS: Stat[] = [
    {
        label: "Active Trials",
        value: 1240,
        suffix: "+",
        icon: HiOutlineBeaker,
        accent: "teal",
    },
    {
        label: "Research Institutions",
        value: 85,
        suffix: "+",
        icon: HiOutlineBuildingOffice2,
        accent: "indigo",
    },
    {
        label: "Countries",
        value: 24,
        suffix: "+",
        icon: HiOutlineGlobeAlt,
        accent: "teal",
    },
    {
        label: "Successful Matches",
        value: 9600,
        suffix: "+",
        icon: HiOutlineCheckBadge,
        accent: "indigo",
    },
];

const ACCENT_STYLES: Record<Stat["accent"], { bg: string; text: string; ring: string }> = {
    teal: { bg: "bg-[#0F6B62]/10", text: "text-[#0F6B62]", ring: "group-hover:ring-[#0F6B62]/30" },
    indigo: { bg: "bg-[#5B5FEF]/10", text: "text-[#5B5FEF]", ring: "group-hover:ring-[#5B5FEF]/30" },
};

function Counter({
    target,
    suffix = "",
    duration = 1.8,
}: {
    target: number;
    suffix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const prefersReducedMotion = useReducedMotion();
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (!isInView) return;
        if (prefersReducedMotion) {
            count.set(target);
            return;
        }
        const controls = animate(count, target, {
            duration,
            ease: [0.22, 1, 0.36, 1],
        });
        return controls.stop;
    }, [isInView, target, duration, count, prefersReducedMotion]);

    return (
        <span ref={ref} className="font-mono tabular-nums">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function StatisticsSection() {
    return (
        <section className="bg-white px-6 py-10 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-7xl">
                {/* header */}
                <div className="mx-auto max-w-2xl text-center">
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-[#F7FBFA] text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            By The Numbers
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        Powering clinical research at scale
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        Real trial activity, matched daily across a growing global
                        network of institutions and patients.
                    </p>
                </div>

                {/* cards */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        const accent = ACCENT_STYLES[stat.accent];
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="group h-full"
                            >
                                <Card
                                    className={`h-full border border-slate-100 bg-white shadow-sm shadow-slate-200/50 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${accent.ring}`}
                                >
                                    <Card.Content className="flex h-full flex-col items-start gap-4 p-6">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <Icon className={`h-6 w-6 ${accent.text}`} />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-semibold text-[#0B1F2A] sm:text-4xl">
                                                <Counter target={stat.value} suffix={stat.suffix} />
                                            </p>
                                            <p className="mt-1.5 text-sm text-slate-500">{stat.label}</p>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}