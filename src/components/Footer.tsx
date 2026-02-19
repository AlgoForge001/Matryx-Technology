import { Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:yourrealemail@example.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-14 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                {/* Left — Details */}
                <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">
                            Matryx<span className="text-primary ml-1">Technology</span>
                        </h3>
                        <p className="text-text-muted text-sm mt-1">Innovating Digital Solutions</p>
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
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-text-muted text-xs">
                        © 2026 Matryx Technology. All Rights Reserved.
                    </p>
                </div>

                {/* Right — Large Logo */}
                <div className="shrink-0">
                    <a href="#home" className="inline-block bg-white rounded-xl p-4 border-6 border-primary">
                        <Image src="/Matryx Technology.png" alt="Matryx Technology" width={480} height={160} className="h-44 w-auto" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
