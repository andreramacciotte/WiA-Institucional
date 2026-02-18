"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimateInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    blur?: boolean;
}

const getVariants = (
    direction: string,
    blur: boolean
): Variants => {
    const offset = 24;
    const directionMap: Record<string, { x?: number; y?: number }> = {
        up: { y: offset },
        down: { y: -offset },
        left: { x: offset },
        right: { x: -offset },
        none: {},
    };

    const move = directionMap[direction] || {};

    return {
        hidden: {
            opacity: 0,
            filter: blur ? "blur(4px)" : "blur(0px)",
            ...move,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
        },
    };
};

export default function AnimateIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.7,
    blur = true,
}: AnimateInProps) {
    const variants = getVariants(direction, blur);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
