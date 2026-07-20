"use client";

import React from "react";
import { motion } from "motion/react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";
import {
    LuShieldAlert,
    LuFileSpreadsheet,
    LuBrainCircuit,
    LuBookmark,
    LuSparkles,
    LuUserCheck,
    LuSearch,
    LuArrowUpRight,
    LuArrowDownRight
} from "react-icons/lu";

// Props Definition for Reusability
interface OverviewContentProps {
    type: "researcher" | "patient";
}

// Static Mock Data for Analytics & Metrics
const lineChartData = [
    { name: "Jan", activity: 30 },
    { name: "Feb", activity: 45 },
    { name: "Mar", activity: 40 },
    { name: "Apr", activity: 65 },
    { name: "May", activity: 50 },
    { name: "Jun", activity: 85 },
];

const pieChartData = [
    { name: "Oncology", value: 400 },
    { name: "Neurology", value: 300 },
    { name: "Cardiology", value: 200 },
    { name: "Immunology", value: 150 },
];

const COLORS = ["#00a86b", "#06b6d4", "#f59e0b", "#6366f1"];

export default function OverviewContent({ type }: OverviewContentProps) {

    // Dynamic Configuration based on user role/type
    const cardsConfig = type === "researcher" ? [
        { title: "Total Trials", value: "142", icon: LuFileSpreadsheet, color: "text-emerald-600 bg-emerald-50", trend: "+12%", isPositive: true },
        { title: "Published Trials", value: "98", icon: LuShieldAlert, color: "text-cyan-600 bg-cyan-50", trend: "+8%", isPositive: true },
        { title: "Patient Matches", value: "1,240", icon: LuUserCheck, color: "text-amber-600 bg-amber-50", trend: "+24%", isPositive: true },
        { title: "AI Analyses", value: "8,432", icon: LuBrainCircuit, color: "text-indigo-600 bg-indigo-50", trend: "+38%", isPositive: true },
    ] : [
        { title: "Saved Trials", value: "18", icon: LuBookmark, color: "text-emerald-600 bg-emerald-50", trend: "+2", isPositive: true },
        { title: "Recommendations", value: "7", icon: LuSparkles, color: "text-indigo-600 bg-indigo-50", trend: "New", isPositive: true },
        { title: "Profile Completion", value: "85%", icon: LuUserCheck, color: "text-cyan-600 bg-cyan-50", trend: "+5%", isPositive: true },
        { title: "Recent Searches", value: "32", icon: LuSearch, color: "text-zinc-600 bg-zinc-50", trend: "-4%", isPositive: false },
    ];

    const activities = type === "researcher" ? [
        { id: 1, title: "New Trial Published", desc: "Phase III Lung Cancer protocol broadcasted successfully.", time: "2 hours ago" },
        { id: 2, title: "AI Cohort Synthesis Completed", desc: "Successfully matched 84 viable candidates for Project Helix.", time: "5 hours ago" },
        { id: 3, title: "Data Audit Approved", desc: "Institutional Review Board (IRB) approved standard metrics logs.", time: "1 day ago" },
    ] : [
        { id: 1, title: "Recommendation Generated", desc: "New Immunotherapy trial matches your updated medical metrics.", time: "10 mins ago" },
        { id: 2, title: "Profile Updated", desc: "Clinical biomarkers and diagnostics reports saved onto node data.", time: "3 hours ago" },
        { id: 3, title: "Saved Trial Update", desc: "Breast Cancer protocol recruitment status updated to Active.", time: "2 days ago" },
    ];

    return (
        <div className="w-full space-y-8 p-1 sm:p-2 selection:bg-emerald-500/10 text-zinc-900">

            {/* 1. Header Section */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 capitalize">
                    {type} Dashboard Overview
                </h1>
                <p className="text-sm text-zinc-500 mt-1">
                    Monitor structural real-time pipelines, analytical metrics, and ongoing workflows.
                </p>
            </div>

            {/* 2. Responsive Summary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cardsConfig.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4, scale: 1.01 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm shadow-zinc-200/40 flex items-start justify-between group cursor-pointer"
                        >
                            <div className="space-y-3">
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{card.title}</span>
                                <h3 className="text-3xl font-bold tracking-tight text-zinc-900">{card.value}</h3>
                                <div className="flex items-center gap-1.5">
                                    {card.isPositive ? (
                                        <LuArrowUpRight className="text-emerald-600 text-sm" />
                                    ) : (
                                        <LuArrowDownRight className="text-rose-500 text-sm" />
                                    )}
                                    <span className={`text-xs font-semibold ${card.isPositive ? "text-emerald-600" : "text-rose-500"}`}>
                                        {card.trend}
                                    </span>
                                    <span className="text-[11px] text-zinc-400 font-medium">vs last month</span>
                                </div>
                            </div>

                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${card.color}`}>
                                <IconComponent className="h-5.5 w-5.5" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 3. Responsive Charts Area */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Chart One: Line Chart (Activity Tracker) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-100 shadow-sm shadow-zinc-200/40 xl:col-span-2 flex flex-col justify-between">
                    <div className="mb-4">
                        <h3 className="text-base font-bold text-zinc-900">Monthly Performance Analytics</h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Aggregated tracking index timeline across active quadrants.</p>
                    </div>
                    <div className="w-full h-72 text-xs">
                        <ResponsiveContainer width="100%" h="100%">
                            <LineChart data={lineChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <XAxis dataKey="name" stroke="#a1a1aa" tickLine={false} />
                                <YAxis stroke="#a1a1aa" tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #f4f4f5", shadow: "sm" }}
                                    labelStyle={{ fontWeight: "bold", color: "#18181b" }}
                                />
                                <Line type="monotone" dataKey="activity" stroke="#00a86b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart Two: Pie Chart (Therapeutic Area Distribution) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-100 shadow-sm shadow-zinc-200/40 flex flex-col justify-between">
                    <div>
                        <h3 className="text-base font-bold text-zinc-900">Domain Distribution</h3>
                        <p className="text-xs text-zinc-400 mt-0.5">Proportional segmentation of active protocols.</p>
                    </div>
                    <div className="w-full h-56 flex items-center justify-center text-xs my-3">
                        <ResponsiveContainer width="100%" h="100%">
                            <PieChart>
                                <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value">
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend iconType="circle" wrapperStyle={{ fontSize: "11px", marginTop: "10px" }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            {/* 4. Recent Activity Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm shadow-zinc-200/40">
                <div className="mb-6">
                    <h3 className="text-base font-bold text-zinc-900">Recent Workflow Logs</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">Chronological system events and diagnostic modifications.</p>
                </div>

                <div className="relative border-left border-zinc-100 pl-5 ml-2.5 space-y-6">
                    {activities.map((act) => (
                        <div key={act.id} className="relative group">
                            {/* Timeline Bullet Node Indicator */}
                            <div className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm ring-4 ring-emerald-50/70 transition-transform group-hover:scale-110" />

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                                        {act.title}
                                    </h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">{act.desc}</p>
                                </div>
                                <span className="text-[11px] text-zinc-400 whitespace-nowrap self-start sm:self-center font-medium bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-md">
                                    {act.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}