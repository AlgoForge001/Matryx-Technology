"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
    image: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        image: "/business.png",
        title: "Business Website",
        description: "Professional, high-performance websites tailored to represent your brand and scale your business operations effectively.",
    },
    {
        image: "/custom.png",
        title: "Custom Websites",
        description: "Bespoke web solutions built from scratch with unique features and complex functionality to meet your specific needs.",
    },
    {
        image: "/landing.png",
        title: "Landing Pages",
        description: "Highly optimized, conversion-focused landing pages designed to turn visitors into customers for your products or campaigns.",
    },
    {
        image: "/portfolio.png",
        title: "Portfolio & Personal Websites",
        description: "Creative and modern displays for individuals, freelancers, and artists to showcase their work and build a strong personal brand.",
    },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] }}
            className="group relative bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-350 hover:bg-white/[0.1] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/20 p-2.5"
        >
            {/* Glassmorphism Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[#ff9a40] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="px-5 py-7 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                </p>

                <div className="mt-auto">
                    <div className="inline-flex items-center text-primary text-sm font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        Learn more
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-[#050505]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
                    >
                        Our Specialties
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[clamp(2.2rem,5vw,3.2rem)] font-black tracking-tight text-white mb-6"
                    >
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9a40]">Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-text-muted text-lg max-w-[650px] mx-auto leading-relaxed"
                    >
                        We combine cutting-edge technology with stunning design to deliver digital experiences that resonate and convert.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

