import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// TODO: Add auth guard here once authentication is implemented.
// Redirect unauthenticated users to /login.
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
