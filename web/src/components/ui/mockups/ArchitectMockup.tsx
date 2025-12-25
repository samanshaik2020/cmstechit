"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ArchitectMockup() {
    return (
        <div className="w-full h-full bg-[#FAFAFA] text-gray-800 p-8 flex items-center justify-center relative overflow-hidden select-none border border-gray-100 rounded-3xl">
            {/* Isometric Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)', backgroundSize: '40px 70px', backgroundPosition: '0 0, 0 0' }}
            />

            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* Building Blocks Animation */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white border border-gray-200 shadow-xl rounded-xl"
                        style={{
                            width: 80 + i * 20,
                            height: 60,
                            zIndex: 10 - i
                        }}
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        animate={{ y: -i * 30, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: i * 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-50 rounded-t-xl" />
                        <motion.div
                            className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-orange-500"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </motion.div>
                ))}

                {/* Floating connecting elements */}
                <motion.div
                    className="absolute top-10 right-10 p-3 bg-white rounded-lg shadow-lg border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="w-8 h-1 bg-green-500 rounded-full mb-1" />
                    <div className="w-4 h-1 bg-gray-200 rounded-full" />
                </motion.div>
            </div>
        </div>
    );
}
