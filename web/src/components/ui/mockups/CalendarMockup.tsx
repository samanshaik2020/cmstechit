"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Home, Calendar as CalendarIcon, PlusCircle, List,
    ChevronRight, Search, Bell, Menu
} from "lucide-react";

export default function CalendarMockup() {
    const users = [
        { name: "Me", role: "New York", status: ["Away", "Remote", "Office", "Office"], avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
        { name: "Laurent D.", role: "London", status: ["Office", "Office", "Office", "Office"], avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
        { name: "Julie L.", role: "Paris", status: ["Office", "Office", "Office", "Office"], avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d" },
        { name: "Caroline B.", role: "Toronto", status: ["Office", "Office", "Office", "Office"], avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c" },
        { name: "Julien P.", role: "Berlin", status: ["Office", "Office", "Remote", "Returning..."], avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d" },
    ];

    return (
        <div className="w-full h-full bg-[#FAFAFA] text-[#1A1817] font-sans flex text-xs md:text-sm overflow-hidden select-none">

            {/* Sidebar */}
            <div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-8 shrink-0">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">C</div>
                <div className="flex flex-col gap-6 text-gray-400">
                    <Home className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                        <CalendarIcon className="w-5 h-5" />
                    </div>
                    <PlusCircle className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
                    <List className="w-6 h-6 hover:text-orange-500 cursor-pointer transition-colors" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header */}
                <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-8 shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-orange-500 tracking-tight">cms<span className="text-orange-400">tech</span></span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="font-bold">Saman Shaik</span>
                            <span className="text-xs text-gray-400">Engineering Dept</span>
                        </div>
                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-9 h-9 rounded-full border border-gray-200" />
                    </div>
                </div>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-auto p-6 md:p-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-1">Agenda</h2>
                        <p className="text-gray-400 mb-8 text-xs md:text-sm">View full schedule, including office presence.</p>

                        {/* Grid Header */}
                        <div className="bg-white rounded-t-xl border border-gray-100 grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] shadow-sm">
                            <div className="p-4 border-r border-gray-100 flex items-center gap-2">
                                <span className="font-bold">Team Members</span>
                                <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full text-[10px] font-bold">96</span>
                            </div>
                            {["24 Mon", "25 Tue", "26 Wed", "27 Thu"].map((date, i) => (
                                <div key={i} className={`p-4 text-center border-r border-gray-100 font-medium ${i === 2 ? 'text-orange-600 bg-orange-50/30' : 'text-gray-500'}`}>
                                    <div className="text-xs md:text-sm">{date.split(' ')[0]}</div>
                                    <div className="text-[10px] uppercase tracking-wide opacity-70">{date.split(' ')[1]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Rows */}
                        <div className="bg-white rounded-b-xl border-x border-b border-gray-100 shadow-sm overflow-hidden">
                            {users.map((user, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                                >
                                    <div className="p-3 md:p-4 border-r border-gray-50 flex items-center gap-3">
                                        <img src={user.avatar} className="w-8 h-8 rounded-full" />
                                        <div className="min-w-0">
                                            <div className="font-bold truncate">{user.name}</div>
                                            <div className="text-xs text-gray-400 truncate">{user.role}</div>
                                        </div>
                                    </div>
                                    {user.status.map((status, j) => (
                                        <div key={j} className={`p-2 border-r border-gray-50 flex items-center justify-center`}>
                                            <StatusChip status={status} />
                                        </div>
                                    ))}
                                </motion.div>
                            ))}

                            {/* Faded bottom rows for effect */}
                            {[1, 2].map((i) => (
                                <div key={`fade-${i}`} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-gray-50 opacity-40 blur-[1px]">
                                    <div className="p-4 border-r border-gray-50 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                        <div className="h-4 w-24 bg-gray-200 rounded" />
                                    </div>
                                    {[1, 2, 3, 4].map(j => <div key={j} className="border-r border-gray-50 p-2"><div className="h-full w-full bg-orange-50/30 rounded" /></div>)}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

function StatusChip({ status }: { status: string }) {
    if (status === "Office") {
        return <div className="bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-[10px] md:text-xs font-bold w-full text-center border border-orange-100">Office</div>;
    }
    if (status === "Remote") {
        return <div className="bg-[#FFF9EA] text-[#B58E3E] px-2 py-1 rounded-md text-[10px] md:text-xs font-bold w-full text-center border border-[#FAEBCB]">Remote</div>;
    }
    if (status === "Away") {
        return <div className="bg-gray-50 text-gray-400 px-2 py-1 rounded-md text-[10px] md:text-xs font-bold w-full text-center border border-gray-100">Away</div>
    }
    return <div className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[10px] md:text-xs font-bold w-full text-center truncate">{status}</div>;
}
