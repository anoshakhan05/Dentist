import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CheckCircle2, Phone, Calendar } from "lucide-react";

// Mock data for dynamic route
const servicesData: Record<string, { title: string; subtitle: string; benefits: string[]; steps: string[] }> = {
    "cosmetic-dentistry": {
        title: "Cosmetic Dentistry",
        subtitle: "Artistry meets dentistry for your perfect smile.",
        benefits: ["Boost self-confidence", "Customized to your facial structure", "Long-lasting, stain-resistant materials"],
        steps: ["Initial Consultation & Digital Smile Design", "Preparation & 3D Scanning", "Temporary Restorations (if applicable)", "Final Delivery & Polish"]
    },
    "orthodontics": {
        title: "Invisalign & Orthodontics",
        subtitle: "Clear, comfortable aligners for optimal functional and aesthetic results.",
        benefits: ["Virtually invisible", "Removable for easy cleaning", "No dietary restrictions"],
        steps: ["3D iTero Scan", "Custom Aligner Fabrication", "Progress Checkups Every 6 Weeks", "Retainer Delivery"]
    },
    "dental-implants": {
        title: "Dental Implants",
        subtitle: "The gold standard for permanent tooth replacement.",
        benefits: ["Functions like a natural tooth", "Prevents bone loss", "No impact on adjacent healthy teeth"],
        steps: ["CBCT 3D Scan & Virtual Planning", "Surgical Placement", "Osseointegration Period (Healing)", "Final Crown Placement"]
    },
    "general-dentistry": {
        title: "General Dentistry",
        subtitle: "Proactive care to maintain your systemic and oral health.",
        benefits: ["Prevents costly future issues", "Diagnoses problems early", "Maintains optimal gum health"],
        steps: ["Comprehensive Examination & X-rays", "Professional Cleaning", "Fluoride Treatment", "Personalized Home Care Plan"]
    },
    "emergency-care": {
        title: "Emergency Dental Care",
        subtitle: "Immediate, pain-free relief when you need it most.",
        benefits: ["Same-day appointments", "Rapid pain relief", "Preservation of natural teeth"],
        steps: ["Immediate Triage", "Palliative Care & Pain Management", "Definitive Treatment"]
    },
    "pediatric-dentistry": {
        title: "Pediatric Dentistry",
        subtitle: "Gentle, stress-free care for growing smiles.",
        benefits: ["Creates positive dental associations", "Monitors growth and development", "Prevents early childhood caries"],
        steps: ["Fun & Gentle Introduction", "Preventative Cleaning & Sealants", "Parental Education", "Fluoride Varnish"]
    }
};

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-20 md:pt-32 md:pb-32">
                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{service.title}</h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                            {service.subtitle}
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/book-appointment">Book a Consultation</Link>
                        </Button>
                    </div>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Key Benefits</h2>
                            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex gap-4">
                                            <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                                            <span className="text-lg">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">The Treatment Process</h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                {service.steps.map((step, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {i + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-border/50 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                                            <h4 className="font-semibold text-lg">{step}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/50">
                <Container className="max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Treatment FAQ</h2>
                    </div>
                    <Accordion
                        items={[
                            {
                                title: `Is the ${service.title} procedure painful?`,
                                content: "Not at all. We utilize profound local anesthesia and offer various sedation options to ensure you are entirely comfortable and relaxed throughout your visit."
                            },
                            {
                                title: "How long is the recovery period?",
                                content: "Recovery varies by individual and the specific extent of the procedure. For most non-surgical treatments, you can return to normal activities immediately. For surgical procedures, we typically recommend resting for 24-48 hours."
                            },
                            {
                                title: "Does insurance cover this?",
                                content: "Coverage depends heavily on your specific plan and whether the procedure is deemed medically necessary or cosmetic. Our treatment coordinators will verify your benefits and explain exactly what is covered before we begin."
                            }
                        ]}
                    />
                </Container>
            </Section>

            <section className="bg-primary text-primary-foreground py-16">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Have questions about {service.title}?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="secondary" className="h-14" asChild>
                            <Link href="/book-appointment">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Consultation
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14" asChild>
                            <Link href="/contact">
                                <Phone className="mr-2 h-5 w-5" />
                                Contact Our Team
                            </Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
