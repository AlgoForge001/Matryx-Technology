"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 h-[72px] flex items-center px-6 ${scrolled
                ? "bg-[#0a0a0a]/85 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-xl font-extrabold text-white tracking-tight">
                    Matryx<span className="text-primary ml-1">Technology</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, "#contact")}
                        className="hidden md:inline-flex px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Started
                    </a>

                    <button
                        className="md:hidden text-white p-1"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-[72px] right-0 w-[280px] h-[calc(100vh-72px)] bg-[#0a0a0a]/97 backdrop-blur-2xl flex flex-col p-10 gap-6 transition-transform duration-350 z-50 md:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-lg font-medium text-text-muted hover:text-white transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="mt-4 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold text-center hover:bg-primary-hover transition-all"
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
}
