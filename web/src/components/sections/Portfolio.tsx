"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Squpage",
        category: "Landing Page Builder",
        description: "Create high-converting landing pages in minutes with our intuitive builder.",
        image: "/web.svg",
        imageClassName: "object-contain p-12",
        frameClassName: "bg-gradient-to-br from-indigo-50 via-white to-purple-100",
        link: "https://squpage.com"
    },
    {
        title: "SeoInk",
        category: "SEO Optimization",
        description: "Advanced SEO analysis and optimization tools for modern web applications.",
        image: "/projects/seolnk.jpg",
        imageClassName: "object-cover object-top",
        frameClassName: "bg-slate-100",
        link: "https://seolnk.com"
    },
    {
        title: "TextBehindImage",
        category: "Creative Web Tool",
        description: "A web application for generating striking text-behind-image visuals with a clean, user-friendly workflow.",
        image: "/projects/textbehindimage.webp",
        imageClassName: "object-cover object-center",
        frameClassName: "bg-slate-100",
        link: "https://textbehindimage.com"
    },
    {
        title: "PopiUp",
        category: "Marketing Platform",
        description: "A conversion-focused platform for creating engaging popups and on-site campaigns for modern websites.",
        image: "/branding.svg",
        imageClassName: "object-contain p-12",
        frameClassName: "bg-gradient-to-br from-rose-50 via-white to-orange-100",
        link: "https://popiup.com"
    },
    {
        title: "NewsZ9",
        category: "News Platform",
        description: "A fast, content-rich news website designed for smooth reading experiences across desktop and mobile.",
        image: "/projects/newsz9.jpg",
        imageClassName: "object-cover object-center",
        frameClassName: "bg-slate-100",
        link: "https://newsz9.com"
    },
    {
        title: "Kitchen Made Health",
        category: "Health & Wellness",
        description: "A polished wellness-focused website built to showcase healthy living content, services, and brand trust.",
        image: "/projects/kitchenmadehealth.jpg",
        imageClassName: "object-cover object-center",
        frameClassName: "bg-slate-100",
        link: "https://kitchenmadehealth.com"
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
                            <Link href={project.link} target="_blank" rel="noreferrer" className="block h-full">
                                <div className={`relative aspect-video overflow-hidden rounded-xl mb-6 border border-gray-200 shadow-sm ${project.frameClassName}`}>
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        loading="lazy"
                                        className={`absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-700 ${project.imageClassName}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                        <div className="text-xs uppercase tracking-[0.22em] text-white/80">
                                            {project.link.replace("https://", "")}
                                        </div>
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
