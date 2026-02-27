import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-20 md:pt-32 md:pb-32">
                <Container className="relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dental Experience</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                        Founded on the principle that dental care should be painless, personalized, and performed in a truly relaxing environment.
                    </p>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse">
                        <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-md">
                            <Image
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                                alt="Clinic Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Philosophy</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                For over 15 years, Lumina Dental has been Health City's premier destination for cosmetic and restorative dentistry.
                                We believe that a beautiful, healthy smile is fundamentally linked to your overall well-being and confidence.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Our clinic was designed from the ground up to counteract clinical anxiety. From our welcoming waiting lounge to our
                                state-of-the-art treatment suites equipped with entertainment and noise-canceling options, every detail serves your comfort.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Patient-First Approach",
                                    "Investment in 3D & Digital Tech",
                                    "Holistic Oral Health Focus",
                                    "Continuous Specialist Education"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                                        <span className="font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/30">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Meet Our Experts</h2>
                        <p className="text-lg text-muted-foreground">
                            A multidisciplinary team of specialists dedicated to providing comprehensive, world-class care under one roof.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 group">
                            <div className="relative h-[300px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1594824436998-ef22a7f5a439?q=80&w=1964&auto=format&fit=crop"
                                    alt="Dr. Sarah Jenkins"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-1">Dr. Sarah Jenkins, DDS</h3>
                                <p className="text-secondary font-medium mb-4">Cosmetic Specialist</p>
                                <p className="text-muted-foreground text-sm">Expert in full mouth rehabilitations, porcelain veneers, and complex aesthetic cases.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 group">
                            <div className="relative h-[300px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                                    alt="Dr. Marcus Thorne"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-1">Dr. Marcus Thorne</h3>
                                <p className="text-secondary font-medium mb-4">Implantologist & Surgeon</p>
                                <p className="text-muted-foreground text-sm">Board-certified oral surgeon specializing in 3D-guided implant placement.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 group">
                            <div className="relative h-[300px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                                    alt="Dr. Emily Chen"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-1">Dr. Emily Chen</h3>
                                <p className="text-secondary font-medium mb-4">Orthodontist</p>
                                <p className="text-muted-foreground text-sm">Diamond+ Invisalign provider passionate about functional and beautiful alignments.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <section className="bg-primary text-primary-foreground py-20">
                <Container className="text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Experience the Difference</h2>
                    <p className="text-xl text-white/80 mb-10">
                        Join the thousands of patients who have discovered that going to the dentist can actually be a pleasant experience.
                    </p>
                    <Button size="lg" variant="secondary" className="text-lg h-14" asChild>
                        <Link href="/book-appointment">Book Your Consultation</Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
