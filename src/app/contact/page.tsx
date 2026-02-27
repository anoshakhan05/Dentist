"use client"

import { useState } from "react";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1000);
    };

    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-12 md:pt-32 md:pb-16 text-center">
                <Container className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">High Smile</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                        We're here to answer any questions you may have about your dental health or our services.
                    </p>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="bg-secondary/10 p-4 rounded-xl h-fit">
                                            <MapPin className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-1">Our Location</h4>
                                            <p className="text-muted-foreground">123 Premium Medical Drive<br />Suite 200<br />Health City, HC 12345</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-secondary/10 p-4 rounded-xl h-fit">
                                            <Phone className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-1">Phone Number</h4>
                                            <p className="text-muted-foreground">Main: (555) 123-4567<br />Emergency: (555) 987-6543</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="bg-secondary/10 p-4 rounded-xl h-fit">
                                            <Mail className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-1">Email Address</h4>
                                            <p className="text-muted-foreground">hello@highsmile.com<br />appointments@highsmile.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-80 rounded-3xl border border-border/50 relative overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                                    alt="High Smile Clinic Exterior"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-xl shadow-sm font-medium text-sm flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-secondary" />
                                    Get Directions
                                </div>
                            </div>
                        </div>

                        <div className="bg-muted/20 rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm h-fit">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

                            {isSuccess ? (
                                <div className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200">
                                    <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                                    <p>Thanks for reaching out. A member of our team will respond to your inquiry shortly.</p>
                                    <Button variant="outline" className="mt-4 border-green-300 hover:bg-green-100" onClick={() => setIsSuccess(false)}>
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="Your Name" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Email</label>
                                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="your@email.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Subject</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" placeholder="How can we help?" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Message</label>
                                        <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none" placeholder="Write your message here..."></textarea>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full text-lg h-12" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>

                    </div>
                </Container>
            </Section>
        </>
    );
}
