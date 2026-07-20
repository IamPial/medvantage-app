"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  Checkbox,
} from "@heroui/react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineScience } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        toast.error(error.message || "Invalid credentials");
        return;
      }

      if (data) {
        toast("Logged in Successfully", {
          style: { color: "#00a86b" },
        })
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast("Signed in with Google", {
        style: { color: "#00a86b" },
      });
    } catch (err) {
      toast.error("Google sign-in failed.");
    }
  };



  const inputStyle = `rounded-xl bg-white border border-slate-200 text-slate-900 w-full shadow-sm mt-1.5 p-2.5 text-sm focus:border-[#00a86b] focus:ring-1 focus:ring-[#00a86b] focus:outline-none transition-all placeholder:text-slate-400`;

  return (
    <div className="min-h-screen w-full bg-slate-50/50 flex flex-col lg:flex-row text-slate-900 selection:bg-[#00a86b]/10">

      {/* বাম পাশ: হেলথকেয়ার ব্র্যান্ডিং ও স্ট্যাটস */}
      <section className="relative w-full lg:w-1/2 bg-gradient-to-br from-[#006b43] via-[#00a86b] to-slate-900 p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative z-10 flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-[#00a86b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">MedVantage</span>
        </div>

        <div className="relative z-10 my-12 lg:my-auto max-w-md">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Welcome Back
          </h1>
          <p className="mt-4 text-emerald-100/80 text-sm sm:text-base">
            Access your secure workspace to manage clinical metrics, deploy advanced agentic workflows, or track ongoing matching protocols.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">99.4%</p>
              <p className="text-xs text-emerald-200/70 mt-1 uppercase tracking-wider font-semibold">AI Match Accuracy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">2.4k+</p>
              <p className="text-xs text-emerald-200/70 mt-1 uppercase tracking-wider font-semibold">Active Researches</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block text-xs text-emerald-200/50">
          Encrypted End-to-End node interface. HIPAA & SOC2 Compliant.
        </div>
      </section>


      <main className="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          className="w-full max-w-[420px]"
        >
          <Form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 flex flex-col gap-5 w-full"
          >
            <header className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Login to MedVantage
                </h2>
                <p className="text-slate-400 text-sm mt-1">Welcome back</p>
              </div>
            </header>

            {/* Email Input */}
            <TextField isRequired name="email" type="email">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Email</Label>
              <Input ref={emailRef} className={inputStyle} placeholder="john@example.com" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Password Input */}
            <TextField isRequired minLength={6} name="password" type={showPassword ? "text" : "password"}>
              <div className="flex justify-between items-center">
                <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Password</Label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-[#00a86b] font-semibold hover:underline outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input ref={passwordRef} className={inputStyle} placeholder="Enter your password" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>



            {/* Buttons Section */}
            <div className="mt-2 flex flex-col gap-3">
              <Button
                type="submit"
                className="cursor-pointer w-full rounded-xl bg-[#00a86b] hover:bg-[#008f5d] text-white font-semibold py-2.5 transition-colors shadow-md text-sm"
              >
                Login
              </Button>

              <div className="flex items-center justify-between gap-2 py-1">
                <Separator className="flex-1 bg-slate-200" />
                <p className="text-xs text-slate-400 font-medium">OR</p>
                <Separator className="flex-1 bg-slate-200" />
              </div>

              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full rounded-xl bg-white text-slate-700 border border-slate-200 font-medium py-2.5 transition-colors hover:bg-slate-50 flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </Button>
            </div>

            <Separator className="bg-slate-100" />

            <footer className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-[#00a86b] hover:text-[#008f5d] font-semibold hover:underline ml-1"
              >
                Create Account
              </Link>
            </footer>
          </Form>
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;