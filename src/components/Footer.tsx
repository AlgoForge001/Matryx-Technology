import { Instagram, Mail } from "lucide-react";
import Image from "next/image";

const socials = [
    { icon: Instagram, href: "https://www.instagram.com/matryx_technology?igsh=MWJzM3V4c2F2Z21xOQ==", label: "Instagram" },
    { icon: Mail, href: "mailto:matryxtechnology@gmail.com", label: "Email" },
];

const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-16 px-6 bg-[#050505]">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
                {/* Left — Logo Container */}
                <div className="shrink-0">
                    <a href="#home" className="group relative block transition-all duration-500">
                        {/* Soft Glow behind logo */}
                        <div className="absolute inset-x-0 inset-y-8 bg-primary/20 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                            {/* Glassmorphism Background layer (removed padding) */}
                            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md" />

                            <Image
                                src="/newLOGO.png"
                                alt="Matryx Technology"
                                width={320}
                                height={100}
                                className="relative z-10 h-24 w-auto brightness-110 contrast-110 block"
                            />
                        </div>
                    </a>
                </div>

                {/* Middle — Quick Links */}
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest px-2 border-l-2 border-primary lg:border-l-0 lg:border-b-2 lg:pb-1">
                        Quick Links
                    </h4>
                    <nav className="flex flex-wrap justify-center lg:flex-col gap-x-8 gap-y-4 lg:gap-3">
                        {quickLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-muted text-sm hover:text-primary transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right — Details */}
                <div className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
                    <div>
                        <h3 className="text-2xl font-black text-white tracking-tighter">
                            MATRYX<span className="text-primary"> TECHNOLOGY</span>
                        </h3>
                        <p className="text-text-muted text-sm mt-2 font-medium tracking-wide uppercase">
                            Innovating Digital Solutions
                        </p>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-400"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="pt-4 border-t border-white/5 w-full lg:w-auto">
                        <p className="text-text-muted text-[11px] font-medium uppercase tracking-[0.2em]">
                            © 2026 Matryx Technology • Crafted with Excellence
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


