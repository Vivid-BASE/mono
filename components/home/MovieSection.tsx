"use client";

import { motion } from "framer-motion";
import { movieItems } from "@/lib/data";

export function MovieSection() {
    return (
        <section id="movie" className="py-20 bg-white text-foreground relative paper-texture">
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
                            MOVIE
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {movieItems.map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="vintage-frame bg-white elegant-hover">
                                {/* YouTube Embed */}
                                <div className="relative aspect-video mb-4 overflow-hidden bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${movie.youtubeId}`}
                                        title={movie.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    />
                                </div>

                                {/* Video Info */}
                                <div className="space-y-2">
                                    <p className="text-xs tracking-widest text-gray-600">
                                        {movie.type}
                                    </p>
                                    <h3 className="text-xl font-serif font-bold text-black">
                                        {movie.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
