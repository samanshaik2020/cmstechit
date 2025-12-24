"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    Terminal, GitBranch, CheckCircle2, AlertCircle,
    Layout, Settings, Zap, Globe, ChevronRight,
    Server, Activity, Shield, Command
} from "lucide-react";

// --- Sub Components ---

const Cursor = ({ controls }: { controls: any }) => (
    <motion.div
        animate={controls}
        initial={{ x: -20, y: -20, opacity: 0 }}
        className="absolute z-[100] pointer-events-none filter drop-shadow-2xl"
    >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L13.43 26.63L16.77 16.77L26.63 13.43L4 4Z" fill="black" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute top-6 left-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none whitespace-nowrap opacity-0 animate-fade-in">
            User 1
        </div>
    </motion.div>
);

const SidebarItem = ({ icon: Icon, label, active, hovered }: any) => (
    <div className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors duration-200 ${active ? 'bg-orange-50 text-orange-700' :
        hovered ? 'bg-gray-100 text-gray-900' :
            'text-gray-500'
        }`}>
        <Icon className={`w-4 h-4 ${active ? 'text-orange-600' : 'text-gray-400'}`} />
        {label}
    </div>
);

const LogLine = ({ text, color = "text-gray-300" }: any) => (
    <div className={`font-mono text-xs ${color} py-0.5 border-l-2 border-transparent pl-2`}>
        {text}
    </div>
);

export default function DashboardPreview() {
    const cursorControls = useAnimation();

    // UI States controlled by the animation timeline
    const [deployStatus, setDeployStatus] = useState("idle");
    const [hoveredSidebar, setHoveredSidebar] = useState<string | null>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [terminalLines, setTerminalLines] = useState<string[]>([
        "> Initializing build environment...",
        "> Loading configuration from /etc/config.json",
        "> Connected to remote repository origin/main"
    ]);

    // Orchestrate the animation sequence
    useEffect(() => {
        const sequence = async () => {
            // Wait for view
            await new Promise(r => setTimeout(r, 800));

            // 1. Sidebar Sweeping
            await cursorControls.start({ x: 100, y: 130, opacity: 1, transition: { duration: 1, ease: "circOut" } });
            setHoveredSidebar("overview");
            await new Promise(r => setTimeout(r, 300));

            await cursorControls.start({ y: 180, transition: { duration: 0.3 } });
            setHoveredSidebar("deployments");
            await new Promise(r => setTimeout(r, 300));

            await cursorControls.start({ y: 230, transition: { duration: 0.3 } });
            setHoveredSidebar("console");
            await new Promise(r => setTimeout(r, 300));

            await cursorControls.start({ y: 280, transition: { duration: 0.3 } });
            setHoveredSidebar("domains");
            await new Promise(r => setTimeout(r, 500));
            setHoveredSidebar(null);

            // 2. Head Up to Header
            await cursorControls.start({ x: 500, y: 80, transition: { duration: 1, ease: "easeInOut" } });
            await new Promise(r => setTimeout(r, 400));

            // 3. Move to "Deploy" button and CLICK
            await cursorControls.start({ x: 1200, y: 220, transition: { duration: 1.2, ease: "easeInOut" } });
            await cursorControls.start({ scale: 0.85, transition: { duration: 0.1 } });
            setDeployStatus("running");
            await cursorControls.start({ scale: 1, transition: { duration: 0.1 } });
            setTerminalLines(prev => [...prev, "> Build started at " + new Date().toLocaleTimeString(), "> Compiling assets..."]);

            // 4. Tour the Status Cards
            await cursorControls.start({ x: 450, y: 400, transition: { duration: 1, ease: "easeOut" } });
            setHoveredCard("uptime");
            await new Promise(r => setTimeout(r, 600));

            await cursorControls.start({ x: 800, transition: { duration: 0.6 } });
            setHoveredCard("response");
            await new Promise(r => setTimeout(r, 600));

            await cursorControls.start({ x: 1150, transition: { duration: 0.6 } });
            setHoveredCard("error");
            await new Promise(r => setTimeout(r, 800));
            setHoveredCard(null);

            // 5. Check Console/Terminal activity
            await cursorControls.start({ x: 800, y: 650, transition: { duration: 1, ease: "easeInOut" } });
            setTerminalLines(prev => [...prev, "√ Assets compiled in 420ms", "> Running unit tests (12/12)..."]);
            await new Promise(r => setTimeout(r, 1000));

            // Build Success
            setDeployStatus("success");
            setTerminalLines(prev => [...prev, "√ Tests Passed", "√ Deployed to Edge Region: us-east-1"]);

            // 6. Return to "Settings"
            await cursorControls.start({ x: 100, y: 450, transition: { duration: 1.5, ease: "easeInOut" } });
            setHoveredSidebar("settings");
        };
        sequence();
    }, [cursorControls]);

    return (
        <section className="py-24 bg-[#FBF9F8] overflow-hidden select-none">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4 text-[#3E2723]"
                        >
                            Orchestrate Everything<span className="text-orange-600">.</span>
                        </motion.h2>
                        <p className="text-lg text-gray-500">
                            Our platform isn't just a dashboard. It's a mission control center for your digital infrastructure.
                        </p>
                    </div>
                </div>

                {/* Dashboard Container - Full Width & Realistic */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative bg-white rounded-xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden h-[700px] flex text-sm"
                >
                    {/* The Cursor Layer */}
                    <div className="absolute inset-0 z-[100] pointer-events-none">
                        <Cursor controls={cursorControls} />
                    </div>

                    {/* Left Sidebar */}
                    <div className="w-72 bg-[#FAfaf9] border-r border-gray-200 flex flex-col hidden lg:flex">
                        <div className="p-6 border-b border-gray-100 mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                                    <Command className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-[#3E2723]">Admin Console</div>
                            </div>
                        </div>

                        <div className="p-4 space-y-1">
                            <div className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2 mt-2">Platform</div>
                            <SidebarItem icon={Layout} label="Overview" hovered={hoveredSidebar === 'overview'} />
                            <SidebarItem icon={GitBranch} label="Deployments" hovered={hoveredSidebar === 'deployments'} active={!hoveredSidebar || hoveredSidebar === 'deployments'} />
                            <SidebarItem icon={Terminal} label="Console" hovered={hoveredSidebar === 'console'} />
                            <SidebarItem icon={Globe} label="Domains" hovered={hoveredSidebar === 'domains'} />

                            <div className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2 mt-6">Monitoring</div>
                            <SidebarItem icon={Activity} label="Analytics" hovered={hoveredSidebar === 'analytics'} />
                            <SidebarItem icon={Shield} label="Security" hovered={hoveredSidebar === 'security'} />
                            <SidebarItem icon={Settings} label="Settings" hovered={hoveredSidebar === 'settings'} />
                        </div>

                        <div className="mt-auto p-4 bg-gray-50 border-t border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200" />
                                <div>
                                    <div className="font-medium">Administrator</div>
                                    <div className="text-xs text-gray-500">admin@cmstech.it</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-gray-50/30">
                        {/* App Header */}
                        <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-500 font-medium hover:text-orange-600 transition-colors cursor-pointer">Start Up Project</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-900 font-bold flex items-center gap-2">
                                    <Server className="w-4 h-4 text-orange-600" />
                                    production-api-v2
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    Healthy
                                </div>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 p-8 overflow-y-auto">

                            {/* Top Bar: Actions */}
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#3E2723] mb-1">Deployment Pipeline</h3>
                                    <p className="text-gray-500">Manage and monitor your continuous integration flows.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md font-medium shadow-sm hover:bg-gray-50">
                                        View Logs
                                    </button>
                                    <motion.button
                                        animate={
                                            deployStatus === 'idle' ? { scale: 1 } :
                                                deployStatus === 'running' ? { scale: 0.98 } :
                                                    { scale: 1, backgroundColor: "#16a34a", borderColor: "#16a34a" }
                                        }
                                        className={`px-5 py-2.5 rounded-md font-bold shadow-lg transition-all flex items-center gap-2 ${deployStatus === 'success' ? 'bg-green-600 text-white' :
                                            'bg-[#3E2723] text-white hover:bg-[#2c2c2c]'
                                            }`}
                                    >
                                        {deployStatus === 'idle' && <> <Zap className="w-4 h-4 fill-current" /> Deploy Production </>}
                                        {deployStatus === 'running' && <> <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Building... </>}
                                        {deployStatus === 'success' && <> <CheckCircle2 className="w-4 h-4" /> Deployed Success </>}
                                    </motion.button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                                {/* Stats Cards */}
                                <div className={`p-5 bg-white rounded-lg border transition-all duration-300 ${hoveredCard === 'uptime' ? 'border-orange-200 shadow-md transform -translate-y-1' : 'border-gray-200 shadow-sm'}`}>
                                    <div className="text-gray-500 mb-2 font-medium">Uptime (30d)</div>
                                    <div className="text-3xl font-bold text-gray-900">99.99<span className="text-lg text-gray-400">%</span></div>
                                    <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[99.9%]" />
                                    </div>
                                </div>
                                <div className={`p-5 bg-white rounded-lg border transition-all duration-300 ${hoveredCard === 'response' ? 'border-orange-200 shadow-md transform -translate-y-1' : 'border-gray-200 shadow-sm'}`}>
                                    <div className="text-gray-500 mb-2 font-medium">Avg. Response</div>
                                    <div className="text-3xl font-bold text-gray-900">42<span className="text-lg text-gray-400">ms</span></div>
                                    <div className="mt-4 flex gap-1">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="h-6 w-1/8 flex-1 bg-orange-100 rounded-sm hover:bg-orange-200 transition-colors" />)}
                                    </div>
                                </div>
                                <div className={`p-5 bg-white rounded-lg border transition-all duration-300 ${hoveredCard === 'error' ? 'border-orange-200 shadow-md transform -translate-y-1' : 'border-gray-200 shadow-sm'}`}>
                                    <div className="flex justify-between">
                                        <div className="text-gray-500 font-medium">Error Rate</div>
                                        <div className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">Stable</div>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900">0.01<span className="text-lg text-gray-400">%</span></div>
                                </div>
                            </div>

                            {/* Terminal / Logs Area */}
                            <div className="bg-[#1e1e1e] rounded-lg shadow-inner overflow-hidden flex flex-col h-64 font-mono text-sm">
                                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#3e3e3e]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="text-gray-400 text-xs text-center flex-1">build-log-e402.txt</div>
                                </div>
                                <div className="p-4 overflow-y-auto flex-1 font-mono">
                                    {terminalLines.map((line, i) => (
                                        <LogLine key={i} text={line} color={line.includes("√") ? "text-green-400" : line.includes(">") ? "text-blue-400" : "text-gray-300"} />
                                    ))}
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-4 bg-orange-500 ml-1 align-middle"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
