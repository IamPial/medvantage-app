import Link from "next/link";
import { Button } from "@heroui/react";
import { LuActivity, LuSearch, LuBrain, LuShieldCheck, LuArrowRight } from "react-icons/lu";

export default function Home() {
  return (
    <div className="bg-zinc-50/50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-white border-b border-zinc-100">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-100 shadow-sm shadow-emerald-500/5">
              <LuActivity className="h-3.5 w-3.5 animate-pulse" />
              AI Matching Engine Now Live
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-tight">
              Bridging Clinical Research <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                &amp; Patient Care
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              MedVantage leverages advanced Agentic AI to match patients with life-saving clinical trials and help researchers publish protocols instantly.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/explore" className="w-full sm:w-auto outline-none">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 shadow-md shadow-emerald-600/10 hover:scale-[1.01] active:scale-[0.99] transition-all rounded-full flex items-center justify-center gap-2"
                >
                  Find Active Trials
                  <LuArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register?role=researcher" className="w-full sm:w-auto outline-none">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-zinc-200 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 font-semibold px-8 bg-white rounded-full"
                >
                  For Researchers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards (Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Designed for Modern Healthcare Excellence
          </h2>
          <p className="mt-4 text-zinc-600">
            A secure, automated platform matching the right patients with complex clinical pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xs hover:shadow-md transition-all duration-300 group">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <LuBrain className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Smart Recommendation</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              AI analyzes patient profiles and medical criteria to produce precise match scores with explanations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xs hover:shadow-md transition-all duration-300 group">
            <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
              <LuSearch className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Advanced Trial Search</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Filter by phase, mutation, disease, location, or eligibility rules in seconds with intuitive options.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xs hover:shadow-md transition-all duration-300 group">
            <div className="h-12 w-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
              <LuShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Strict Data Security</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Fictional data demo environment. Fully sandbox-compliant with best practice structures for security.
            </p>
          </div>
        </div>
      </section>

      {/* Extra scrolling height segment to verify sticky shadow */}
      <section className="py-24 bg-zinc-100/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-zinc-400">Scroll down to test Sticky Navbar shadow state</p>
          <div className="h-[400px] flex items-center justify-center">
            <span className="text-zinc-300 text-lg italic">Scroll back up to watch shadow fade away...</span>
          </div>
        </div>
      </section>
    </div>
  );
}

