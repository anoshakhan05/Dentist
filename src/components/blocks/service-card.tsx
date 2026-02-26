import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    slug: string;
}

export function ServiceCard({ title, description, icon: Icon, slug }: ServiceCardProps) {
    return (
        <Link href={`/services/${slug}`} className="group block h-full">
            <Card className="h-full flex flex-col hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-secondary transition-colors">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="text-base mb-6">
                        {description}
                    </CardDescription>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
