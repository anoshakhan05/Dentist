"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen?: boolean
    onClick?: () => void
    className?: string
}

export function AccordionItem({ title, children, isOpen, onClick, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b border-border/50", className)}>
            <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary text-lg"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-muted-foreground leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function Accordion({ items, className }: { items: { title: string, content: React.ReactNode }[], className?: string }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <div className={cn("w-full", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
