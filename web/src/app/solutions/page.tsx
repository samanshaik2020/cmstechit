"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCanvas from "@/components/sections/ServiceCanvas";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ArchitectMockup from "@/components/ui/mockups/ArchitectMockup";
import IntegrationMockup from "@/components/ui/mockups/IntegrationMockup";
import SecurityMockup from "@/components/ui/mockups/SecurityMockup";
import DevOpsMockup from "@/components/ui/mockups/DevOpsMockup";
import FrontendMockup from "@/components/ui/mockups/FrontendMockup";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white pt-20">
            <Header />

            {/* Hero Section: Architecture */}
            <ServiceCanvas
                title={
                    <span>
                        Build for <span className="text-gray-400">Scale</span>. <br /> Not just for launch.
                    </span>
                }
                description="Our solutions are architected to handle growth from day one. We replace fragile MVPs with resilient, enterprise-grade platforms."
                ctaText="Discuss Architecture"
                ctaLink="/contact"
                align="left"
            >
                <ArchitectMockup />
            </ServiceCanvas>

            {/* Section 2: Integration */}
            <ServiceCanvas
                title="Seamless Integration"
                description="Break down data silos. We build custom middleware and API gateways that ensure your tools speak the same language, in real-time."
                ctaText="Connect your systems"
                ctaLink="/contact"
                align="right"
            >
                <IntegrationMockup />
            </ServiceCanvas>

            {/* Section 3: Security */}
            <ServiceCanvas
                title="Enterprise Security"
                description="Security isn't an afterthought; it's our baseline. We implement bank-grade encryption, automated threat detection, and compliance standards by default."
                ctaText="Secure your data"
                ctaLink="/contact"
                align="left"
            >
                <SecurityMockup />
            </ServiceCanvas>

            {/* Section 4: DevOps & Cloud */}
            <ServiceCanvas
                title="Continuous Delivery"
                description="Speed without breakage. We build automated CI/CD pipelines that let you ship features daily with confidence, backed by self-healing cloud infrastructure."
                ctaText="Modernize operations"
                ctaLink="/contact"
                align="right"
            >
                <DevOpsMockup />
            </ServiceCanvas>

            {/* Section 5: Frontend Experience */}
            <ServiceCanvas
                title="Premium Experience"
                description="First impressions matter. We engineer pixel-perfect, responsive interfaces that feel instantaneous. No layout shifts, no loading spinners—just fluid interaction."
                ctaText="See our designs"
                ctaLink="/services"
                align="left"
            >
                <FrontendMockup />
            </ServiceCanvas>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-6">Have a specific challenge?</h2>
                        <p className="text-xl text-gray-500 mb-10">
                            Our engineering team loves a difficult problem. Let's find the solution.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-[#1A1817] text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg group"
                        >
                            Get a proposal
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
