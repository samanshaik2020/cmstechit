"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

interface ServiceCanvasProps {
    title: React.ReactNode;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    align?: "left" | "right";
    children: React.ReactNode;
}

export default function ServiceCanvas({
    title,
    description,
    ctaText = "Travaillons ensemble",
    ctaLink = "/contact",
    align = "left",
    children,
}: ServiceCanvasProps) {
    return (
        <section className="py-24 bg-[#FBF9F8] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Text Content */}
                    <div className={`w-full lg:w-1/2 ${align === "right" ? "lg:order-2" : "lg:order-1"}`}>
                        <FadeIn>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1817] leading-tight mb-8">
                                {title}
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                                {description}
                            </p>
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center px-8 py-4 bg-[#1A1817] text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg group"
                            >
                                {ctaText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </FadeIn>
                    </div>

                    {/* Canvas / Mockup Area */}
                    <div className={`w-full lg:w-1/2 ${align === "right" ? "lg:order-1" : "lg:order-2"}`}>
                        <FadeIn delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[4/3] transform hover:scale-[1.01] transition-transform duration-500">
                                <div className="absolute inset-0 bg-gray-50/50">
                                    {children}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
