"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-[72px] px-6">
            {/* Animated background orbs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-[floatOrb_8s_ease-in-out_infinite_alternate]" />
                <div className="absolute bottom-0 left-[-5%] w-[350px] h-[350px] rounded-full bg-[#ff8c33]/15 blur-[100px] animate-[floatOrb_10s_ease-in-out_1s_infinite_alternate-reverse]" />
                <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_40%] from-primary/10 to-transparent" />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,107,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-[820px]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] }}
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Now serving businesses across India
                </motion.div>

                <h1 className="text-[clamp(2rem,5.5vw,3.8rem)] font-black leading-[1.1] tracking-[-0.03em] text-white mb-6">
                    All Your Business Software &amp; Digital Growth Solutions —{" "}
                    <span className="bg-gradient-to-r from-primary to-[#ffaa55] bg-clip-text text-transparent">
                        In One Place
                    </span>
                </h1>

                <motion.p
                    className="text-[clamp(1rem,2vw,1.15rem)] text-text-muted max-w-[600px] mx-auto leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    We build powerful websites, promote brands across India, and help businesses
                    grow with smart digital strategies.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full text-sm font-semibold shadow-[0_4px_24px_rgba(255,107,0,0.3)] hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,107,0,0.4)] transition-all duration-300"
                    >
                        Get Free Consultation
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white border border-white/15 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        <Eye size={16} />
                        View Services
                    </a>
                </motion.div>
            </motion.div>

            {/* Float animation keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
              @keyframes floatOrb {
                0% { transform: translate(0, 0); }
                100% { transform: translate(30px, -40px); }
              }
            ` }} />
        </section>
    );
}
