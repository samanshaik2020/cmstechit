"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Activity, Shield, Database, Wifi } from "lucide-react";

export default function HeroMockup() {
    return (
        <div className="w-full h-full bg-[#1A1412] text-[#EFEBE9] p-6 md:p-8 flex flex-col overflow-hidden relative selection:bg-[#FF7043] selection:text-white">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#5D4037 1px, transparent 1px), linear-gradient(90deg, #5D4037 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="flex justify-between items-center mb-8 relative z-10">
                <div>
                    <div className="text-xs font-bold text-[#8D6E63] tracking-wider uppercase mb-1">System Architecture</div>
                    <div className="text-2xl font-bold flex items-center gap-2 text-white">
                        Production Cluster <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-[#2C211F] p-2 rounded-lg border border-[#3E2723]">
                        <Activity className="w-5 h-5 text-[#FF7043]" />
                    </div>
                    <div className="bg-[#2C211F] p-2 rounded-lg border border-[#3E2723]">
                        <Shield className="w-5 h-5 text-green-400" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1 relative z-10">

                {/* Server Nodes */}
                <div className="bg-[#251A18]/80 border border-[#3E2723] rounded-xl p-4 flex flex-col gap-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-[#A1887F] flex items-center gap-2">
                        <Server className="w-4 h-4" /> Load Balancers
                    </div>
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-3 bg-[#1A1412]/50 p-2 rounded-lg border border-[#2C211F]">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                <div className="flex-1 h-1.5 bg-[#2C211F] rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: ["30%", "60%", "45%"] }}
                                        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                                        className="h-full bg-[#FF7043]"
                                    />
                                </div>
                                <span className="text-[10px] text-[#8D6E63] font-mono">lb-0{i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Database Status */}
                <div className="bg-[#251A18]/80 border border-[#3E2723] rounded-xl p-4 flex flex-col gap-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-[#A1887F] flex items-center gap-2">
                        <Database className="w-4 h-4" /> Data Replication
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <div className="relative w-24 h-24">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[#FF7043]/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-2 border-dashed border-[#FFAB91]/30 rounded-full"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <div className="text-xl font-bold text-white">99%</div>
                                <div className="text-[10px] text-[#8D6E63]">Sync</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Traffic Graph */}
                <div className="col-span-2 bg-[#251A18]/80 border border-[#3E2723] rounded-xl p-4 backdrop-blur-sm flex flex-col justify-end h-32 relative overflow-hidden">
                    <div className="absolute top-4 left-4 text-sm font-semibold text-[#A1887F] flex items-center gap-2">
                        <Wifi className="w-4 h-4" /> Traffic Volume
                    </div>
                    <div className="flex items-end gap-1 h-16 mt-6">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: ["20%", "80%", "40%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                className="flex-1 bg-[#FF7043]/20 rounded-t-sm hover:bg-[#FF7043]/50 transition-colors"
                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}
