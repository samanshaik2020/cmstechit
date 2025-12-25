"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Database, Globe, Smartphone } from "lucide-react";

export default function IntegrationMockup() {
    return (
        <div className="w-full h-full bg-[#1A1412] text-white p-8 flex items-center justify-center relative overflow-hidden select-none border border-[#3E2723] rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#5D4037 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            <div className="relative w-full max-w-sm">
                {/* Central Hub */}
                <div className="flex justify-center mb-12 relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-20 h-20 bg-[#251A18] rounded-full border border-[#FF7043] flex items-center justify-center shadow-[0_0_30px_rgba(255,112,67,0.2)]"
                    >
                        <ArrowRightLeft className="w-8 h-8 text-[#FF7043]" />
                    </motion.div>
                    {/* Pulse Ring */}
                    <motion.div
                        className="absolute inset-0 m-auto w-20 h-20 border border-[#FF7043] rounded-full"
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>

                {/* Connected Nodes */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                        { icon: <Database className="w-5 h-5" />, label: "CRM" },
                        { icon: <Globe className="w-5 h-5" />, label: "Web" },
                        { icon: <Smartphone className="w-5 h-5" />, label: "App" },
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                            className="bg-[#2C211F] p-4 rounded-xl border border-[#3E2723] flex flex-col items-center gap-2 relative"
                        >
                            {/* Connection Line */}
                            <motion.div
                                className="absolute -top-8 left-1/2 w-0.5 h-8 bg-[#3E2723] origin-bottom"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{ delay: 0.2 + i * 0.2 }}
                            />

                            {/* Particle flowing down */}
                            <motion.div
                                className="absolute -top-8 left-1/2 w-1 h-1 bg-[#FF7043] rounded-full ml-[-1px]"
                                animate={{ y: [0, 32], opacity: [1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.5, ease: "linear" }}
                            />

                            <div className="text-[#A1887F]">{node.icon}</div>
                            <span className="text-xs font-bold text-[#EFEBE9]">{node.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
