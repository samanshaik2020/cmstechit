"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    yOffset = 20,
}: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in viewport
            viewport={{ once: true, margin: "-100px" }} // Once: true means it won't animate out when scrolling up
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
