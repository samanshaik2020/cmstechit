"use client";

import React, { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
    };

    return (
        <main className="min-h-screen bg-background text-text selection:bg-accent selection:text-white pt-20">
            <Header />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left Column: Header & Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                    Let's Start a <br />
                                    <span className="text-accent">Conversation.</span>
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                                    Whether you have a clear vision or just a rough idea, we're here to help you architect a solution that scales.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <ContactItem
                                    icon={<Mail className="w-6 h-6" />}
                                    label="Email us"
                                    value="hello@cmstechit.com"
                                    href="mailto:hello@cmstechit.com"
                                />
                                <ContactItem
                                    icon={<Phone className="w-6 h-6" />}
                                    label="Call us"
                                    value="+1 (555) 000-0000"
                                    href="tel:+15550000000"
                                />
                                <ContactItem
                                    icon={<MapPin className="w-6 h-6" />}
                                    label="Visit us"
                                    value="123 Innovation Dr, Tech City, TC 90210"
                                />
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <InputGroup
                                        label="Name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                    <InputGroup
                                        label="Email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                    <InputGroup
                                        label="Company (Optional)"
                                        type="text"
                                        placeholder="Your Company Ltd."
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                    />
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-900">
                                            How can we help?
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full bg-background border-b-2 border-gray-200 focus:border-accent outline-none py-3 transition-colors resize-none placeholder:text-gray-400"
                                            placeholder="Tell us about your project..."
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center justify-between w-full bg-[#1A1817] text-white px-8 py-5 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                                >
                                    <span>Send Message</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </FadeIn>
            </section>

            <Footer />
        </main>
    );
}

function ContactItem({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const Content = () => (
        <div className="flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-white transition-colors group">
            <div className="text-accent group-hover:scale-110 transition-transform mt-1">{icon}</div>
            <div>
                <div className="text-sm font-medium text-gray-400 mb-1">{label}</div>
                <div className="text-lg font-semibold text-gray-900">{value}</div>
            </div>
        </div>
    );

    return href ? (
        <a href={href} className="block w-full">
            <Content />
        </a>
    ) : (
        <Content />
    );
}

function InputGroup({
    label,
    type,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">{label}</label>
            <input
                type={type}
                className="w-full bg-background border-b-2 border-gray-200 focus:border-accent outline-none py-3 transition-colors placeholder:text-gray-400"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
