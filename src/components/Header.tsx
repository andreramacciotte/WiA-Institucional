"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-graphite-950/80 backdrop-blur-md border-b border-graphite-800/50"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                <a
                    href="#hero"
                    className="text-xs font-mono tracking-[0.25em] uppercase text-graphite-300 hover:text-concrete-50 transition-colors duration-300"
                >
                    WiA Omni-Control™
                </a>

                <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-graphite-400 hover:text-concrete-50 transition-colors duration-300"
                >
                    <span>Solicitar avaliação</span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </a>
            </div>
        </motion.header>
    );
}
