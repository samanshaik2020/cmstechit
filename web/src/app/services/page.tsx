"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ArrowRight, Code, Cpu, Globe, Zap } from "lucide-react";
import Link from "next/link";
import ServiceCanvas from "@/components/sections/ServiceCanvas";
import CalendarMockup from "@/components/ui/mockups/CalendarMockup";
import AutomationMockup from "@/components/ui/mockups/AutomationMockup";
import HeroMockup from "@/components/ui/mockups/HeroMockup";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white">
            <Header />

            {/* Hero Section */}
            <ServiceCanvas
                title="Engineering Digital Excellence."
                description="We don't just write code; we architect ecosystems that drive business evolution. From high-performance web applications to autonomous enterprise automation."
                ctaText="Start a Project"
                align="left"
            >
                <HeroMockup />
            </ServiceCanvas>

            {/* CEO's Note */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                            <div className="md:col-span-4">
                                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                                    From the CEO
                                </span>
                                <h2 className="text-3xl font-bold mt-4 mb-6">
                                    A Partnership, <br /> Not a Vendor.
                                </h2>
                            </div>
                            <div className="md:col-span-8 space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    "In an era where technology defines competitive advantage, you
                                    need more than a service provider. You need a strategic partner
                                    who understands the nuances of your industry and the power of
                                    digital transformation."
                                </p>
                                <p>
                                    "At CMS Tech IT, we treat every project as if it were our own
                                    infrastructure. We obsess over scalability, security, and user
                                    experience. When you work with us, you're not just buying development hours; you're investing in a team dedicated to your long-term success."
                                </p>
                                <div className="pt-4">
                                    <p className="font-semibold text-text">Saman Shaik</p>
                                    <p className="text-sm text-gray-500">CEO & Founder, CMS Tech IT</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="mb-16">
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                                Our Expertise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4">
                                Strategic Capabilities
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ServiceCard
                            icon={<Globe className="w-6 h-6 text-white" />}
                            title="Web Applications"
                            description="Scalable, high-performance web platforms built with Next.js and React. We focus on SEO, speed, and premium user interfaces."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={<Cpu className="w-6 h-6 text-white" />}
                            title="Enterprise Automation"
                            description="Streamline operations with custom AI-driven automation workflows. Reduce manual overhead and increase efficiency."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={<Code className="w-6 h-6 text-white" />}
                            title="Custom Software"
                            description="BesPoke software solutions tailored to your unique business logic. If you can dream it, we can engineer it."
                            delay={0.3}
                        />
                        <ServiceCard
                            icon={<Zap className="w-6 h-6 text-white" />}
                            title="Digital Transformation"
                            description="Modernize legacy systems and migrate to cloud-native architectures that ensure future-proof scalability."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Service Canvas Sections */}
            <ServiceCanvas
                title={
                    <span>
                        Together, we build <span className="font-bold">applications</span> that automate your processes.
                    </span>
                }
                description="We design and develop custom applications that optimize your operations and support your growth. More than just code, we build tools that work for you."
                ctaText="Work with us"
                align="left"
            >
                <CalendarMockup />
            </ServiceCanvas>

            <ServiceCanvas
                title={
                    <span>
                        Automate the <span className="font-bold">Mundane</span>. <br />Scale the Exceptional.
                    </span>
                }
                description="Connect your disparate systems into a unified intelligence layer. Our automation protocols reduce human error and accelerate throughput by 300% on average."
                ctaText="Build Your Workflow"
                align="right"
            >
                <AutomationMockup />
            </ServiceCanvas>

            {/* Methodology / Process */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <span className="text-gray-400 font-semibold tracking-wider uppercase text-sm">
                                    Our Approach
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                                    Engineering Precision
                                </h2>
                            </div>
                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center text-white hover:text-accent transition-colors mt-8 md:mt-0"
                            >
                                Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-16">
                            <ProcessStep
                                number="01"
                                title="Discovery & Strategy"
                                description="We dive deep into your business goals, user needs, and technical requirements to map out a precise roadmap."
                            />
                            <ProcessStep
                                number="02"
                                title="Agile Development"
                                description="Iterative development sprints ensure transparency and allow for rapid feedback and adaptation."
                            />
                            <ProcessStep
                                number="03"
                                title="Deploy & Evolve"
                                description="Seamless deployment pipelines and ongoing support to ensure your product grows with your market."
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ServiceCard({
    icon,
    title,
    description,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}) {
    return (
        <FadeIn delay={delay}>
            <div className="group bg-white p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <div className="mb-6 w-14 h-14 bg-[#251A18] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600">{description}</p>

                    <div className="mt-6 flex items-center text-sm font-bold text-orange-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

function ProcessStep({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="group">
            <span className="text-3xl font-bold text-gray-800 group-hover:text-accent transition-colors block mb-4">
                {number}
            </span>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
