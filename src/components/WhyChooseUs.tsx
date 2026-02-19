"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
    {
        title: "Professional & Affordable",
        description: "Premium quality services at prices designed for startups and growing businesses.",
    },
    {
        title: "Modern & Scalable Solutions",
        description: "Future-ready tech built to grow with your business, from day one to IPO.",
    },
    {
        title: "Pan-India Service Availability",
        description: "We serve clients across all Indian states — metro cities to emerging towns.",
    },
    {
        title: "Dedicated Support",
        description: "Always-on communication and post-delivery support to keep your business running.",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.02em] text-center mb-14"
                >
                    Why Choose <span className="text-primary">Matryx Technology?</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] }}
                            className="bg-white/[0.03] border border-card-border rounded-2xl p-9 text-center transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-5">
                                <Check size={24} strokeWidth={3} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2.5">{reason.title}</h4>
                            <p className="text-text-muted text-sm leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
