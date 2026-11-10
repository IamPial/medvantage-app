"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FiActivity, 
  FiSearch, 
  FiFileText, 
  FiCheckCircle, 
  FiClock, 
  FiArrowRight, 
  FiUserCheck 
} from "react-icons/fi";

export default function PatientDashboard() {
  // mock stats
  const stats = [
    { label: "Active AI Matches", value: "12", icon: FiActivity, color: "text-emerald-600 bg-emerald-50" },
    { label: "Applied Trials", value: "03", icon: FiFileText, color: "text-blue-600 bg-blue-50" },
    { label: "Pending Reviews", value: "01", icon: FiClock, color: "text-amber-600 bg-amber-50" },
    { label: "Eligible Status", value: "Verified", icon: FiCheckCircle, color: "text-purple-600 bg-purple-50" },
  ];

  // mock data
  const recentApplications = [
    { id: "TRL-8092", title: "Advanced Immunotherapy for Oncology", phase: "Phase II", status: "Under Review", date: "Oct 24, 2026" },
    { id: "TRL-4310", title: "Cardiovascular Gene Therapy Trial", phase: "Phase I", status: "Accepted", date: "Oct 18, 2026" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-10 text-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-xs border border-slate-100">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Welcome back, Patient! 👋
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Here is the latest update on your clinical trial matches and applications.
            </p>
          </div>
          <Link 
            href="/dashboard/ai-assistant" 
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00a86b] hover:bg-[#008f5d] text-white font-semibold text-sm transition-all shadow-sm shadow-emerald-600/10"
          >
            <FiSearch className="text-lg" />
            Find Matching Trials with AI
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="text-xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Applications Table */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-xs p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Recent Trial Applications</h3>
                <span className="text-xs font-semibold text-[#00a86b] hover:underline cursor-pointer">View All</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase">
                      <th className="pb-3">Trial ID & Title</th>
                      <th className="pb-3">Phase</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                    {recentApplications.map((app, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 pr-4">
                          <p className="font-semibold text-slate-900">{app.title}</p>
                          <span className="text-xs text-slate-400">{app.id} • Applied on {app.date}</span>
                        </td>
                        <td className="py-4 font-medium text-slate-600">{app.phase}</td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                            app.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-slate-400 hover:text-[#00a86b] font-medium text-xs inline-flex items-center gap-1">
                            Details <FiArrowRight />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* AI Quick Recommendation Card */}
          <div className="bg-linear-to-br from-slate-900 via-slate-800 to-[#006b43] rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00a86b] mb-4">
                <FiUserCheck className="text-xl text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold">AI Trial Matcher</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Update your health criteria profile to let MedVantage AI scan over 5,000+ active medical trials for your specific condition.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/dashboard/profile"
                className="w-full py-3 px-4 rounded-xl bg-[#00a86b] hover:bg-[#008f5d] text-white font-semibold text-sm text-center block transition-all shadow-md"
              >
                Update Health Profile
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}