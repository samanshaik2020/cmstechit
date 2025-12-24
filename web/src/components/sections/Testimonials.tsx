"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Quote className="h-12 w-12 text-accent/20 absolute -top-8 -left-8" />

                    <blockquote className="text-3xl md:text-4xl font-serif leading-relaxed text-gray-800 mb-8 italic">
                        "CMS Tech IT transformed our chaotic data into a streamlined dashboard.
                        Their technical depth is matched only by their commitment to our success."
                    </blockquote>

                    <div className="flex flex-col items-center">
                        <cite className="not-italic font-bold text-gray-900 text-lg">
                            CTO
                        </cite>
                        <span className="text-accent text-sm">Global Logistics</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
