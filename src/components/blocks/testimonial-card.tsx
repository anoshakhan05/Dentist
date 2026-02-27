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
        <Card className="h-full flex flex-col justify-between p-4 md:p-6">
            <CardHeader className="p-0 pb-3 md:pb-4">
                <div className="flex gap-1 mb-1 md:mb-2">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <blockquote className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4 md:mb-6 italic line-clamp-4 md:line-clamp-none">
                    &quot;{quote}&quot;
                </blockquote>
                <div>
                    <div className="font-semibold text-sm md:text-base text-foreground">{name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{treatment}</div>
                </div>
            </CardContent>
        </Card>
    );
}
