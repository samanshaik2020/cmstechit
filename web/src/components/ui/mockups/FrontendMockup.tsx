"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Sidebar, Image as ImageIcon } from "lucide-react";

export default function FrontendMockup() {
    return (
        <div className="w-full h-full bg-[#FAFAFA] text-gray-800 p-8 flex items-center justify-center relative overflow-hidden select-none border border-gray-100 rounded-3xl">
            {/* Background Dots */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />

            <div className="relative w-[320px] h-[240px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                {/* Header */}
                <motion.div
                    className="h-12 border-b border-gray-100 w-full flex items-center px-4 gap-2"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-4 h-2 w-32 bg-gray-100 rounded-full" />
                </motion.div>

                <div className="flex-1 flex">
                    {/* Sidebar */}
                    <motion.div
                        className="w-16 border-r border-gray-100 h-full flex flex-col items-center py-4 gap-4"
                        initial={{ x: -70, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-400">
                            <Sidebar className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gray-50" />
                        <div className="w-8 h-8 rounded-lg bg-gray-50" />
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                        {/* Hero Card */}
                        <motion.div
                            className="col-span-2 h-24 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 opacity-50" />
                            <ImageIcon className="w-6 h-6 text-orange-300 relative z-10" />
                        </motion.div>

                        {/* Small Cards */}
                        <motion.div
                            className="h-20 bg-gray-50 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        />
                        <motion.div
                            className="h-20 bg-gray-50 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        />
                    </div>
                </div>

                {/* Mouse Cursor Animation */}
                <motion.div
                    className="absolute w-4 h-4 z-20"
                    initial={{ x: 300, y: 300, opacity: 0 }}
                    animate={{ x: [100, 200, 150], y: [100, 150, 200], opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="black" stroke="white" strokeWidth="2" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}
