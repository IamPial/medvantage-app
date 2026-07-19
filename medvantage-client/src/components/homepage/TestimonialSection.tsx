"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar, Card, Chip } from "@heroui/react";
import {
    HiStar,
    HiOutlineChatBubbleBottomCenterText,
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi2";

/**
 * MedVantage — Testimonials Section (Swiper carousel)
 * Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS · HeroUI v3.2.2 · React Icons · Motion · Swiper
 *
 * Install:
 *   npm install swiper
 *
 * `loop: true` is what makes the carousel transition smoothly back to the
 * start instead of jump-cutting — Swiper clones the first few slides
 * behind the scenes so "end -> start" reads as continuous sliding.
 * `loopAdditionalSlides` keeps enough clones around so nothing pops in
 * abruptly at the widest breakpoint (3 slides per view).
 *
 * `--swiper-theme-color` (set inline on the wrapper below) is the CSS
 * variable Swiper's own stylesheet reads for pagination/navigation color,
 * so no extra globals.css overrides are needed to match the brand teal.
 */

interface Testimonial {
    name: string;
    role: string;
    hospital: string;
    review: string;
    rating: number; // 1-5
    imgUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Dr. Sophia Bennett",
        role: "Oncology Specialist",
        hospital: "St. Mary's Medical Center",
        review:
            "Finding eligible participants used to take weeks. MedVantage's AI matching reduced that effort to just a few hours while improving recruitment quality.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Michael Chen",
        role: "Clinical Operations Manager",
        hospital: "Pacific Health Institute",
        review:
            "Our research teams now collaborate from a single platform. Trial management, patient tracking, and reporting are significantly more efficient than before.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Dr. Emily Carter",
        role: "Neurologist",
        hospital: "Northbridge Medical Center",
        review:
            "The intelligent patient recommendations are surprisingly accurate. We've increased enrollment while ensuring every participant meets the study criteria.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Ahmed Rahman",
        role: "Research Data Manager",
        hospital: "United Medical Research Center",
        review:
            "The analytics dashboard gives us real-time visibility into recruitment progress, helping us identify bottlenecks before they become major delays.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Dr. Olivia Martinez",
        role: "Clinical Trial Director",
        hospital: "Memorial Healthcare",
        review:
            "Protocol publishing, patient outreach, and eligibility verification now happen in one streamlined workflow. It has transformed how our trials operate.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Rachel Kim",
        role: "Research Nurse",
        hospital: "Brighton University Hospital",
        review:
            "I spend less time on administrative work and more time supporting patients. The automated matching process is both fast and reliable.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Dr. David Wilson",
        role: "Immunologist",
        hospital: "Central Research Hospital",
        review:
            "We've seen a measurable improvement in recruitment speed without sacrificing patient safety. MedVantage has become an essential part of every new study.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=870&auto=format&fit=crop",
    },
    {
        name: "Fatima Al-Hassan",
        role: "Clinical Research Associate",
        hospital: "Global Health Institute",
        review:
            "The platform is intuitive, responsive, and remarkably effective. Our sponsors appreciate the transparency and real-time recruitment insights it provides.",
        rating: 5,
        imgUrl:
            "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=870&auto=format&fit=crop",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <HiStar
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "text-[#F5A524]" : "text-slate-200"}`}
                />
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="relative h-full overflow-hidden border border-slate-100 bg-white shadow-md shadow-slate-200/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/70">
            <Card.Content className="flex h-full flex-col p-6">
                <HiOutlineChatBubbleBottomCenterText className="absolute right-5 top-5 h-8 w-8 text-[#0F6B62]/10" />

                <StarRating rating={testimonial.rating} />

                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    “{testimonial.review}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <Avatar className="h-11 w-11 shrink-0">
                        <Avatar.Image alt={testimonial.name} src={testimonial.imgUrl} />
                    </Avatar>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#0B1F2A]">
                            {testimonial.name}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                            {testimonial.role} · {testimonial.hospital}
                        </p>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
}

/** Custom nav buttons rendered inside <Swiper>, driven by the useSwiper hook. */
function PrevButton() {
    const swiper = useSwiper();
    return (
        <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiper.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F2A] shadow-sm transition-colors hover:border-[#0F6B62]/40 hover:text-[#0F6B62] disabled:pointer-events-none disabled:opacity-40"
        >
            <HiChevronLeft className="h-5 w-5" />
        </button>
    );
}

function NextButton() {
    const swiper = useSwiper();
    return (
        <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiper.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F2A] shadow-sm transition-colors hover:border-[#0F6B62]/40 hover:text-[#0F6B62] disabled:pointer-events-none disabled:opacity-40"
        >
            <HiChevronRight className="h-5 w-5" />
        </button>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[#F7FBFA] px-6 py-20 lg:px-12 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#5B5FEF]/5 blur-3xl" />
                <div className="absolute -right-24 top-0 h-[320px] w-[320px] rounded-full bg-[#0F6B62]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <Chip
                        variant="soft"
                        size="sm"
                        className="border border-[#0F6B62]/20 bg-white text-[#0F6B62]"
                    >
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider">
                            Testimonials
                        </span>
                    </Chip>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F2A] sm:text-4xl">
                        Trusted by clinicians and patients alike
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                        Hear from the researchers and advocates using MedVantage to close
                        the gap between patients and trials.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-14"
                    style={{ "--swiper-theme-color": "#0F6B62" } as CSSProperties}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={600}
                        loop={true}
                        loopAdditionalSlides={2}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="!pb-12"
                    >
                        {TESTIMONIALS.map((t) => (
                            <SwiperSlide key={t.name} className="!h-auto">
                                <TestimonialCard testimonial={t} />
                            </SwiperSlide>
                        ))}

                        {/* nav buttons overlaid on desktop, stacked below on mobile */}
                        <div className="mt-2 flex items-center justify-center gap-3 lg:absolute lg:inset-y-0 lg:mt-0 lg:w-full lg:items-center lg:justify-between lg:px-0">
                            <div className="lg:pointer-events-auto lg:-translate-x-14">
                                <PrevButton />
                            </div>
                            <div className="lg:pointer-events-auto lg:translate-x-14">
                                <NextButton />
                            </div>
                        </div>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}