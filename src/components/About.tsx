"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Rocket } from "lucide-react";

const stats = [
    { value: "Pan-India", label: "Service Reach" },
];

const easeOut: Easing = [0.25, 0.8, 0.25, 1];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
    }),
};

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Column */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <motion.h2
                        custom={0}
                        variants={fadeUp}
                        className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.02em] mb-6"
                    >
                        About <span className="text-primary">Matryx Technology</span>
                    </motion.h2>

                    <motion.p custom={1} variants={fadeUp} className="text-text-muted text-base leading-relaxed mb-4">
                        Matryx Technology is a modern digital solutions company helping businesses
                        establish and grow their online presence. We specialize in website development,
                        digital advertising, branding, and business software solutions.
                    </motion.p>

                    <motion.p custom={2} variants={fadeUp} className="text-text-muted text-base leading-relaxed mb-8">
                        Our mission is to deliver high-quality, affordable, and scalable digital
                        services across India. We work with startups, small businesses, and enterprises
                        to create impactful digital experiences.
                    </motion.p>

                    {/* Stats */}
                    <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-2xl font-extrabold text-primary">{stat.value}</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Illustration Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="relative flex items-center justify-center"
                >
                    <div className="relative w-full h-[380px] rounded-2xl bg-gradient-to-br from-[#0d0d0d] to-[#151515] border border-card-border overflow-hidden flex items-center justify-center">
                        {/* Grid */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                        {/* Orb */}
                        <div className="absolute w-[120px] h-[120px] rounded-full bg-radial-[circle] from-primary/25 to-transparent blur-[30px] animate-[pulseOrb_4s_ease-in-out_infinite]" />
                        {/* Rings */}
                        <div className="absolute w-[260px] h-[260px] rounded-full border-[1.5px] border-primary/12 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[190px] h-[190px] rounded-full border-[1.5px] border-dashed border-primary/8 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute w-[320px] h-[320px] rounded-full border-[1.5px] border-primary/6 animate-[spin_28s_linear_infinite]" />
                        {/* Center icon */}
                        <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-primary drop-shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                            <Rocket size={32} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
              @keyframes pulseOrb {
                0%, 100% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.4); opacity: 1; }
              }
            ` }} />
        </section>
    );
}
