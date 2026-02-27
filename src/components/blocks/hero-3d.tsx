"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

export function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth scroll transforms
    const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotateYTransform = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const rotateXTransform = useTransform(scrollYProgress, [0, 1], [10, -20]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleTransform = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    return (
        <div ref={containerRef} className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center pt-10 lg:pt-0 perspective-[2000px]">
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

            {/* Cinematic Smooth Scroll Element */}
            <motion.div
                style={{
                    y: yTransform,
                    rotateY: rotateYTransform,
                    rotateX: rotateXTransform,
                    opacity: opacityTransform,
                    scale: scaleTransform,
                    transformStyle: "preserve-3d"
                }}
                className="relative z-10 w-full max-w-[320px] lg:max-w-[450px] aspect-square drop-shadow-2xl"
            >
                <div className="relative w-full h-full rounded-full flex items-center justify-center transform-gpu">
                    {/* Using an abstract/macro representation of dental technology */}
                    <div className="relative w-[80%] h-[80%] rounded-[4rem] overflow-hidden border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.2)] bg-white/5 backdrop-blur-md group">
                        <Image
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
                            alt="Cinematic 3D Scroll Visualization"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[4rem]"></div>
                    </div>
                </div>
            </motion.div>

            {/* Orbiting Elements to enhance 3D feel */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[20%] bg-white p-3 rounded-full shadow-lg backdrop-blur-md border border-white/30"
                >
                    <Sparkles className="h-5 w-5 text-secondary" />
                </motion.div>

                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[20%] right-[15%] bg-white/90 p-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-md border border-white/20"
                >
                    <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}
