import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { EventCard } from "@/components/events/event-card";

const mockEvents = [
    {
        title: "Summer Tech Fest 2024",
        date: "August 15, 2024",
        location: "Google Campus, Mountain View",
        description: "Our biggest event of the year! Join us for a full day of tech talks, workshops, and networking opportunities with industry experts.",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "tech conference",
    },
    {
        title: "AI/ML Workshop",
        date: "July 28, 2024",
        location: "Virtual / Google Meet",
        description: "A hands-on workshop covering the fundamentals of machine learning with TensorFlow. No prior experience required.",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "laptop code",
    },
    {
        title: "Flutter Forward Extended",
        date: "September 5, 2024",
        location: "Community Hub, Downtown",
        description: "Catch up on the latest announcements from Flutter Forward and see live demos from local developers.",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "mobile phone apps",
    },
     {
        title: "Web Performance Deep Dive",
        date: "September 20, 2024",
        location: "Online",
        description: "Learn how to optimize your web applications for speed and a better user experience with Core Web Vitals.",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "website analytics",
    }
];


export default function EventsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Events</h1>
                    <p className="text-muted-foreground">Check out our upcoming events and meetups.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockEvents.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>
        </div>
    );
}
