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
                <CardHeader className="p-4 md:p-6 pb-2 md:pb-6">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-secondary transition-colors text-base md:text-xl leading-tight">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-4 md:p-6 pt-0 md:pt-0">
                    <CardDescription className="text-xs md:text-base mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                        {description}
                    </CardDescription>
                    <div className="flex items-center text-xs md:text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                        Learn more
                        <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
