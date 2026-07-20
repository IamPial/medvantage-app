
import { Card } from "@heroui/react";
import { LuFileSearch } from "react-icons/lu";
import { getAllExploreTrialItems, TrialFormData } from "@/lib/api/exploreTrials";
import ExploreFilters from "@/components/ExploreFilters";
import TrialCard from "@/components/TrialCard";


interface ExplorePageProps {
  searchParams: Promise<{ search?: string; country?: string; phase?: string }>;
}

export const metadata = {
  title: "Explore Clinical Trials | MedVantage",
  description:
    "MedVantage is an AI-powered Clinical Trial & Rare Disease Matching Platform. Explore active clinical protocols and medical research criteria.",
};

const ExplorePage = async ({ searchParams }: ExplorePageProps) => {
  // Await search parameters delivered by the Next.js 15+ server runtime
  const { search, country, phase } = await searchParams;

  // Directly fetching filtered data from the server node/API
  const trialsData = await getAllExploreTrialItems({ search, country, phase });

  return (
    <div className="bg-zinc-50/50 min-h-screen text-zinc-900 py-10 px-4 md:px-8 lg:px-12 selection:bg-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            Explore Clinical <span className="text-emerald-600">Trials</span>
          </h1>
          <p className="text-sm text-zinc-500 max-w-2xl">
            Browse active clinical trials, investigate biological diagnostics, and sync real-time medical eligibility parameters.
          </p>
        </div>

        {/* Filter Console Component Wrapper */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm shadow-zinc-200/30">
          <ExploreFilters />
        </div>

        {/* Dynamic States & Responsive Grid Layout */}
        {trialsData.length === 0 ? (
          <Card className="flex flex-col items-center justify-center text-center py-20 bg-white border border-zinc-200/80 shadow-sm rounded-2xl">
            <div className="h-14 w-14 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 text-zinc-400 mb-4">
              <LuFileSearch className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">No Clinical Trials Found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mt-1">
              We couldn&apos;t find any active trials matching those parameters in our clinical grid.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trialsData.map((item: TrialFormData) => (
              <div key={item._id} className="transition-transform duration-200 hover:-translate-y-1">
                <TrialCard trial={item} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default ExplorePage;