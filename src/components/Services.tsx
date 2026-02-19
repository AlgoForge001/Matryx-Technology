"use client";

import { motion } from "framer-motion";
import { Monitor, Megaphone, TrendingUp, Palette, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
    icon: LucideIcon;
    title: string;
    items: string[];
}

const services: Service[] = [
    {
        icon: Monitor,
        title: "Website Development",
        items: ["Business websites", "Portfolio websites", "Landing pages", "Custom solutions"],
    },
    {
        icon: Megaphone,
        title: "Digital Advertising",
        items: ["Brand promotions", "Online campaigns", "Business reach expansion", "All over India"],
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        items: ["Social media marketing", "Growth strategy", "Lead generation", "SEO optimization"],
    },
    {
        icon: Palette,
        title: "Pamphlet & Poster Design",
        items: ["Creative print designs", "Professional branding", "Marketing materials", "Visual identity"],
    },
    {
        icon: Layers,
        title: "Business Software Solutions",
        items: ["Custom software", "Automation tools", "Tech consultation", "Scalable systems"],
    },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
    const Icon = service.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] }}
            className="group relative bg-white/[0.03] border border-card-border rounded-2xl p-9 transition-all duration-350 hover:bg-white/[0.05] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] overflow-hidden"
        >
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[#ff9a40] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

            <div className="w-12 h-12 rounded-xl bg-primary-glow flex items-center justify-center mb-5 text-primary">
                <Icon size={24} />
            </div>

            <h3 className="text-lg font-bold text-white mb-3.5">{service.title}</h3>

            <ul className="flex flex-col gap-2">
                {service.items.map((item) => (
                    <li key={item} className="text-text-muted text-sm pl-[18px] relative">
                        <span className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-surface">
            <div className="max-w-[1200px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.02em] text-center mb-3"
                >
                    Our <span className="text-primary">Services</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-center text-text-muted text-base max-w-[560px] mx-auto mb-14"
                >
                    End-to-end digital solutions tailored for your business growth.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
