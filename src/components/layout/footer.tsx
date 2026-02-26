import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Lumina<span className="text-secondary">Dental</span>
                            </span>
                        </Link>
                        <p className="text-primary-foreground/70 max-w-sm">
                            Premium dental care tailored to your unique smile. We combine advanced technology with a compassionate approach.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/before-after" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Smile Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/cosmetic-dentistry" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Cosmetic Dentistry
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/orthodontics" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Orthodontics
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/general-dentistry" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    General Dentistry
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/dental-implants" className="text-primary-foreground/80 hover:text-white transition-colors">
                                    Dental Implants
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-3 text-primary-foreground/80">
                            <li>123 Premium Medical Dr.</li>
                            <li>Suite 200, Health City</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Email: hello@luminadental.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-primary-foreground/60">
                        &copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-primary-foreground/60">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
