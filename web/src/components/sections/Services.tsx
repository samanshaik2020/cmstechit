"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Activity, Cloud, Gauge, Play } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Dominant Search Visibility (SEO)",
        icon: Search,
        headline: "Data-driven growth strategies.",
        description:
            "We don’t just rank keywords; we dominate search landscapes. Our technical SEO focus includes mobile-first indexing, schema markup, and advanced speed optimization to ensure your platform is visible, accessible, and high-converting.",
        color: "from-orange-500/10 to-transparent",
        videoSrc: "/SEO_Video_Generation_Request.mp4",
    },
    {
        id: "02",
        title: "High-Velocity DevOps",
        icon: Activity,
        headline: "Accelerating your delivery pipeline.",
        description:
            "Bridge the gap between development and operations. We implement CI/CD automation, Infrastructure as Code (IaC) with Terraform, and containerization (Docker/Kubernetes) to reduce deployment times by up to 60% while maintaining absolute stability.",
        color: "from-blue-500/10 to-transparent",
        videoSrc: "/DevOps_Video_Generation_Complete.mp4",
    },
    {
        id: "03",
        title: "Scalable Cloud Infrastructure",
        icon: Cloud,
        headline: "Secure, agile, and cost-optimized.",
        description:
            "Future-proof your business with multi-cloud expertise in AWS, Azure, and Google Cloud. We architect resilient environments that offer 99.9% availability, automated failover, and proactive cost management to maximize your ROI.",
        color: "from-purple-500/10 to-transparent",
        videoSrc: "/Cloud_Infrastructure_Video_Ready.mp4",
    },
    {
        id: "04",
        title: "Performance & Load Optimization",
        icon: Gauge,
        headline: "Unshakable speed under pressure.",
        description:
            "Eliminate bottlenecks before they happen. Our performance engineers specialize in advanced load balancing, auto-scaling groups, and global CDN distribution to ensure your application remains lightning-fast, even during massive traffic spikes.",
        color: "from-green-500/10 to-transparent",
        videoSrc: "/Performance_Optimization_and_Video_Ready.mp4",
    },
];

const VideoPlayer = ({ src, id }: { src: string; id: string }) => (
    <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden group/video border border-white/10 shadow-2xl">
        {/* Actual Video */}
        <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-[2s] ease-out"
        />

        {/* Subtle Overlay to maintain text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Scanline / Grid effect overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }} />

        {/* Info Overlay */}
        <div className="absolute bottom-8 left-8">
            <div className="flex items-center gap-3 text-white/50 text-xs font-mono uppercase tracking-widest mb-1">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Live Demo {id}
            </div>
            <div className="text-white text-sm font-medium">Technical Realization Output</div>
        </div>

        {/* Brand Watermark */}
        <div className="absolute bottom-8 right-8 pointer-events-none select-none">
            <div className="text-white/20 text-xs font-black uppercase tracking-[0.2em] font-mono rotate-[-90deg] origin-right translate-y-[-10px]">
                CMS TECH IT
            </div>
        </div>
    </div>
);

export default function Services() {
    return (
        <section id="services" className="bg-[#FBF9F8]">
            {/* Header Section */}
            <div className="bg-[#FBF9F8] pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-4">
                            Core <span className="text-orange-600">Services</span>.
                        </h2>
                        <div className="h-1.5 w-32 bg-orange-600 rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* Vertical Full-Page Sections */}
            <div className="relative">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 0.8 }}
                        className="min-h-screen flex items-center sticky top-0 bg-[#FBF9F8] overflow-hidden border-t border-gray-100"
                    >
                        {/* Background Detail */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 pointer-events-none`} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-20 rounded-full blur-[120px] pointer-events-none" />

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                                {/* Text Content */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg text-orange-600">
                                                <service.icon className="w-8 h-8" />
                                            </div>
                                            <span className="text-6xl font-black text-gray-200/40 font-mono">
                                                {service.id}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 leading-tight">
                                            {service.title}
                                        </h3>

                                        <h4 className="text-xl font-bold text-orange-600 mb-6 uppercase tracking-widest bg-orange-50 inline-block px-4 py-1 rounded-full">
                                            {service.headline}
                                        </h4>

                                        <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                                            {service.description}
                                        </p>

                                        <motion.button
                                            whileHover={{ x: 10 }}
                                            className="group flex items-center gap-4 text-xl font-bold text-[#3E2723] hover:text-orange-600 transition-colors"
                                        >
                                            EXPLORE TECH
                                            <div className="w-14 h-14 bg-[#3E2723] rounded-full flex items-center justify-center text-white group-hover:bg-orange-600 transition-colors">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </div>
                                        </motion.button>
                                    </motion.div>
                                </div>

                                {/* Video Area */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <VideoPlayer src={service.videoSrc} id={service.id} />
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
