"use client";

import { motion } from "framer-motion";
import { discographyItems } from "@/lib/data";
import Image from "next/image";

export function DiscographySection() {
    return (
        <section id="discography" className="py-20 bg-gray-50 text-foreground relative lace-pattern">
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
                            DISCOGRAPHY
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* Album Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {discographyItems.map((album, index) => (
                        <motion.div
                            key={album.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="gothic-border bg-white p-6 elegant-hover">
                                {/* Album Artwork */}
                                <div className="relative aspect-square mb-6 overflow-hidden">
                                    <Image
                                        src={album.image}
                                        alt={album.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Album Info */}
                                <div className="space-y-4">
                                    <div className="border-t-2 border-b-2 border-black py-3">
                                        <p className="text-xs tracking-widest text-gray-600 mb-1">
                                            {album.type}
                                        </p>
                                        <h3 className="text-2xl font-serif font-bold text-black">
                                            {album.title}
                                        </h3>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Release</span>
                                        <span className="font-mono">{album.releaseDate}</span>
                                    </div>

                                    {album.catalogNo && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Catalog No.</span>
                                            <span className="font-mono">{album.catalogNo}</span>
                                        </div>
                                    )}

                                    {album.price && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Price</span>
                                            <span className="font-mono">{album.price}</span>
                                        </div>
                                    )}

                                    {/* Track List */}
                                    {album.tracks && album.tracks.length > 0 && (
                                        <div className="mt-6 pt-6 border-t border-gray-300">
                                            <p className="text-xs tracking-widest text-gray-600 mb-3">
                                                TRACK LIST
                                            </p>
                                            <ul className="space-y-2 text-sm">
                                                {album.tracks.map((track, idx) => (
                                                    <li key={idx} className="text-gray-700 font-light">
                                                        {track}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
