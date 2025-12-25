"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, Server, CheckCircle2, Cloud } from "lucide-react";

export default function DevOpsMockup() {
    const steps = [
        { icon: <GitCommit className="w-5 h-5" />, label: "Code" },
        { icon: <Server className="w-5 h-5" />, label: "Build" },
        { icon: <Cloud className="w-5 h-5" />, label: "Deploy" },
    ];

    return (
        <div className="w-full h-full bg-[#1A1412] text-white p-8 flex flex-col items-center justify-center relative overflow-hidden select-none border border-[#3E2723] rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(45deg, #3E2723 25%, transparent 25%, transparent 75%, #3E2723 75%, #3E2723), linear-gradient(45deg, #3E2723 25%, transparent 25%, transparent 75%, #3E2723 75%, #3E2723)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}
            />

            <div className="relative w-full max-w-sm">
                {/* Pipeline visualization */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#3E2723] -z-10" />
                    <motion.div
                        className="absolute top-1/2 left-0 h-1 bg-green-500 -z-10"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <motion.div
                                className="w-12 h-12 bg-[#251A18] border border-[#3E2723] rounded-full flex items-center justify-center relative"
                                animate={{ borderColor: ["#3E2723", "#22C55E", "#3E2723"] }}
                                transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                            >
                                <div className="text-gray-400">{step.icon}</div>
                                {/* Status Indicator */}
                                <motion.div
                                    className="absolute -top-1 -right-1 bg-[#251A18] rounded-full text-green-500"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                                    transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                                >
                                    <CheckCircle2 className="w-5 h-5 fill-current" />
                                </motion.div>
                            </motion.div>
                            <span className="text-xs font-bold text-[#A1887F] uppercase tracking-wider">{step.label}</span>
                        </div>
                    ))}
                </div>

                {/* Console Output */}
                <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-[10px] text-green-400 opacity-80 border border-[#3E2723] shadow-inner">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-blue-400">➜</span> git push origin main<br />
                        <span className="text-yellow-400">⚡</span> trigger: build-pipeline<br />
                        <span className="text-gray-500">running tests...</span><br />
                        <span className="text-green-400">✔</span> tests passed (24/24)<br />
                        <span className="text-purple-400">🚀</span> deploying to production...<br />
                        <span className="text-green-400 font-bold">✔ DEPLOYMENT SUCCESSFUL</span>
                    </motion.div>
                    {/* Cursor Blinking */}
                    <motion.div
                        className="inline-block w-2 h-4 bg-green-400 align-middle ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
}
