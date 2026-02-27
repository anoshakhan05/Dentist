import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { ServiceCard } from "@/components/blocks/service-card";
import { Sparkles, Smile, Shield, Activity, Clock, Heart, Baby, CheckSquare } from "lucide-react";

export default function Services() {
    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-20 md:pt-32 md:pb-32">
                <Container className="relative z-10 text-center max-w-4xl mb-12 lg:mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dental Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                        From preventative cleanings to full-arch restorations, our advanced techniques guarantee optimal results and absolute comfort.
                    </p>
                </Container>
                <Container className="relative z-10">
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                        <Image
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                            alt="Premium Dental Services Room"
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <ServiceCard
                            title="Cosmetic Dentistry"
                            description="Transform your smile with porcelain veneers, professional whitening, and aesthetic bonding."
                            icon={Sparkles}
                            slug="cosmetic-dentistry"
                        />
                        <ServiceCard
                            title="Orthodontics & Invisalign"
                            description="Achieve perfect alignment inconspicuously with clear aligners and modern orthodontic solutions."
                            icon={Smile}
                            slug="orthodontics"
                        />
                        <ServiceCard
                            title="Dental Implants"
                            description="Permanently replace missing teeth with natural-looking, durable titanium implants."
                            icon={Shield}
                            slug="dental-implants"
                        />
                        <ServiceCard
                            title="General Dentistry"
                            description="Maintain optimal oral health with comprehensive exams, cleanings, and preventative care."
                            icon={Activity}
                            slug="general-dentistry"
                        />
                        <ServiceCard
                            title="Emergency Care"
                            description="Same-day appointments for severe pain, broken teeth, or other dental emergencies."
                            icon={Clock}
                            slug="emergency-care"
                        />
                        <ServiceCard
                            title="Pediatric Dentistry"
                            description="Gentle, stress-free dental care tailored specifically for children and adolescents."
                            icon={Baby}
                            slug="pediatric-dentistry"
                        />
                        <ServiceCard
                            title="Root Canal Therapy"
                            description="Pain-free endodontic treatments to save infected teeth and eliminate discomfort instantly."
                            icon={Heart}
                            slug="endodontics"
                        />
                        <ServiceCard
                            title="Oral Surgery"
                            description="Expert extractions, including impacted wisdom teeth, performed with deep sedation."
                            icon={CheckSquare}
                            slug="oral-surgery"
                        />
                    </div>
                </Container>
            </Section >
        </>
    );
}
