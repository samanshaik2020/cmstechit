"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Realizations", href: "#portfolio" },
    { name: "About", href: "#about" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
            className="fixed top-0 w-full z-50 pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-text font-serif">
                        cmstechit<span className="text-accent">.</span>
                    </Link>
                </div>

                {/* Desktop Menu - Pill Shape */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#EAEAEA]/80 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center space-x-6 shadow-sm border border-white/20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-text transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <span className="text-xs font-semibold text-gray-400">EN</span>
                    <Link
                        href="#contact"
                        className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Contact us
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-full bg-white shadow-sm text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 md:hidden pointer-events-auto border border-gray-100"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:bg-gray-50 hover:text-black px-4 py-3 rounded-xl text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    href="#contact"
                                    className="block w-full text-center bg-black text-white px-5 py-3 rounded-xl text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
