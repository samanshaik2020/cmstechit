"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShieldCheck, Cpu, Layout, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

const values = [
    {
        icon: Layout,
        title: "Design-Led Engineering",
        description: "We don't just write code; we craft experiences. Every system is architected to serve intuitive, beautiful frontends.",
        className: "md:col-span-2", // Large item
        gradient: "from-orange-100/50 to-amber-100/50",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-50"
    },
    {
        icon: ShieldCheck,
        title: "Data-Centric Security",
        description: "Zero-trust architecture and military-grade encryption.",
        className: "md:col-span-1",
        gradient: "from-blue-50/50 to-indigo-50/50",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50"
    },
    {
        icon: Cpu,
        title: "Future-Proof Tech",
        description: "Building on bleeding-edge stacks like Next.js 15, Rust, and Fabric.",
        className: "md:col-span-1",
        gradient: "from-purple-50/50 to-pink-50/50",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-50"
    },
    {
        icon: Globe,
        title: "Global Scalability",
        description: "Distributed systems designed for low-latency worldwide.",
        className: "md:col-span-2",
        gradient: "from-emerald-50/50 to-green-50/50",
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-50"
    },
];

function BentoCard({ title, description, icon: Icon, className, gradient, iconColor, iconBg }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={cn(
                "group relative border border-gray-200 bg-white overflow-hidden rounded-3xl p-8 hover:border-orange-200 hover:shadow-xl transition-all duration-500",
                className
            )}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Spotlight Effect - Subtle Warm Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(255, 160, 0, 0.08), transparent 80%)`,
                }}
            />
            {/* Gradient Background */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                gradient
            )} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                    <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",
                        iconBg,
                        iconColor
                    )}>
                        <Icon className="w-6 h-6" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-[#3E2723] mb-2 font-serif">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-sans">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Values() {
    return (
        <section className="py-32 bg-[#FBF9F8] relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#3E2723 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Abstract Shape */}
            <div className="absolute -left-20 top-40 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-6 font-serif"
                    >
                        The <span className="text-orange-600">Difference</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl font-light"
                    >
                        We bridge the gap between "It Works" and "It's Perfect".
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
                    {values.map((value, i) => (
                        <BentoCard key={i} {...value} />
                    ))}
                </div>
            </div>
        </section>
    );
}
