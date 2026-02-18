"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
    variant?: "primary" | "secondary";
    className?: string;
}

export default function WhatsAppButton({
    variant = "primary",
    className = "",
}: WhatsAppButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-blue-tech text-concrete-50 border border-blue-tech-light/30 hover:bg-blue-tech-light hover:border-blue-tech-accent/40",
        secondary:
            "bg-transparent text-graphite-200 border border-graphite-600 hover:border-graphite-400 hover:text-concrete-50",
    };

    return (
        <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <span>Solicitar avaliação operacional</span>
            <svg
                width="16"
                height="16"
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
        </motion.a>
    );
}
