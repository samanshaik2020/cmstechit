"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Activity, Terminal } from "lucide-react";

// --- Components ---

const DevFlowCard = () => (
    <div className="bg-white p-6 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 w-[420px]">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h4 className="text-sm font-bold text-[#3E2723]">Development Flow</h4>
                <p className="text-xs text-gray-400 mt-1">Sales trend over time</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#EFEBE9] flex items-center justify-center text-[#3E2723]">
                <Activity className="w-4 h-4" />
            </div>
        </div>

        <div className="relative h-40 w-full">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-300">
                {[5, 4, 3, 2, 0].map((v) => <div key={v} className="border-b border-gray-50 w-full mb-2">{v === 0 ? 0 : `${v}k`}</div>)}
            </div>

            {/* Chart Line */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Filled Area */}
                <motion.path
                    d="M0 80 Q 25 90, 50 60 T 100 20 V 100 H 0 Z"
                    fill="url(#orangeGradient)"
                    opacity="0.2"
                    initial={{ d: "M0 100 Q 25 100, 50 100 T 100 100 V 100 H 0 Z" }}
                    animate={{ d: "M0 80 Q 25 90, 50 60 T 100 20 V 100 H 0 Z" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Stroke Line */}
                <motion.path
                    d="M0 80 Q 25 90, 50 60 T 100 20"
                    fill="none"
                    stroke="#5D4037"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                    <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF7043" />
                        <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Deploy Point & Rocket */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="absolute top-[20%] right-0 -translate-y-1/2 translate-x-1/2"
            >
                <div className="relative">
                    <div className="w-3 h-3 bg-[#FF7043] rounded-full ring-4 ring-white shadow-lg" />
                    <div className="absolute -top-12 -left-8 bg-[#3E2723] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                        Deploy
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-[#3E2723]" />
                    </div>
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-16 -right-6"
                    >
                        <Rocket className="w-8 h-8 text-[#FF7043] fill-current transform rotate-45" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Cursor Dev 01 */}
            <motion.div
                animate={{ x: [0, 40, 20], y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[60%] left-[40%] z-30"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#8D6E63" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute top-5 left-4 bg-white/90 backdrop-blur border border-gray-200 text-[#3E2723] text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                    Dev 01
                </div>
            </motion.div>
        </div>
    </div>
);

const PerformanceCard = () => (
    <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 w-[280px]">
        <div className="mb-6">
            <h4 className="text-sm font-bold text-[#3E2723]">Performance</h4>
            <p className="text-xs text-gray-400">System latency</p>
        </div>

        <div className="relative h-32 flex items-end justify-center pb-4">
            <svg className="w-48 h-24 overflow-visible">
                {/* Background Arc */}
                <path d="M 10 90 A 80 80 0 0 1 170 90" fill="none" stroke="#F5F5F5" strokeWidth="12" strokeLinecap="round" />
                {/* Active Arc */}
                <motion.path
                    d="M 10 90 A 80 80 0 0 1 170 90"
                    fill="none"
                    stroke="#FFAB91"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.95 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                />
            </svg>
            <div className="absolute bottom-6 flex flex-col items-center">
                <span className="text-3xl font-bold text-[#3E2723]">99.9%</span>
                <span className="text-xs font-semibold text-gray-400">Uptime</span>
            </div>
        </div>
        {/* Cursor User */}
        <motion.div
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 right-4 z-30"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg transform -scale-x-100">
                <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.div>
    </div>
);

const CodebaseCard = () => (
    <div className="bg-[#251A18] p-6 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-[#3E2723]/30 w-[340px]">
        <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF7043]" />
                Codebase Health
            </h4>
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF7043]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFCC80]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#A1887F]" />
            </div>
        </div>

        <div className="space-y-3 font-mono">
            <div className="flex gap-3">
                <div className="h-2 w-12 bg-white/10 rounded-full" />
                <div className="h-2 w-24 bg-white/10 rounded-full" />
            </div>
            <div className="flex gap-3">
                <div className="h-2 w-full bg-gradient-to-r from-[#FF7043]/80 to-[#FF7043]/20 rounded-full animate-pulse" />
            </div>
            <div className="flex gap-3 pl-4">
                <div className="h-2 w-16 bg-white/10 rounded-full" />
                <div className="h-2 w-20 bg-white/10 rounded-full" />
            </div>
            <div className="flex gap-3 pl-4">
                <div className="h-2 w-full bg-white/5 rounded-full" />
            </div>
            <div className="flex gap-3">
                <div className="h-2 w-20 bg-gradient-to-r from-[#FFCC80]/80 to-[#FFCC80]/20 rounded-full" />
                <div className="h-2 w-12 bg-white/10 rounded-full" />
            </div>
        </div>

        {/* Cursor Editor */}
        <motion.div
            animate={{ x: [0, -30, 0], y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-8 right-12 z-40"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#F5F5F5" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.div>
    </div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-[#FBF9F8]">
            {/* Background Decorative Grid/Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(193,160,127,0.08)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 leading-[1.1] text-[#3E2723]">
                            Building the <br />
                            <span className="relative inline-block px-1">
                                <span className="relative z-10">Next Gen</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute bottom-1 left-0 w-full h-full bg-gradient-to-r from-[#FFCC80]/60 to-[#FF7043]/40 -skew-x-6 -z-10 rounded-md origin-left"
                                />
                            </span>{" "}
                            <motion.span
                                initial={{ filter: "blur(12px)", opacity: 0, y: 10 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                                className="inline-block"
                            >
                                of SaaS
                            </motion.span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed mb-10 font-medium">
                            We craft high-performance digital experiences for forward-thinking brands. Where art meets clean code.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-[#3E2723] text-white rounded-full font-semibold hover:bg-[#5D4037] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Contact us
                            </Link>
                            <Link
                                href="#about"
                                className="px-8 py-4 bg-transparent border-2 border-[#EFEBE9] text-[#3E2723] rounded-full font-semibold hover:bg-[#EFEBE9] transition-all"
                            >
                                About
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                        {/* Decorative Blob behind cards */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/60 blur-3xl rounded-full pointer-events-none" />

                        {/* Development Flow Card - Top Center/Right */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 z-20"
                        >
                            <DevFlowCard />
                        </motion.div>

                        {/* Performance Card - Middle Left */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[35%] left-0 z-10"
                        >
                            <PerformanceCard />
                        </motion.div>

                        {/* Codebase Card - Bottom Right */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 right-0 z-30"
                        >
                            <CodebaseCard />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
