"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/data";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        return () => {
            setIsOpen(false);
        };
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm" : "bg-white/80 backdrop-blur-sm border-gray-100"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-serif font-bold tracking-wider text-black hover:text-gray-600 transition-colors">
                    {siteConfig.name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors uppercase font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black hover:text-gray-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base tracking-wider text-gray-700 hover:text-black transition-colors uppercase font-medium py-2"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
