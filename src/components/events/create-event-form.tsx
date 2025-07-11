
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, PlusCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export interface Event {
    title: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    dataAiHint?: string;
}

interface CreateEventFormProps {
    onSubmit: (event: Event) => void;
}

export function CreateEventForm({ onSubmit }: CreateEventFormProps) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !date || !location || !description) {
            toast({
                title: "Missing fields",
                description: "Please fill out all the required fields.",
                variant: "destructive"
            });
            return;
        }

        const newEvent: Event = {
            title,
            date: format(date, "MMMM d, yyyy"),
            location,
            description,
            image: `https://placehold.co/600x400.png`,
            dataAiHint: "new event"
        };

        onSubmit(newEvent);

        toast({
            title: "Event Created!",
            description: `The event "${title}" has been successfully created.`
        });
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Summer Tech Fest" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Google Campus" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A brief summary of the event." required />
            </div>
            <Button type="submit" className="w-full mt-2">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Event
            </Button>
        </form>
    );
}
