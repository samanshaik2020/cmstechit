"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Database, Zap, Clock, Slack, CheckCircle, ArrowRight } from "lucide-react";

export default function AutomationMockup() {
    return (
        <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center p-8">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* Workflow Nodes */}
            <div className="relative z-10 w-full max-w-lg">

                {/* Start Trigger */}
                <Node
                    icon={Clock}
                    color="bg-blue-500"
                    label="Every Morning 8:00 AM"
                    delay={0}
                    connectedTo={["fetch-data"]}
                />

                <div className="h-12 w-0.5 bg-gray-300 mx-auto my-2 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-blue-500 absolute top-0"
                    />
                </div>

                {/* Action 1 */}
                <Node
                    id="fetch-data"
                    icon={Database}
                    color="bg-orange-500"
                    label="Fetch Sales Data"
                    subLabel="PostgreSQL DB"
                    delay={0.2}
                />

                <div className="h-12 w-0.5 bg-gray-300 mx-auto my-2 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        className="w-full h-1/2 bg-orange-500 absolute top-0"
                    />
                </div>

                {/* Parallel Actions */}
                <div className="flex justify-center gap-8 relative">
                    {/* Connector lines drawing out */}
                    <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-8 pointer-events-none overflow-visible">
                        <path d="M96 0 V8 Q96 16 80 16 H16 Q0 16 0 32" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                        <path d="M96 0 V8 Q96 16 112 16 H176 Q192 16 192 32" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                    </svg>

                    <Node
                        icon={Mail}
                        color="bg-purple-500"
                        label="Email Report"
                        subLabel="To: CEO"
                        delay={0.4}
                    />

                    <Node
                        icon={Slack}
                        color="bg-green-500"
                        label="Notify Channel"
                        subLabel="#sales-team"
                        delay={0.6}
                    />
                </div>

                {/* Status Toast simulating live action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute -right-12 top-0 bg-white shadow-lg rounded-lg p-3 flex items-center gap-3 border border-green-100"
                >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                        <div className="font-bold text-gray-800">Workflow Success</div>
                        <div className="text-gray-400">Run ID: #8823</div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

function Node({ icon: Icon, color, label, subLabel, delay = 0, id }: any) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 relative z-10 w-fit mx-auto min-w-[200px]"
            id={id}
        >
            <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center text-white shadow-md`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <div className="font-bold text-sm text-gray-800">{label}</div>
                {subLabel && <div className="text-xs text-gray-400">{subLabel}</div>}
            </div>
            <div className="ml-auto">
                <div className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
            </div>
        </motion.div>
    );
}
