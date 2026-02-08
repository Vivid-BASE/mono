"use client";

import { siteConfig } from "@/lib/data";
import { Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t-2 border-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <h3 className="text-2xl font-serif font-bold tracking-wider">
                        {siteConfig.name}
                    </h3>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href={siteConfig.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter size={24} />
                        </a>
                        <a
                            href={siteConfig.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href={siteConfig.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={24} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400 tracking-wider">
                        {siteConfig.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
