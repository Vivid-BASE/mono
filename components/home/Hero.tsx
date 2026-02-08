"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
    const [dimensions, setDimensions] = useState(() => {
        // Only access window on client side
        if (typeof window !== 'undefined') {
            return { width: window.innerWidth, height: window.innerHeight };
        }
        return { width: 1920, height: 1080 };
    });

    // Generate stable particle properties using useState with function initializer
    const [particles] = useState(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            initialX: Math.random(),
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        }))
    );

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        // Set initial dimensions
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-between bg-black overflow-hidden">
            {/* Desktop: Full Screen Band Photo with Zoom Animation */}
            <motion.div
                className="absolute inset-0 z-0 md:block hidden"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Image
                    src="https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/1737a205-edea-4ea0-b613-4c72f013540a"
                    alt="Monochrome Cinderella"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Top Gradient for Japanese Slogan */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
                {/* Bottom Gradient for Band Name */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
            </motion.div>

            {/* Mobile: Image at top with natural height */}
            <motion.div
                className="md:hidden absolute top-0 left-0 right-0 z-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ height: 'auto', aspectRatio: '4/3' }}
            >
                <Image
                    src="https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/1737a205-edea-4ea0-b613-4c72f013540a"
                    alt="Monochrome Cinderella"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Top Gradient */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
                {/* Bottom Gradient */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
            </motion.div>

            {/* Black background for mobile below image */}
            <div className="md:hidden absolute inset-0 bg-black -z-10" />

            {/* Animated Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                            x: particle.initialX * dimensions.width,
                            y: -10,
                            opacity: 0,
                        }}
                        animate={{
                            y: dimensions.height + 10,
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Japanese Slogan at Top with Reveal Animation */}
            <div className="container mx-auto px-4 pt-8 md:pt-10 relative z-20 text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                >
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl font-light text-white tracking-[0.3em] drop-shadow-lg"
                        initial={{ letterSpacing: "0.1em" }}
                        animate={{ letterSpacing: "0.3em" }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        {heroContent.slogan.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </motion.div>
            </div>

            {/* Band Name - Responsive Positioning - Balanced with image */}
            <div className="container mx-auto px-4 relative z-20 text-center absolute left-0 right-0 bottom-16 sm:bottom-16 md:bottom-4 lg:bottom-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="space-y-4 md:space-y-6"
                >
                    {/* Band Name - Responsive Layout */}
                    <div className="relative inline-block overflow-visible">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                        >
                            {/* Desktop: 1 Line */}
                            <motion.h1
                                className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wider leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
                            >
                                MONOCHROME CINDERELLA
                            </motion.h1>

                            {/* Tablet/Mobile: 2 Lines */}
                            <div className="lg:hidden">
                                <motion.h1
                                    className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight"
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
                                >
                                    MONOCHROME
                                </motion.h1>
                                <motion.h1
                                    className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
                                >
                                    CINDERELLA
                                </motion.h1>
                            </div>
                        </motion.div>

                        {/* Enhanced Glowing Effect - Desktop */}
                        <motion.div
                            className="hidden lg:block absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ delay: 3, duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wider leading-tight blur-xl">
                                MONOCHROME CINDERELLA
                            </h1>
                        </motion.div>

                        {/* Enhanced Glowing Effect - Mobile */}
                        <motion.div
                            className="lg:hidden absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ delay: 3, duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight blur-xl">
                                MONOCHROME
                            </h1>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight blur-xl">
                                CINDERELLA
                            </h1>
                        </motion.div>

                        {/* Second Layer Glow - Desktop */}
                        <motion.div
                            className="hidden lg:block absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{ delay: 3.5, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wider leading-tight blur-2xl">
                                MONOCHROME CINDERELLA
                            </h1>
                        </motion.div>

                        {/* Second Layer Glow - Mobile */}
                        <motion.div
                            className="lg:hidden absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{ delay: 3.5, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight blur-2xl">
                                MONOCHROME
                            </h1>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wider leading-tight blur-2xl">
                                CINDERELLA
                            </h1>
                        </motion.div>
                    </div>

                    {/* Enhanced Scroll Indicator - Much More Visible */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 1 }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.span
                                className="text-sm tracking-[0.3em] uppercase font-bold text-white"
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                SCROLL DOWN
                            </motion.span>
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                                className="relative"
                            >
                                {/* Main Arrow - Larger */}
                                <svg width="32" height="50" viewBox="0 0 32 50" fill="none">
                                    <motion.path
                                        d="M16 0 L16 40 M16 40 L8 32 M16 40 L24 32"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    />
                                </svg>
                                {/* Strong Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 blur-lg"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <svg width="32" height="50" viewBox="0 0 32 50" fill="none">
                                        <path
                                            d="M16 0 L16 40 M16 40 L8 32 M16 40 L24 32"
                                            stroke="white"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
