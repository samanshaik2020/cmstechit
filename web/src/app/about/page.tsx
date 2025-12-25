"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";
import ServiceCanvas from "@/components/sections/ServiceCanvas";
import TimelineMockup from "@/components/ui/mockups/TimelineMockup";
import PhilosophyMockup from "@/components/ui/mockups/PhilosophyMockup";
import NetworkMockup from "@/components/ui/mockups/NetworkMockup";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white pt-20">
            <Header />

            {/* Hero Section - Canvas Layout */}
            <ServiceCanvas
                title={
                    <span>
                        We build the <span className="text-gray-400">digital backbone</span> for modern enterprises.
                    </span>
                }
                description="Founded on the belief that code is architecture, we help businesses transition from clear-cut ideas to robust, scalable digital ecosystems."
                ctaText="See our work"
                ctaLink="#portfolio"
                align="left"
            >
                <NetworkMockup />
            </ServiceCanvas>

            {/* Mission & Story Sections (Converted to Canvases) */}
            <ServiceCanvas
                title="Our Mission"
                description="To empower organizations with software that doesn't just function, but adapts and evolves. We strive to eliminate technical debt before it begins, prioritizing long-term stability over short-term shortcuts."
                ctaText="Read our principles"
                ctaLink="#principles"
                align="left"
            >
                <PhilosophyMockup />
            </ServiceCanvas>

            <ServiceCanvas
                title="Our Story"
                description="CMS Tech IT started with a simple observation: too many businesses were held back by fragile software. We set out to change that by treating web development as a precision engineering discipline."
                ctaText="Join our journey"
                ctaLink="#careers"
                align="right"
            >
                <TimelineMockup />
            </ServiceCanvas>

            {/* Leadership / Founder Note - Enhanced */}
            <section className="py-24 bg-[#1A1817] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#251A18] skew-x-12 transform translate-x-1/4" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                                    Leadership
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                    Led by Engineering. <br /> Driven by Results.
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    "Technology is only as good as the problem it solves. Our job isn't to use the latest buzzwords, but to find the most effective, robust solution for your specific challenges."
                                </p>
                                <div>
                                    <div className="text-xl font-bold text-white">Saman Shaik</div>
                                    <div className="text-accent">CEO & Founder</div>
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl max-w-sm hover:border-[#FF7043]/30 hover:bg-[#FF7043]/5 transition-all"
                                >
                                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                                    <div className="text-sm text-gray-400 mb-6">Commitment to Code Quality</div>
                                    <div className="h-px bg-white/10 w-full mb-6" />
                                    <p className="text-sm text-gray-400 italic">
                                        We don't outsource our core engineering. Every line of code is reviewed and approved by our internal standards.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-6">Ready to upgrade your digital infrastructure?</h2>
                        <p className="text-xl text-gray-500 mb-10">
                            Let's discuss how we can engineer a solution that fits your business goals.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center px-8 py-4 bg-[#1A1817] text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg group"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-3 text-gray-700 font-medium">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            {children}
        </li>
    );
}
