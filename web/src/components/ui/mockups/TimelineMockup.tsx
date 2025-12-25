"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Rocket, Users, Globe } from "lucide-react";

export default function TimelineMockup() {
    const events = [
        { year: "2018", title: "Inception", icon: <Rocket className="w-4 h-4" /> },
        { year: "2020", title: "First Enterprise Client", icon: <Building2 className="w-4 h-4" /> },
        { year: "2022", title: "Global Team Expansion", icon: <Users className="w-4 h-4" /> },
        { year: "2024", title: "Cloud Architecture Leader", icon: <Globe className="w-4 h-4" /> },
    ];

    return (
        <div className="w-full h-full bg-[#FAFAFA] text-[#1A1817] p-8 flex flex-col items-center justify-center relative overflow-hidden select-none">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            <div className="w-full max-w-sm relative z-10">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="space-y-8">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="relative pl-14"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm bg-orange-500 z-10 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>

                            {/* Card */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-1.5 bg-orange-50 rounded-lg text-orange-600 group-hover:scale-110 transition-transform">
                                        {event.icon}
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.year}</span>
                                </div>
                                <h3 className="font-bold text-gray-900">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
