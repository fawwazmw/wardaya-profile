"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/lib/constants";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type FormStatus = "idle" | "sending" | "success" | "error";

const initialFields: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMsg, setServerMsg] = useState("");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!fields.name.trim()) errs.name = "Name is required";
    if (!fields.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Invalid email format";
    }
    if (!fields.subject.trim()) errs.subject = "Subject is required";
    if (!fields.message.trim()) {
      errs.message = "Message is required";
    } else if (fields.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "error" || status === "success") setStatus("idle");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setServerMsg(
        "Form service not configured. Please try emailing me directly."
      );
      return;
    }

    setStatus("sending");
    setServerMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMsg("Message sent successfully! I'll get back to you soon.");
        setFields(initialFields);
      } else {
        setStatus("error");
        setServerMsg(
          data.message || "Something went wrong. Please try emailing me directly."
        );
      }
    } catch {
      setStatus("error");
      setServerMsg(
        "Network error. Please try again or email me directly."
      );
    }
  }

  function handleReset() {
    setStatus("idle");
    setServerMsg("");
    setErrors({});
    setFields(initialFields);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:ring-1 transition-all duration-300";
  const inputNormal = `${inputClass} border-border focus:border-accent/50 focus:ring-accent/20`;
  const inputError = `${inputClass} border-red-500/50 focus:border-red-500 focus:ring-red-500/20`;

  return (
    <SectionWrapper id="contact" className="relative bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative">
        <SectionHeader
          label="Contact"
          title="Let's start a conversation"
          description="Have a project in mind or just want to explore possibilities? We'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="text-sm font-medium">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                Or reach us on
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/fawwazmw" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/fawwaz-mufid-wardaya" },
                  { label: "Instagram", href: "https://instagram.com/fwzmwrdy" },
                ].map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-accent/20 bg-accent/5"
                >
                  <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground font-medium">
                      {serverMsg}
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-2 text-xs text-accent hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <p className="text-sm text-red-400">{serverMsg}</p>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    className={errors.name ? inputError : inputNormal}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={fields.email}
                    onChange={handleChange}
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  value={fields.subject}
                  onChange={handleChange}
                  className={errors.subject ? inputError : inputNormal}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={fields.message}
                  onChange={handleChange}
                  className={`${errors.message ? inputError : inputNormal} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status === "sending" ? {} : { scale: 1.01 }}
                whileTap={status === "sending" ? {} : { scale: 0.99 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
