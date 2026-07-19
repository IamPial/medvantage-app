"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!user.role) {
      toast.error("Please select a role before registering.");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
      });

      if (error) {
        toast.error(error.message || "Something went wrong.");
      } else if (data) {
        await authClient.signOut();
        toast("Registration successful!", {
          style: { color: "#00a86b" },
        });
        router.push("/login");
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
      router.push("/");
    } catch (err) {
      toast.error("Google sign-in failed.");
    }
  };


  const inputStyle = `rounded-xl bg-white border border-slate-200 text-slate-900 w-full shadow-sm mt-1.5 p-2.5 text-sm focus:border-[#00a86b] focus:ring-1 focus:ring-[#00a86b] focus:outline-none transition-all placeholder:text-slate-400`;

  return (
    <div className="min-h-screen w-full bg-slate-50/50 flex flex-col lg:flex-row text-slate-900 selection:bg-[#00a86b]/10">


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
            Bridging Clinical Research & Patient Care
          </h1>
          <p className="mt-4 text-emerald-100/80 text-sm sm:text-base">
            MedVantage leverages advanced Agentic AI to match patients with life-saving clinical trials and help researchers publish protocols instantly.
          </p>

          <ul className="mt-8 space-y-4" aria-label="Key Features">
            {[
              "AI Clinical Trial Matching",
              "Secure Research Platform",
              "Trusted by Healthcare Professionals",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-100 text-sm sm:text-base">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 hidden lg:block text-xs text-emerald-200/50">
          Fully secure, HIPAA-compliant ecosystem protecting health data structure.
        </div>
      </section>


      <main className="w-full lg:w-1/2 p-6 sm:p-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[480px]"
        >
          <Form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 flex flex-col gap-5 w-full"
          >
            <header>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Create your account
              </h2>
              <p className="text-slate-400 text-sm mt-1">Join our medical validation network.</p>
            </header>

            {/* Full Name Input */}
            <TextField isRequired name="name" type="text">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                Full Name
              </Label>
              <Input className={inputStyle} placeholder="Enter your full name" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Email Input */}
            <TextField isRequired name="email" type="email">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                Email Address
              </Label>
              <Input className={inputStyle} placeholder="name@institution.com" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Role Select Component */}
            <div className="flex flex-col gap-1.5">
              <Select name="role" isRequired className="w-full">
                <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                  Join As
                </Label>
                <Select.Trigger className="rounded-xl bg-white border border-slate-200 text-slate-900 w-full flex items-center justify-between p-2.5 mt-1.5 text-sm focus:border-[#00a86b] outline-none shadow-sm transition-all">
                  <Select.Value
                    className="text-neutral"
                    placeholder="Select your role"
                  />
                  <Select.Indicator className="text-slate-400 text-xs" />
                </Select.Trigger>

                <Select.Popover className="bg-white border border-slate-200 rounded-xl shadow-xl mt-1 overflow-hidden z-50">
                  <ListBox className="p-1 text-slate-900">
                    <ListBox.Item
                      id="patient"
                      textValue="Patient"
                      className="p-2.5 text-sm rounded-lg cursor-pointer text-slate-700 data-[focused=true]:bg-[#00a86b]/10 data-[selected=true]:bg-[#00a86b] data-[selected=true]:text-white outline-none flex items-center justify-between transition-colors font-medium"
                    >
                      <span>Patient / Participant</span>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="researcher"
                      textValue="Researcher"
                      className="p-2.5 text-sm rounded-lg cursor-pointer text-slate-700 data-[focused=true]:bg-[#00a86b]/10 data-[selected=true]:bg-[#00a86b] data-[selected=true]:text-white outline-none flex items-center justify-between transition-colors font-medium"
                    >
                      <span>Clinical Researcher</span>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              <FieldError className="text-xs text-red-500 mt-0.5" />
            </div>

            {/* Password Input */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type={showPassword ? "text" : "password"}
            >
              <div className="flex justify-between items-center">
                <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                  Password
                </Label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-[#00a86b] font-semibold hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Input className={inputStyle} placeholder="Create dynamic security token" />
              <Description className="text-[11px] text-slate-400 mt-1 leading-normal">
                Min. 8 characters with 1 uppercase, 1 lowercase, 1 number, & 1 special symbol.
              </Description>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Confirm Password Input */}
            <TextField isRequired name="confirmPassword" type="password">
              <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                Confirm Password
              </Label>
              <Input className={inputStyle} placeholder="Re-type password" />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Action buttons */}
            <div className="mt-2 flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full rounded-xl bg-[#00a86b] hover:bg-[#008f5d] text-white font-semibold py-2.5 transition-all shadow-md shadow-emerald-600/10 text-sm cursor-pointer"
              >
                Create Account
              </Button>

              <div className="flex items-center justify-between gap-3 py-1">
                <Separator className="flex-1 bg-slate-200" />
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">OR</p>
                <Separator className="flex-1 bg-slate-200" />
              </div>

              <Button
                onClick={handleGoogleSignIn}
                className="w-full rounded-xl bg-white text-slate-700 border border-slate-200 font-medium py-2.5 transition-all hover:bg-slate-50 flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </Button>
            </div>

            <Separator className="bg-slate-100" />

            <footer className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#00a86b] hover:text-[#008f5d] font-semibold hover:underline ml-0.5"
              >
                Login
              </Link>
            </footer>
          </Form>
        </motion.div>
      </main>
    </div>
  );
};

export default SignUpPage;