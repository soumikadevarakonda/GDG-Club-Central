"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Ticket } from "lucide-react";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    dataAiHint?: string;
}


export function EventCard({ title, date, location, description, image, dataAiHint }: EventCardProps) {
    return (
        <Card className="flex flex-col hover:scale-[1.02]">
            {image && (
                 <div className="aspect-[16/9] relative">
                    <Image src={image} alt={title} fill className="rounded-t-2xl object-cover" data-ai-hint={dataAiHint}/>
                 </div>
            )}
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground pt-1">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{location}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <Ticket className="mr-2 h-4 w-4" />
                    RSVP Now
                </Button>
            </CardFooter>
        </Card>
    );
}
