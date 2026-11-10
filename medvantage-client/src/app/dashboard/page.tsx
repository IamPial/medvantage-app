import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/core/session";

export default async function DashboardPage() {
  const user = await getUserSession();

  if (!user) {
    redirect("/");
  }

  redirect(
    user.role === "researcher"
      ? "/dashboard/researcher"
      : "/dashboard/patient",
  );
}
