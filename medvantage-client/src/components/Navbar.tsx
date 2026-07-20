'use client';

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuActivity, LuMenu, LuX } from "react-icons/lu";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Explore Trials", href: "/explore" },
  { name: "DashBoard", href: "/dashboard" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Monitor scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation & accessibility inside mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  // Click outside drawer to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully", {
      style: { color: "#00a86b" },
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[72px] transition-all duration-300 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b ${isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-zinc-100"
          : "bg-white border-transparent"
          }`}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="MedVantage Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20">
              <LuActivity className="h-5.5 w-5.5" />
            </div>
            <span className="bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              MedVantage
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {

              if (item.href === "/dashboard" && !user) return null;

              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-200 py-2 px-4 rounded-full hover:text-emerald-600 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${active ? "text-emerald-600 font-semibold" : "text-zinc-600"
                    }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {!user ? (
              <>
                <Link href="/login" className="outline-none">
                  <Button
                    variant="outline"
                    className="border-zinc-200 hover:border-emerald-500 text-zinc-700 hover:text-emerald-600 font-medium px-5 transition-all outline-none rounded-full"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register" className="outline-none">
                  <Button
                    variant="primary"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all px-5 outline-none rounded-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-zinc-900 font-medium">
                  Hi, {user?.name?.split(" ")[0]} !
                </span>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-zinc-200 hover:border-emerald-500 text-zinc-700 hover:text-emerald-600 font-medium px-5 transition-all outline-none rounded-full"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={triggerRef}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 border border-zinc-100 transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-drawer"
          >
            {isMobileOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out border-l border-zinc-100 lg:hidden ${isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-2"
            aria-label="MedVantage Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-sm">
              <LuActivity className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900">
              MedVantage
            </span>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close menu"
          >
            <LuX className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2 pt-6" aria-label="Mobile Navigation">
          {navItems.map((item) => {
            if (item.href === "/dashboard" && !user) return null;

            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center text-base font-medium py-3 px-4 rounded-xl transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${active
                  ? "bg-emerald-50/50 text-emerald-600 font-semibold"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Action Buttons */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col gap-3">
          {!user ? (
            <>
              <Link href="/login" onClick={() => setIsMobileOpen(false)} className="w-full outline-none">
                <Button
                  variant="outline"
                  className="w-full border-zinc-200 text-zinc-700 font-medium py-3.5 outline-none rounded-full"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileOpen(false)} className="w-full outline-none">
                <Button
                  variant="primary"
                  className="w-full bg-emerald-600 text-white font-medium py-3.5 outline-none rounded-full"
                >
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <Button
              onClick={() => {
                setIsMobileOpen(false);
                handleSignOut();
              }}
              variant="outline"
              className="w-full border-zinc-200 text-zinc-700 font-medium py-3.5 outline-none rounded-full"
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </>
  );
}