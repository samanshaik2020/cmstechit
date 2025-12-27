"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background pt-24 pb-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Final CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold text-text mb-6">
                            Ready to build <br /> the future?
                        </h2>
                        <p className="text-xl text-gray-500 mb-8">
                            Let’s discuss how our technology can amplify your business goals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-full font-semibold transition-all group shadow-lg"
                        >
                            Get a Custom Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-4 text-gray-500">
                        <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
                    </div>
                </div>

                {/* Bottom Section: Links & Copyright */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} CMS Tech IT. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
