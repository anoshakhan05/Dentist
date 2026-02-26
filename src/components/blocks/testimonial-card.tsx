import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    treatment: string;
    quote: string;
    rating?: number;
}

export function TestimonialCard({ name, treatment, quote, rating = 5 }: TestimonialCardProps) {
    return (
        <Card className="h-full">
            <CardHeader className="pb-4">
                <div className="flex gap-1 mb-2">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                    &quot;{quote}&quot;
                </blockquote>
                <div>
                    <div className="font-semibold text-foreground">{name}</div>
                    <div className="text-sm text-muted-foreground">{treatment}</div>
                </div>
            </CardContent>
        </Card>
    );
}
