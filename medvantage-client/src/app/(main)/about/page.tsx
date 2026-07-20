"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "@heroui/react";
import {
  LuSearch,
  LuCpu,
  LuShieldCheck,
  LuZap,
  LuLayers,
  LuActivity,
  LuSparkles
} from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa6";
import Link from "next/link";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  }),
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 selection:bg-emerald-500/10 selection:text-emerald-700">

      {/* ১. Hero Section (Visual Dashboard Node with New Card Anatomy) */}
      <section className="relative overflow-hidden py-16 lg:py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI-Powered Healthcare Matching Platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              About <span className="text-emerald-600">MedVantage</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              MedVantage is an AI-powered platform designed to help patients and researchers discover suitable clinical trials. We streamline complex eligibility parameters to connect critical research pipelines with global cohorts instantly.
            </p>
          </motion.div>

          {/* Interactive UI Block utilizing exact Card Anatomy */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="w-full max-w-md border border-zinc-200/80 bg-white shadow-sm shadow-zinc-200/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />

              <Card.Header className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <LuActivity size={16} />
                  </div>
                  <Card.Title className="text-xs font-bold text-zinc-800">System Live</Card.Title>
                </div>
                <Card.Description className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-500">
                  Node_v1.6
                </Card.Description>
              </Card.Header>

              <Card.Content className="space-y-3 py-4">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3">
                  <LuSparkles className="text-emerald-600 shrink-0" size={18} />
                  <div className="space-y-0.5 w-full">
                    <div className="h-2 w-24 bg-zinc-200 rounded animate-pulse" />
                    <div className="h-1.5 w-full bg-zinc-100 rounded" />
                  </div>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center gap-3">
                  <LuCpu className="text-emerald-600 shrink-0" size={18} />
                  <div className="space-y-0.5 w-full">
                    <div className="h-2 w-16 bg-zinc-200 rounded" />
                    <div className="h-1.5 w-4/5 bg-zinc-100 rounded" />
                  </div>
                </div>
              </Card.Content>

              <Card.Footer className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
                <span>Clinical Trial Vector Search</span>
                <span className="font-bold text-emerald-600">Active Mesh</span>
              </Card.Footer>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* ২. Our Mission Section */}
      <section className="py-16 bg-white border-y border-zinc-200/60">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Core Purpose</h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Our Mission</h3>
          <p className="text-lg md:text-xl font-medium text-zinc-700 max-w-2xl mx-auto leading-relaxed pt-2">
            "Our mission is to simplify clinical trial discovery using AI-powered technology, making research more accessible for patients and healthcare professionals."
          </p>
        </div>
      </section>

      {/* ৩. What We Offer Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Capabilities</h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">What We Offer</h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <FeatureCard
            index={0}
            icon={<LuSearch className="text-emerald-600" size={22} />}
            title="Clinical Trial Discovery"
            description="Access a comprehensive database of active clinical trials instantly using precise filters."
          />
          <FeatureCard
            index={1}
            icon={<LuCpu className="text-emerald-600" size={22} />}
            title="AI Trial Matching"
            description="Advanced alignment algorithms connect eligible patient constraints with live studies."
          />
          <FeatureCard
            index={2}
            icon={<LuShieldCheck className="text-emerald-600" size={22} />}
            title="Secure Research Platform"
            description="Compliant data pipelines ensuring strict privacy regulations for clinical workflows."
          />
          <FeatureCard
            index={3}
            icon={<FaRegChartBar className="text-emerald-600" size={22} />}
            title="Healthcare Insights"
            description="Dynamic analysis logs and optimization insights for clinical operational teams."
          />
        </motion.div>
      </section>

      {/* ৪. Why Choose MedVantage Section */}
      <section className="py-20 bg-zinc-100/50 border-t border-zinc-200/60 max-w-7xl mx-auto sm:rounded-3xl sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Distinction</h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Why Choose MedVantage</h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <HighlightCard index={0} icon={<LuSparkles className="text-emerald-600" />} title="AI-Powered Recommendations" />
          <HighlightCard index={1} icon={<LuShieldCheck className="text-emerald-600" />} title="Trusted Research Platform" />
          <HighlightCard index={2} icon={<LuZap className="text-emerald-600" />} title="Fast Trial Search" />
          <HighlightCard index={3} icon={<LuLayers className="text-emerald-600" />} title="Easy-to-Use Interface" />
        </motion.div>
      </section>

      {/* ৫. Statistics Section */}
      <section className="py-16 bg-zinc-900 text-white my-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <StatItem index={0} value="500+" label="Clinical Trials" />
            <StatItem index={1} value="120+" label="Research Hospitals" />
            <StatItem index={2} value="5,000+" label="Registered Users" />
            <StatItem index={3} value="95%" label="Matching Accuracy" />
          </motion.div>
        </div>
      </section>

      {/* ৬. Call To Action Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
              Start Exploring Clinical Trials Today
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Sync active parameters with dynamic medical networks and investigate biological diagnostics seamlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/exploer" >
              <Button
                className="w-full sm:w-auto font-bold text-white bg-emerald-600 shadow-sm hover:bg-emerald-700 transition-colors rounded-xl h-11 px-6"
              >
                Explore Trials
              </Button>
            </Link>
            <Link href='contact'>
              <Button
                className="w-full sm:w-auto font-bold text-white bg-emarald-400 hover:bg-emarald-500  rounded-xl h-11 px-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// ================= Reusable Components utilizing strict Dot-Notation Anatomy =================

function FeatureCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  return (
    <motion.div custom={index} className="h-full">
      <Card className="h-full border border-zinc-200/80 bg-white shadow-sm rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md duration-200">
        <Card.Header className="flex flex-col items-start gap-4 pb-2">
          <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
            {icon}
          </div>
          <Card.Title className="font-bold text-base text-zinc-900 tracking-tight">
            {title}
          </Card.Title>
        </Card.Header>
        <Card.Content className="pt-0">
          <Card.Description className="text-xs text-zinc-400 leading-relaxed font-normal">
            {description}
          </Card.Description>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

function HighlightCard({ icon, title, index }: { icon: React.ReactNode; title: string; index: number }) {
  return (
    <motion.div custom={index}>
      <Card className="border border-zinc-200/60 bg-white shadow-sm rounded-xl transition-all hover:border-emerald-200">
        <Card.Content className="p-4 flex flex-row items-center gap-3 text-left">
          <div className="p-2 rounded-lg bg-emerald-50 text-base flex items-center justify-center shrink-0">
            {icon}
          </div>
          <Card.Title className="font-bold text-zinc-800 text-sm m-0">
            {title}
          </Card.Title>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div custom={index} className="space-y-1">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {value}
      </div>
      <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}