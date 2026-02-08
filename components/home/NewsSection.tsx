"use client";

import { motion } from "framer-motion";
import { newsItems } from "@/lib/data";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function NewsSection() {
    return (
        <section id="news" className="py-20 bg-white text-foreground relative paper-texture">
            <div className="container mx-auto px-4">
                {/* Section Header with Gothic Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-black elegant-text tracking-wider mb-4">
                            MEDIA NEWS
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {newsItems.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block elegant-hover"
                        >
                            <article className="vintage-frame bg-white h-full flex flex-col">
                                {/* Magazine Cover Image - Fixed Aspect Ratio */}
                                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    )}
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs tracking-widest">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 flex-grow flex flex-col">
                                    <time className="text-xs text-gray-500 tracking-wider font-mono">
                                        {item.date}
                                    </time>

                                    <h3 className="text-sm md:text-base font-bold text-black leading-tight group-hover:text-gray-600 transition-colors flex-grow">
                                        {item.title}
                                    </h3>

                                    {item.description && (
                                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-xs text-black font-bold tracking-wider pt-2 mt-auto">
                                        <span>READ MORE</span>
                                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
