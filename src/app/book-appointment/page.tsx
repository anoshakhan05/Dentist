"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@resolvers/zod";
import * as z from "zod";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PhoneCall, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    service: z.string().min(1, "Please select a service"),
    date: z.string().min(1, "Please select a preferred date"),
    message: z.string().optional()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookAppointment() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema)
    });

    const onSubmit = async (data: BookingFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Booking request:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <>
            <section className="relative overflow-hidden bg-primary/5 pt-24 pb-12 md:pt-32 md:pb-16 text-center">
                <Container className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Request an Appointment
                    </h1>
                    <p className="text-lg text-foreground/70">
                        Take the first step towards a healthier, brighter smile. We'll get back to you within 2 business hours to confirm your time.
                    </p>
                </Container>
            </section>

            <Section className="bg-white">
                <Container className="max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Form Section */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl p-6 md:p-10 border border-border/50 shadow-sm">
                                {isSuccess ? (
                                    <div className="text-center py-16">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-6">
                                            <CheckCircle2 className="h-10 w-10 text-secondary" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary mb-4">Request Sent Successfully!</h2>
                                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                                            Thank you for choosing Lumina Dental. One of our scheduling coordinators will contact you shortly to confirm your exact appointment time.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                                            Make Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">Full Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    {...register("fullName")}
                                                    className={cn(
                                                        "w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all",
                                                        errors.fullName ? "border-red-500" : "border-border"
                                                    )}
                                                    placeholder="John Doe"
                                                />
                                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">Phone Number <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    {...register("phone")}
                                                    className={cn(
                                                        "w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all",
                                                        errors.phone ? "border-red-500" : "border-border"
                                                    )}
                                                    placeholder="(555) 123-4567"
                                                />
                                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">Email Address <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    {...register("email")}
                                                    className={cn(
                                                        "w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all",
                                                        errors.email ? "border-red-500" : "border-border"
                                                    )}
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">Treatment Interest <span className="text-red-500">*</span></label>
                                                <select
                                                    {...register("service")}
                                                    className={cn(
                                                        "w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all appearance-none",
                                                        errors.service ? "border-red-500" : "border-border"
                                                    )}
                                                >
                                                    <option value="">Select a service...</option>
                                                    <option value="general">General Exam & Cleaning</option>
                                                    <option value="cosmetic">Cosmetic Consultation (Veneers/Whitening)</option>
                                                    <option value="implant">Dental Implants</option>
                                                    <option value="invisalign">Invisalign / Ortho</option>
                                                    <option value="emergency">Emergency Care</option>
                                                    <option value="other">Other / Not Sure</option>
                                                </select>
                                                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Preferred Date <span className="text-red-500">*</span></label>
                                            <input
                                                type="date"
                                                {...register("date")}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all",
                                                    errors.date ? "border-red-500" : "border-border"
                                                )}
                                            />
                                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Additional Notes</label>
                                            <textarea
                                                {...register("message")}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                                                placeholder="Please share any specific concerns or questions..."
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full text-lg h-14 bg-primary hover:bg-primary/90 mt-4"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Submitting Request..." : "Request Appointment"}
                                        </Button>
                                        <p className="text-xs text-center text-muted-foreground mt-4">
                                            By submitting this form, you agree to our privacy policy. Your information is secure and HIPAA compliant.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Sidebar / Emergency */}
                        <div className="space-y-8">
                            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="h-6 w-6 text-accent" />
                                    <h3 className="text-xl font-bold text-white">Dental Emergency?</h3>
                                </div>
                                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                                    Experiencing intense pain or have a broken tooth? Don't wait. We offer same-day emergency appointments.
                                </p>
                                <Button variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                    <Link href="tel:+15551234567">
                                        <PhoneCall className="mr-2 h-4 w-4" />
                                        Call Now: (555) 123-4567
                                    </Link>
                                </Button>
                            </div>

                            <div className="bg-muted/30 border border-border/50 rounded-3xl p-8">
                                <h3 className="text-xl font-bold text-primary mb-6">Clinic Hours</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Monday - Thursday</span>
                                        <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Friday</span>
                                        <span className="font-medium text-foreground">8:00 AM - 4:00 PM</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-medium text-foreground">By Appointment</span>
                                    </li>
                                    <li className="flex justify-between pb-2">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="font-medium text-foreground">Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Container>
            </Section>
        </>
    );
}
