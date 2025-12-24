"use client";

import { motion } from "framer-motion";

const partners = [
    "AWS",
    "Microsoft",
    "Google Cloud",
    "Vercel",
    "Stripe",
    "Shopify",
    "Salesforce",
    "SAP",
    "Oracle",
    "IBM",
];

export default function Partners() {
    return (
        <section className="py-12 bg-background border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-sm font-medium text-muted uppercase tracking-wider">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap gap-16 px-8"
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner}-${index}`}
                            className="text-2xl font-bold text-gray-400 hover:text-black transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
            </div>
        </section>
    );
}
