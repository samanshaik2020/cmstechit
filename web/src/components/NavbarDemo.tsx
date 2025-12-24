"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Web Development"
                            href="/#services"
                            src="/web.svg"
                            description="High-performance, scalable web applications built with modern stacks."
                        />
                        <ProductItem
                            title="Interface Design"
                            href="/#services"
                            src="/design.svg"
                            description="User-centric design that drives engagement and conversion."
                        />
                        <ProductItem
                            title="SEO Optimization"
                            href="/#services"
                            src="/seo.svg"
                            description="Data-driven strategies to dominate search rankings."
                        />
                        <ProductItem
                            title="Branding"
                            href="/#services"
                            src="/branding.svg"
                            description="Unforgettable brand identities that resonate with your audience."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/#pricing">Hobby</HoveredLink>
                        <HoveredLink href="/#pricing">Individual</HoveredLink>
                        <HoveredLink href="/#pricing">Team</HoveredLink>
                        <HoveredLink href="/#pricing">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
