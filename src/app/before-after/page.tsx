import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function BeforeAfter() {
    const cases = [
        {
            title: "Full Arch Restoration",
            category: "Implants",
            description: "Complete upper arch rehabilitation using implant-supported porcelain bridge.",
            beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
            afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Porcelain Veneers",
            category: "Cosmetic",
            description: "8 custom porcelain veneers to correct discoloration and close diastemas.",
            beforeImg: "https://images.unsplash.com/photo-1590650949437-0238e83ca545?q=80&w=800&auto=format&fit=crop",
            afterImg: "https://images.unsplash.com/photo-1610448109338-2ce16474df61?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Invisalign Treatment",
            category: "Orthodontics",
            description: "14-month clear aligner therapy to resolve severe crowding.",
            beforeImg: "https://images.unsplash.com/photo-1598444390076-24eb14db90ea?q=80&w=800&auto=format&fit=crop",
            afterImg: "https://images.unsplash.com/photo-1579403164917-7e61e6cc475d?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-20 md:pt-32 md:pb-32">
                <Container className="relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Smile <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformations</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                        Real results from actual Lumina Dental patients. See the difference our premium care makes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Button variant="secondary" size="sm" className="rounded-full">All Cases</Button>
                        <Button variant="outline" size="sm" className="rounded-full">Cosmetic</Button>
                        <Button variant="outline" size="sm" className="rounded-full">Implants</Button>
                        <Button variant="outline" size="sm" className="rounded-full">Orthodontics</Button>
                    </div>
                </Container>
            </section>

            <Section className="bg-white">
                <Container>
                    <div className="space-y-20">
                        {cases.map((c, i) => (
                            <div key={i} className="flex flex-col lg:flex-row gap-8 items-center border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm bg-muted/10">
                                <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                                            <Image src={c.beforeImg} alt="Before" fill className="object-cover grayscale" />
                                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">Before</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                                            <Image src={c.afterImg} alt="After" fill className="object-cover" />
                                            <div className="absolute top-4 left-4 bg-secondary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">After</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/3 space-y-4">
                                    <div className="text-sm font-semibold tracking-wider text-secondary uppercase">{c.category}</div>
                                    <h3 className="text-2xl font-bold text-primary">{c.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {c.description}
                                    </p>
                                    <Button variant="outline" className="mt-4" asChild>
                                        <Link href="/book-appointment">Get Similar Results</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
