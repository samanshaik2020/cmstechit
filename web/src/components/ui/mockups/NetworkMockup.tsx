"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NetworkMockup() {
    // Generate random nodes for the mesh network
    const nodes = [...Array(6)].map((_, i) => ({
        x: 20 + Math.random() * 60, // Keep within 20-80% to avoid edges
        y: 20 + Math.random() * 60,
        delay: i * 0.5,
    }));

    return (
        <div className="w-full h-full bg-[#FAFAFA] text-gray-800 p-8 flex items-center justify-center relative overflow-hidden select-none border border-gray-100 rounded-3xl">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative w-full h-full max-w-sm max-h-[300px]">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {nodes.map((node, i) => (
                        nodes.slice(i + 1).map((target, j) => (
                            <motion.line
                                key={`${i}-${j}`}
                                x1={`${node.x}%`}
                                y1={`${node.y}%`}
                                x2={`${target.x}%`}
                                y2={`${target.y}%`}
                                stroke="#E0E0E0"
                                strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                            />
                        ))
                    ))}
                </svg>

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-white border-2 border-orange-500 rounded-full shadow-sm z-10"
                        style={{ left: `${node.x}%`, top: `${node.y}%`, marginLeft: '-8px', marginTop: '-8px' }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: node.delay, type: "spring" }}
                    >
                        {/* Pulse Effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-orange-500"
                            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                        />
                    </motion.div>
                ))}

                {/* Central Hub with Logo/Icon */}
                <motion.div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="w-8 h-8 bg-[#1A1817] rounded-lg rotate-12" />
                </motion.div>
            </div>
        </div>
    );
}
