import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { ServiceCard } from "@/components/blocks/service-card";
import { TestimonialCard } from "@/components/blocks/testimonial-card";
import { Accordion } from "@/components/ui/accordion";
import {
  ArrowRight, Shield, Clock, Heart, Star,
  Sparkles, CheckCircle2, Phone, Calendar,
  Activity, Smile
} from "lucide-react";
import { Hero3D } from "@/components/blocks/hero-3d";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629853313982-f08a5c378e9b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          {/* Subtle 3D Glass Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-3xl relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-border mt-8 mb-6 shadow-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground/80">Premium Dental Care in Health City</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
                Precision Care for a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Confident Smile.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
                Experience world-class cosmetic and general dentistry in a calming, state-of-the-art environment. We combine advanced 3D technology with a compassionate touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="group h-14 text-lg">
                  <Link href="/book-appointment">
                    Book Your Visit
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 text-lg bg-white/50 backdrop-blur">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 border-t border-border/60 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <div className="text-sm text-muted-foreground">From 500+ Patients</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm font-medium text-foreground/80 mb-1">Years Experience</div>
                  <div className="text-sm text-muted-foreground">Trusted Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Cinematic Animation */}
            <div className="relative w-full h-full lg:block">
              <Hero3D />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Comprehensive Care</h2>
            <p className="text-lg text-muted-foreground">
              From routine cleanings to complete smile makeovers, our premium services are designed around your comfort and health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Transform your smile with porcelain veneers, professional whitening, and aesthetic bonding."
              icon={Sparkles}
              slug="cosmetic-dentistry"
            />
            <ServiceCard
              title="Invisalign & Ortho"
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
              icon={Heart}
              slug="pediatric-dentistry"
            />
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Treatments</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Lumina Difference</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                We've reimagined the dental experience. No more clinical anxiety or rushed appointments. Just expert care in a setting designed for your absolute serenity.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Advanced 3D Technology", desc: "Precision diagnostics and treatment planning using CBCT scanners and digital impressions." },
                  { title: "Pain-Free Philosophy", desc: "Modern anesthetics and sedation options ensure you remain entirely comfortable." },
                  { title: "Bespoke Treatment Plans", desc: "No cookie-cutter solutions. Every plan is tailored to your unique anatomical and aesthetic goals." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Dental Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white text-primary p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm font-medium text-muted-foreground">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Doctor Profile */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse">
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Sarah Jenkins"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-secondary font-semibold tracking-wider uppercase mb-2">Meet Your Specialist</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Dr. Sarah Jenkins, DDS</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of specialized experience in cosmetic and restorative dentistry, Dr. Jenkins combines profound clinical expertise with a keen aesthetic eye.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                &quot;My goal is simple: to provide care so exceptional and comfortable that you look forward to your visits. We don&apos;t just treat teeth; we care for people.&quot;
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="font-medium">DDS from UCLA School of Dentistry</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="font-medium">Fellow, American Academy of Cosmetic Dentistry</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="font-medium">Invisalign Platinum Provider</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/about">Read Full Bio</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Patient Stories</h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Hear from our patients who have experienced the Lumina difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Michael T."
              treatment="Invisalign & Whitening"
              quote="I've always had anxiety about the dentist, but the team here completely changed my perspective. The clinic feels like a spa, and my new smile is incredible!"
              rating={5}
            />
            <TestimonialCard
              name="Elena R."
              treatment="Porcelain Veneers"
              quote="Dr. Jenkins is an absolute artist. She listened to exactly what I wanted and gave me the most natural, stunning veneers. It's truly life-changing."
              rating={5}
            />
            <TestimonialCard
              name="David H."
              treatment="Dental Implants"
              quote="The 3D scanning technology they use made the implant process seamless and painless. Highly professional staff and beautiful, modern facilities."
              rating={5}
            />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion
            items={[
              {
                title: "Are you accepting new patients?",
                content: "Yes, we are currently welcoming new patients to our practice. We strive to accommodate initial consultations within a week of your inquiry."
              },
              {
                title: "Do you offer financing options?",
                content: "Absolutely. We believe premium dental care should be accessible. We offer flexible in-house financing plans and work with third-party providers like CareCredit to ensure your treatment fits your budget."
              },
              {
                title: "What safety protocols do you follow?",
                content: "We exceed standard OSHA and CDC guidelines. Our clinic features hospital-grade air filtration in every operatory, strict medical-grade sterilization procedures, and single-use protective barriers."
              },
              {
                title: "I have dental anxiety. How can you help?",
                content: "Your comfort is our priority. We offer a soothing environment, noise-canceling headphones, comfortable neck pillows, and various sedation options ranging from laughing gas (nitrous oxide) to oral conscious sedation."
              }
            ]}
          />
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-cebb47ac1136?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <Container className="relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready for Your New Smile?</h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule your comprehensive consultation today and take the first step towards exceptional oral health and confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-white/90 text-lg h-14" asChild>
              <Link href="/book-appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Online
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14" asChild>
              <Link href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" />
                (555) 123-4567
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
