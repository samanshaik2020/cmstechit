"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Layers, Zap } from "lucide-react";

export default function PhilosophyMockup() {
    return (
        <div className="w-full h-full bg-[#1A1412] text-white p-8 flex flex-col justify-center relative overflow-hidden selection:bg-[#FF7043] selection:text-white">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#5D4037 1px, transparent 1px), linear-gradient(90deg, #5D4037 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="relative z-10 w-full max-w-sm mx-auto">
                {/* Main Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#251A18] border border-[#3E2723] rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7043] opacity-5 blur-[50px] rounded-full pointer-events-none" />

                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[#FF7043]/10 rounded-xl text-[#FF7043]">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs text-[#A1887F] font-bold uppercase tracking-wider mb-0.5">Core Principle</div>
                            <div className="font-bold text-lg">Engineering Excellence</div>
                        </div>
                    </div>

                    {/* Checklist Loop */}
                    <div className="space-y-3">
                        {[
                            { label: "Clean Architecture", icon: <Layers className="w-4 h-4" /> },
                            { label: "Type Safety", icon: <CheckCircle2 className="w-4 h-4" /> },
                            { label: "High Performance", icon: <Zap className="w-4 h-4" /> },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + (i * 0.15) }}
                                className="flex items-center justify-between p-3 rounded-lg bg-[#3E2723]/30 border border-[#3E2723]/50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[#FF7043]">{item.icon}</span>
                                    <span className="text-sm font-medium text-[#EFEBE9]">{item.label}</span>
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Code snippet decoration */}
                    <div className="mt-6 pt-6 border-t border-[#3E2723] font-mono text-[10px] text-[#8D6E63] opacity-60">
                        <div className="flex gap-2">
                            <span className="text-[#FF7043]">const</span>
                            <span className="text-[#EFEBE9]">future</span>
                            <span className="text-[#FF7043]">=</span>
                            <span className="text-[#EFEBE9]">buildScaler</span>(<span className="text-green-400">true</span>);
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
