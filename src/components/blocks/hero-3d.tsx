"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function Hero3D() {
    return (
        <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center pt-10 lg:pt-0">
            {/* Background Cinematic Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-72 h-72 bg-secondary/30 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* 3D Tooth Main Element (Floating & Rotating) */}
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    rotateY: [-5, 5, -5],
                    rotateX: [2, -2, 2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative z-10 w-full max-w-[320px] lg:max-w-[450px] aspect-square drop-shadow-2xl"
                style={{ perspective: 1000 }}
            >
                <div className="relative w-full h-full rounded-full flex items-center justify-center transform-gpu">
                    {/* We use a very clean, high-tech dental macro image or a 3D render placeholder */}
                    <div className="relative w-[80%] h-[80%] rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
                            alt="3D Cinematic Tooth Model"
                            fill
                            className="object-cover mix-blend-overlay brightness-110 contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 mix-blend-hard-light"></div>
                    </div>
                </div>
            </motion.div>

            {/* Orbiting Elements for Cinematic Feel */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[20%] bg-white p-3 rounded-full shadow-lg backdrop-blur-md border border-white/20"
                >
                    <Sparkles className="h-5 w-5 text-secondary" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[15%] bg-white/90 p-2.5 rounded-full shadow-lg backdrop-blur-md border border-white/20"
                >
                    <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}
