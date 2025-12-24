"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Squpage",
        category: "Landing Page Builder",
        description: "Create high-converting landing pages in minutes with our intuitive builder.",
        image: "/placeholder-project-1.jpg",
        link: "https://squpage.com"
    },
    {
        title: "SeoInk",
        category: "SEO Optimization",
        description: "Advanced SEO analysis and optimization tools for modern web applications.",
        image: "/placeholder-project-2.jpg",
        link: "https://seolnk.com"
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4 text-text"
                        >
                            Proven Success in <br />
                            Complex Environments.
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent" />
                    </div>
                    <button className="hidden md:flex items-center text-accent font-medium hover:text-text transition-colors mt-8 md:mt-0">
                        View All Projects <ArrowUpRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <Link href={project.link} target="_blank" className="block h-full">
                                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 mb-6">
                                    {/* 
                      Using a colored div as placeholder if no image updates.
                      In a real scenario, use Image component with actual sources. 
                    */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-gray-400 text-3xl font-bold">{project.title}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                                        <p className="text-gray-500">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="p-2 rounded-full border border-gray-200 group-hover:bg-accent group-hover:border-accent transition-all">
                                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-white" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center text-accent font-medium hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
