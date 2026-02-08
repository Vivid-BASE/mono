"use client";

import { motion } from "framer-motion";
import { liveItems } from "@/lib/data";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export function LiveSection() {
    return (
        <section id="live" className="py-20 bg-gray-50 text-foreground relative lace-pattern">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-black elegant-text tracking-wider mb-4">
                            LIVE SCHEDULE
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* Live Items */}
                <div className="space-y-8 max-w-5xl mx-auto">
                    {liveItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="vintage-frame bg-white elegant-hover">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Flyer Image */}
                                    <div className="md:w-1/3">
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Event Info */}
                                    <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                                        {/* Date */}
                                        <div className="flex items-center gap-3 text-sm">
                                            <Calendar size={18} className="text-gray-600" />
                                            <span className="font-mono text-lg font-bold">
                                                {item.date} ({item.day})
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-serif font-bold text-black leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* Venue */}
                                        <div className="flex items-start gap-3 text-sm">
                                            <MapPin size={18} className="text-gray-600 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 leading-relaxed">
                                                {item.venue}
                                            </span>
                                        </div>

                                        {/* Link */}
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-black border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all w-fit"
                                        >
                                            <span className="tracking-wider">DETAILS</span>
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
