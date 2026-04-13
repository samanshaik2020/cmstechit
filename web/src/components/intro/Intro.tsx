"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface IntroProps {
    onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
    const [step, setStep] = useState<"initial" | "final" | "exit">("initial");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Sequence Logic
    useEffect(() => {
        // Step 1: Reveal the supporting brand line
        const techTimer = setTimeout(() => setStep("final"), 1300);

        // Step 2: Exit intro
        const exitTimer = setTimeout(() => {
            setStep("exit");
            setTimeout(onComplete, 600);
        }, 2900);

        return () => {
            clearTimeout(techTimer);
            clearTimeout(exitTimer);
        };
    }, [onComplete]);

    // Canvas Background Animation (Particles + Grid)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let animationFrameId: number;

        // Particles
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = Math.floor(width / 15); // Density based on width

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Static Subtle Grid
            ctx.strokeStyle = "rgba(0,0,0,0.03)";
            ctx.lineWidth = 1;
            const gridSize = 60;
            ctx.beginPath();
            for (let x = 0; x < width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // 2. Update and Draw Particles
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles if close
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (1 - dist / 120)})`;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const containerVariants = {
        exit: {
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
        },
    };

    const brandLetters = ["C", "M", "S"];

    return (
        <motion.div
            variants={containerVariants}
            exit="exit"
            className="fixed inset-0 z-[100] bg-[#F9F9F8] flex items-center justify-center overflow-hidden font-serif"
        >
            {/* Background Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Subtle Pulsing Gradient */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-x-6 top-1/2 h-5 md:h-7 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FFCC80]/0 via-[#FFCC80]/80 to-[#FF7043]/0 blur-xl"
                    />

                    <div className="relative flex items-center justify-center gap-4 md:gap-8 text-6xl md:text-8xl lg:text-[9rem] font-bold text-[#1A1817] tracking-[0.18em] md:tracking-[0.22em]">
                        {brandLetters.map((letter, index) => (
                            <motion.span
                                key={letter}
                                initial={{ y: 36, opacity: 0, filter: "blur(10px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.75,
                                    delay: index * 0.14,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto mt-4 h-[2px] w-28 md:w-40 origin-center rounded-full bg-gradient-to-r from-transparent via-[#FF7043] to-transparent"
                    />
                </div>

                {/* TECH IT Reveal */}
                <div className="mt-4 md:mt-6 overflow-hidden h-16 md:h-24 flex items-center justify-center">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={step === "final" || step === "exit" ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xl md:text-3xl font-sans font-bold text-accent tracking-[0.45em]"
                    >
                        TECH IT
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
