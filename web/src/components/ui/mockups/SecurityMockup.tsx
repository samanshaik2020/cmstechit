"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ScanLine } from "lucide-react";

export default function SecurityMockup() {
    return (
        <div className="w-full h-full bg-[#FAFAFA] text-gray-800 p-8 flex items-center justify-center relative overflow-hidden select-none border border-gray-100 rounded-3xl">
            {/* Radar Scan Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-[120%] h-[120%] border-[20px] border-green-500/5 rounded-full"
                    animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-[80%] h-[80%] border-[40px] border-green-500/5 rounded-full"
                    animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                />
            </div>

            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-xs text-center">
                <div className="flex justify-center mb-4">
                    <motion.div
                        className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ShieldCheck className="w-8 h-8" />
                    </motion.div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">System Secure</h3>

                <div className="space-y-3 text-left">
                    {[
                        { label: "End-to-End Encryption", icon: <Lock className="w-4 h-4" /> },
                        { label: "Threat Detection", icon: <ScanLine className="w-4 h-4" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                {item.icon} {item.label}
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
