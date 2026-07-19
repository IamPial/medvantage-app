import Link from "next/link";
import {
    LuActivity,
    LuMail,
    LuMapPin,
    LuPhone,
} from "react-icons/lu";
import {
    FaXTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa6";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Trials", href: "/explore" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Get Started", href: "/register" },
];

const resourceLinks = [
    { name: "Clinical Trial Glossary", href: "/resources/glossary" },
    { name: "Patient Guide", href: "/resources/patient-guide" },
    { name: "Researcher Handbook", href: "/resources/researcher-handbook" },
    { name: "AI Matching FAQ", href: "/resources/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
];

const socialLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebook,
        label: "Follow MedVantage on Facebook",
    },
    {
        name: "X (Twitter)",
        href: "https://twitter.com",
        icon: FaXTwitter,
        label: "Follow MedVantage on X",
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedinIn,
        label: "Connect on LinkedIn",
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
        label: "Follow MedVantage on Instagram",
    },

];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400" aria-label="Site Footer">
            {/* Top gradient divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1 — Brand */}
                    <div className="lg:col-span-1 flex flex-col gap-5">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 group outline-none w-fit"
                            aria-label="MedVantage Home"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                                <LuActivity className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                MedVantage
                            </span>
                        </Link>

                        <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
                            An AI-powered clinical trial and rare disease matching platform
                            helping patients find life-saving trials and researchers publish
                            protocols seamlessly.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-1" aria-label="Social Media Links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2.5" role="list">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors duration-200 outline-none focus-visible:text-emerald-400 group flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 transition-colors duration-200 shrink-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Resources */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-2.5" role="list">
                            {resourceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors duration-200 outline-none focus-visible:text-emerald-400 group flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 transition-colors duration-200 shrink-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
                            Contact Us
                        </h3>
                        <ul className="flex flex-col gap-4" role="list">
                            <li>
                                <a
                                    href="mailto:hello@medvantage.io"
                                    className="group flex items-start gap-3 text-sm text-zinc-500 hover:text-emerald-400 transition-colors duration-200 outline-none focus-visible:text-emerald-400"
                                >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-emerald-600/20 group-hover:text-emerald-400 transition-all duration-200">
                                        <LuMail className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <span className="block text-xs text-zinc-600 mb-0.5">Email</span>
                                        hello@medvantage.io
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+18005550123"
                                    className="group flex items-start gap-3 text-sm text-zinc-500 hover:text-emerald-400 transition-colors duration-200 outline-none focus-visible:text-emerald-400"
                                >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-emerald-600/20 group-hover:text-emerald-400 transition-all duration-200">
                                        <LuPhone className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <span className="block text-xs text-zinc-600 mb-0.5">Phone</span>
                                        +1 (800) 555-0123
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div className="group flex items-start gap-3 text-sm text-zinc-500">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                                        <LuMapPin className="h-4 w-4" />
                                    </span>
                                    <span>
                                        <span className="block text-xs text-zinc-600 mb-0.5">Office</span>
                                        123 Research Blvd, Suite 400<br />
                                        Dhaka, Dhaka-1207, Bangladesh
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600 text-center sm:text-left">
                        © {currentYear} MedVantage, Inc. All rights reserved.{" "}
                        <span className="text-zinc-700">
                            Educational demo — uses synthetic data only.
                        </span>
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-600">
                        <Link href="/privacy" className="hover:text-zinc-400 transition-colors outline-none focus-visible:text-zinc-300">
                            Privacy Policy
                        </Link>
                        <span className="text-zinc-800">·</span>
                        <Link href="/terms" className="hover:text-zinc-400 transition-colors outline-none focus-visible:text-zinc-300">
                            Terms of Service
                        </Link>
                        <span className="text-zinc-800">·</span>
                        <Link href="/cookies" className="hover:text-zinc-400 transition-colors outline-none focus-visible:text-zinc-300">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}