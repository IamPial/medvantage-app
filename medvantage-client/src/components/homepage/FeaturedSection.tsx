import { Chip } from "@heroui/react";
import TrialCard, { type ClinicalTrial } from "../TrialCard";


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

export default function FeaturedSection({
    trials = FEATURED_TRIALS,
}: {
    trials?: ClinicalTrial[];
}) {
    return (
        <section className="bg-[#F7FBFA] px-6 py-10 lg:px-12 lg:py-16">
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