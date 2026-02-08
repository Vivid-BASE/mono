"use client";

import { motion } from "framer-motion";
import { members, bioText } from "@/lib/data";
import Image from "next/image";

export function BiographySection() {
    // Sort members based on screen size
    const sortedMembersDesktop = [...members].sort((a, b) => a.order.desktop - b.order.desktop);
    const sortedMembersMobile = [...members].sort((a, b) => a.order.mobile - b.order.mobile);

    return (
        <section id="biography" className="py-20 bg-white text-foreground relative paper-texture">
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
                            BIOGRAPHY
                        </h2>
                        <div className="ornamental-divider">
                            <span className="text-2xl">◆</span>
                        </div>
                    </div>
                </motion.div>

                {/* Band Photo and Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="vintage-frame bg-white">
                        {/* Band Photo */}
                        <div className="relative aspect-[16/9] md:aspect-[3/2] mb-8 overflow-hidden">
                            <Image
                                src={bioText.bandImage}
                                alt="Monochrome Cinderella"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 896px"
                            />
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-3xl font-serif font-bold text-black">
                                {bioText.header}
                            </h3>
                            <p className="text-sm tracking-widest text-gray-600 uppercase">
                                {bioText.sub}
                            </p>
                            <div className="pt-6 border-t border-gray-300">
                                <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                                    {bioText.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Members Grid */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-serif font-bold text-black text-center mb-12 gothic-ornament">
                        MEMBERS
                    </h3>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-5 gap-6">
                        {sortedMembersDesktop.map((member, index) => (
                            <MemberCard key={member.name} member={member} index={index} />
                        ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="grid md:hidden grid-cols-2 gap-4">
                        {sortedMembersMobile.map((member, index) => (
                            <MemberCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Member Card Component
function MemberCard({ member, index }: { member: typeof members[number]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className="gothic-border bg-white p-3 md:p-4 elegant-hover h-full flex flex-col">
                {/* Member Photo - Fixed Aspect Ratio */}
                <div className="relative aspect-[3/4] mb-3 md:mb-4 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                    {member.image && member.image.startsWith('http') ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 50vw, 20vw"
                        />
                    ) : (
                        <span className="text-4xl md:text-6xl font-black text-white/30">
                            {member.role.replace(".", "")}
                        </span>
                    )}
                </div>

                {/* Member Info - Flex grow to fill space */}
                <div className="text-center space-y-1 md:space-y-2 flex-grow flex flex-col">
                    <p className="text-xs tracking-widest text-gray-600">
                        {member.role}
                    </p>
                    <h4 className="text-base md:text-lg font-bold text-black">
                        {member.englishName}
                    </h4>
                    <p className="text-sm text-gray-700">
                        {member.name}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-200 mt-auto">
                        {member.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
