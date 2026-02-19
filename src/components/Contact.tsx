"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, Phone, User } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_xcf6f7i";
const TEMPLATE_ID = "template_lo3emfn";
const PUBLIC_KEY = "6MwH41vrtToWL71c6";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: form.name,
                from_name: form.name,
                email: form.email,
                from_email: form.email,
                phone: form.phone || "N/A",
                phone_number: form.phone || "N/A",
                message: form.message,
                time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            }, PUBLIC_KEY);

            setStatus("sent");
            setForm({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const inputClasses =
        "w-full px-5 py-4 bg-white/[0.04] border border-card-border rounded-xl text-white text-sm font-normal outline-none transition-colors duration-300 focus:border-primary placeholder:text-text-muted";

    return (
        <section id="contact" className="py-24 px-6 bg-surface">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.02em] text-center mb-3"
                >
                    Let&apos;s <span className="text-primary">Work Together</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-center text-text-muted text-base max-w-[560px] mx-auto mb-14"
                >
                    Have a project in mind? Let&apos;s build something amazing together.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone (optional)"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            required
                            value={form.message}
                            onChange={handleChange}
                            className={`${inputClasses} resize-y`}
                        />
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold transition-all duration-300 ${status === "sent"
                                ? "bg-green-500 text-white"
                                : status === "error"
                                    ? "bg-red-500 text-white"
                                    : status === "sending"
                                        ? "bg-primary/70 text-white cursor-wait"
                                        : "bg-primary text-white shadow-[0_4px_24px_rgba(255,107,0,0.3)] hover:bg-primary-hover hover:-translate-y-0.5"
                                }`}
                        >
                            {status === "sending" ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Sending...
                                </>
                            ) : status === "sent" ? (
                                "✓ Message Sent Successfully!"
                            ) : status === "error" ? (
                                "✕ Failed to send. Try again."
                            ) : (
                                <>
                                    <Send size={16} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="bg-white/[0.03] border border-card-border rounded-2xl p-9"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-7">
                            We&apos;d love to hear about your project. Reach out and let&apos;s start the
                            conversation.
                        </p>

                        <div className="flex items-center gap-3 mb-4 text-sm">
                            <User size={18} className="text-primary shrink-0" />
                            <span className="text-white font-medium">Nashit Ansari</span>
                        </div>

                        <div className="flex items-center gap-3 mb-4 text-sm">
                            <Mail size={18} className="text-primary shrink-0" />
                            <a
                                href="mailto:matryxtechnology@gmail.com"
                                className="text-primary hover:opacity-80 transition-opacity"
                            >
                                matryxtechnology@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3 mb-4 text-sm">
                            <Phone size={18} className="text-primary shrink-0" />
                            <a
                                href="tel:+919137857420"
                                className="text-text-muted hover:text-white transition-colors"
                            >
                                +91 9137857420
                            </a>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-text-muted">
                            <MapPin size={18} className="text-primary shrink-0" />
                            <span>Mumbai, Maharashtra — Serving Pan-India</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
