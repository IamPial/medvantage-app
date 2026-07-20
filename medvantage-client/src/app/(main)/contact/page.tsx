"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Card,
  Button,
  Input,
  TextArea,
  TextField,
  Label,
  Accordion,
} from "@heroui/react";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuClock,
  LuSend,
  LuRotateCcw,
  LuCircleCheck,
  LuCircleAlert,
} from "react-icons/lu";
import Link from "next/link";

// Framer Motion Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const FAQ_ITEMS = [
  {
    id: "1",
    question: "How do I join a clinical trial?",
    answer:
      "Patients can explore trials using our advanced search node by entering diagnosis codes, location parameters, and core eligibility profiles to fetch matching active mesh instances.",
  },
  {
    id: "2",
    question: "Is MedVantage free to use?",
    answer:
      "Yes, the standard trial matching dashboard pipeline is completely cost-free for global cohorts and research volunteers investigating medical diagnostics.",
  },
  {
    id: "3",
    question: "How does AI trial matching work?",
    answer:
      "Our neural processing matrix maps complex inclusion and exclusion criteria directly against natural medical histories to eliminate false metrics instantly.",
  },
  {
    id: "4",
    question: "How can researchers publish a trial?",
    answer:
      "Verified clinical infrastructure pipelines can access institutional nodes to secure schema-compliant trial records and open registration pipelines.",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  // Form States
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Validation Logic
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      handleReset();

      setTimeout(() => setShowToast(false), 4000);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 selection:bg-emerald-500/10 selection:text-emerald-700 relative">

      {/* Dynamic Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 text-white px-4 py-3.5 rounded-xl shadow-xl border border-zinc-800 max-w-sm"
          >
            <LuCircleCheck className="text-emerald-400 shrink-0" size={20} />
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold">Message Sent Successfully!</h4>
              <p className="text-[11px] text-zinc-400">Our medical relations team will reach out shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ১. Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          <motion.div
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Global Cohort Support Hub
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Contact <span className="text-emerald-600">Us</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Have questions about MedVantage or need assistance? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Premium Healthcare SaaS Abstract Graphic Node */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md aspect-[4/3] relative rounded-3xl border border-zinc-200 bg-white shadow-sm p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-600">Mesh Diagnostics</span>
                  <div className="text-base font-bold text-zinc-900">Operational Health</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
              </div>

              {/* Vector Data Grid Representation */}
              <div className="space-y-2.5 my-auto">
                {[80, 55, 90].map((width, idx) => (
                  <div key={idx} className="h-6 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center px-3 justify-between">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                      <div className="h-1.5 bg-zinc-200 rounded-full" style={{ width: `${width}%` }} />
                    </div>
                    <div className="h-1 w-6 bg-emerald-100 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-medium border-t border-zinc-100 pt-3">
                <span>Latency: 14ms</span>
                <span>Data Sovereignty Architecture</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ২. Contact Section (Two Column Layout) */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side: Info Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <InfoCard
              index={0}
              icon={<LuMail className="text-emerald-600" size={18} />}
              title="Email"
              value="support@medvantage.com"
              subtitle="Expect a response within 12 business hours."
            />
            <InfoCard
              index={1}
              icon={<LuPhone className="text-emerald-600" size={18} />}
              title="Phone Number"
              value="+1 (800) 123-4567"
              subtitle="Toll-free, available for institutional support."
            />
            <InfoCard
              index={2}
              icon={<LuMapPin className="text-emerald-600" size={18} />}
              title="Office Address"
              value={`123 Innovation Drive,\nBoston, MA, USA`}
              subtitle="MedVantage Global Headquarters Ecosystem."
            />
            <InfoCard
              index={3}
              icon={<LuClock className="text-emerald-600" size={18} />}
              title="Working Hours"
              value={`Monday – Friday\n9:00 AM – 6:00 PM`}
              subtitle="Standard EST operational index time logs."
            />
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
          >
            <Card className="border border-zinc-200 bg-white shadow-sm rounded-2xl p-2 sm:p-4">
              <Card.Header className="pb-4">
                <Card.Title className="text-lg font-bold text-zinc-900 tracking-tight">
                  Send a Secure Message
                </Card.Title>
                <Card.Description className="text-xs text-zinc-400">
                  Fill out the parameters below to establish secure operational communication logs.
                </Card.Description>
              </Card.Header>

              <Card.Content>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField
                      className="space-y-1"
                      isInvalid={!!errors.name}
                      value={formData.name}
                      onChange={(value) => setFormData({ ...formData, name: value })}
                    >
                      <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                        Full Name
                      </Label>
                      <Input placeholder="John Doe" className="text-zinc-800" />
                      {errors.name && <FormErrorText message={errors.name} />}
                    </TextField>

                    <TextField
                      className="space-y-1"
                      isInvalid={!!errors.email}
                      value={formData.email}
                      onChange={(value) => setFormData({ ...formData, email: value })}
                    >
                      <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                        Email Address
                      </Label>
                      <Input type="email" placeholder="john@example.com" />
                      {errors.email && <FormErrorText message={errors.email} />}
                    </TextField>
                  </div>

                  <TextField
                    className="space-y-1"
                    isInvalid={!!errors.subject}
                    value={formData.subject}
                    onChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Subject
                    </Label>
                    <Input placeholder="Inquiry regarding trial submission frameworks" />
                    {errors.subject && <FormErrorText message={errors.subject} />}
                  </TextField>

                  <TextField
                    className="space-y-1"
                    isInvalid={!!errors.message}
                    value={formData.message}
                    onChange={(value) => setFormData({ ...formData, message: value })}
                  >
                    <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Message
                    </Label>
                    <TextArea
                      placeholder="Provide granular diagnostic information regarding your inquiry..."
                      rows={4}
                    />
                    {errors.message && <FormErrorText message={errors.message} />}
                  </TextField>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto font-bold text-white bg-emerald-600 shadow-sm hover:bg-emerald-700 transition-colors rounded-xl h-11 px-6 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {!isSubmitting && <LuSend size={15} />}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto font-bold border-zinc-200 text-white  transition-colors rounded-xl h-11 px-6 flex items-center justify-center gap-2"
                    >
                      <LuRotateCcw size={15} />
                      Reset
                    </Button>
                  </div>
                </form>
              </Card.Content>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* ৩. FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Knowledge Base</h2>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Frequently Asked Questions</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="px-0 space-y-3">
            {FAQ_ITEMS.map((faq) => (
              <Accordion.Item
                key={faq.id}
                id={faq.id}
                className="bg-white border border-zinc-200/80 shadow-sm rounded-2xl px-4 data-[open=true]:border-emerald-200"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="w-full flex items-center justify-between gap-3 py-3 text-sm font-bold text-zinc-800 tracking-tight hover:bg-zinc-50/50 rounded-xl transition-colors">
                    {faq.question}
                    <Accordion.Indicator className="text-zinc-400 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-xs text-zinc-400 leading-relaxed pb-4 pt-1">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* ৪. Call To Action (CTA) Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
              Ready to Explore Clinical Trials?
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Sync active parameters with dynamic medical networks and investigate biological diagnostics seamlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/explore">
              <Button
                className="w-full sm:w-auto font-bold text-white bg-emerald-600 shadow-sm hover:bg-emerald-700 transition-colors rounded-xl h-11 px-6"
              >
                Explore Trials
              </Button>
            </Link>

            <Link href="/register">
              <Button
                className="w-full sm:w-auto font-bold border-zinc-200 text-white  transition-colors rounded-xl h-11 px-6"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// ================= Reusable Atomic UI Sub-Components =================

function InfoCard({ icon, title, value, subtitle, index }: { icon: React.ReactNode; title: string; value: string; subtitle: string; index: number }) {
  return (
    <motion.div variants={fadeInUp} custom={index}>
      <Card className="border border-zinc-200 bg-white shadow-sm rounded-xl transition-all hover:border-emerald-200 duration-200">
        <Card.Header className="flex flex-row items-center gap-3 pb-1">
          <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-emerald-600 shrink-0">
            {icon}
          </div>
          <Card.Title className="font-bold text-xs uppercase tracking-wider text-zinc-400 m-0">
            {title}
          </Card.Title>
        </Card.Header>
        <Card.Content className="space-y-0.5 pt-1">
          <div className="text-sm font-bold text-zinc-800 tracking-tight whitespace-pre-line leading-relaxed">
            {value}
          </div>
          <Card.Description className="text-[11px] text-zinc-400 font-normal">
            {subtitle}
          </Card.Description>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

function FormErrorText({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 text-rose-600 text-[11px] font-semibold pl-1 pt-0.5"
    >
      <LuCircleAlert size={12} className="shrink-0" />
      <span>{message}</span>
    </motion.div>
  );
}