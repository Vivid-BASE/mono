"use client";

import { motion } from "framer-motion";
import { goodsItems } from "@/lib/data";
import Image from "next/image";

export function GoodsSection() {
    return (
        <section id="goods" className="py-20 bg-gray-50 text-foreground relative lace-pattern">
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
                            GOODS
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* Goods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {goodsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="gothic-border bg-white p-4 elegant-hover">
                                {/* Product Image */}
                                <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-700 p-2"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="tracking-widest text-gray-600">
                                            {item.category}
                                        </span>
                                        <span className="font-mono text-black font-bold">
                                            #{item.id.padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-sm font-bold text-black leading-tight min-h-[2.5rem]">
                                        {item.name}
                                    </h3>

                                    <div className="pt-3 border-t border-gray-300">
                                        <p className="text-lg font-mono font-bold text-black">
                                            {item.price}
                                        </p>
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
