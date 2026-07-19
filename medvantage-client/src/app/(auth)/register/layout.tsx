import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create an Account | MedVantage Platform",
    description: "Join the MedVantage secure AI clinical trial and rare disease matching portal as a researcher or patient.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}