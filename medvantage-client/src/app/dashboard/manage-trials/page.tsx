import { Button } from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

import TrialsTable from "@/components/TrialsTable";
import { DeleteModal } from "@/components/DeleteModal";
import { getMyExploreTrials, type TrialFormData } from "@/lib/api/exploreTrials";


export const metadata = {
  title: "Manage Trials - Dashboard",
  description:
    "Efficiently manage, monitor, and update your active clinical trials and medical research packages on NexusDash—the ultimate premium administration platform.",
};

const ManageTrialsPage = async () => {
  const filteredTrials = await getMyExploreTrials();

  return (
    <div className="p-4 bg-zinc-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Manage Trials</h1>
          <p className="text-sm text-zinc-400">View, monitor, and delete active clinical trials.</p>
        </div>
        <Link href="/dashboard/add-trial">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2 shadow-md transition-colors cursor-pointer">
            <FiPlus size={18} /> Add New Trial
          </Button>
        </Link>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-zinc-200/60 rounded-2xl shadow-lg overflow-hidden">
        {/* Desktop View (Table) */}
        <TrialsTable trials={filteredTrials} />

        {/* Mobile View */}
        <div className="p-4 space-y-4">
          {filteredTrials.length === 0 ? (
            <div className="text-center py-8 text-sm text-zinc-900 md:text-4xl font-bold">
              You haven&apos;t created any trials!
            </div>
          ) : (
            filteredTrials.map((trial: TrialFormData) => (
              <div
                key={trial._id}
                className="border border-zinc-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm bg-white md:hidden"
              >
                <div className="flex gap-3">
                  {trial.image && (
                    <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-zinc-200 shrink-0">
                      <Image src={trial.image} alt={trial.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-zinc-900 text-sm truncate">{trial.title}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-0.5">{trial.disease}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-zinc-50 pt-2.5 mt-1">
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Country / Phase</span>
                    <span className="text-sm font-bold text-zinc-800">{trial.country}</span>
                    <span className="text-xs text-zinc-500 ml-2">{trial.phase}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/explore/${trial._id}`}>
                      <Button size="sm" className="bg-zinc-100 text-zinc-700 font-medium rounded-lg px-3 py-1.5 text-xs cursor-pointer">
                        View
                      </Button>
                    </Link>
                    <DeleteModal trials={trial} />
                  </div>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default ManageTrialsPage;