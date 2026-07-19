import DashBoardProfiles from "@/components/dashboard/DashBoardProfiles";
import DashBoardSideBar from "@/components/dashboard/DashBoardSideBar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-gray-300/30">
      {/* sidebar */}
      <DashBoardSideBar />
      <div className="flex-1 overflow-y-auto">
        {/* navbar */}
        <DashBoardProfiles />
        <main >{children}</main>
      </div>
    </div>
  );
}