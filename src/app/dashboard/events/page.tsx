
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, PlusCircle } from "lucide-react";
import { EventCard } from "@/components/events/event-card";
import { CreateEventForm, type Event } from "@/components/events/create-event-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialEvents: Event[] = [
  {
    title: "Summer Tech Fest 2024",
    date: "August 15, 2024",
    location: "Google Campus, Hyderabad, India",
    description:
      "Our biggest event of the year! Join us for a full day of tech talks, workshops, and networking opportunities with industry experts.",
    image: "https://images.unsplash.com/photo-1626287935075-3275d2d9025e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D", // Flutter-like dev UI
    dataAiHint: "tech conference",
  },
  {
    title: "AI/ML Workshop",
    date: "July 28, 2024",
    location: "Virtual / Google Meet",
    description:
      "A hands-on workshop covering the fundamentals of machine learning with TensorFlow. No prior experience required.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D", // AI/ML code on screen
    dataAiHint: "laptop code",
  },
  {
    title: "Flutter Forward Extended",
    date: "September 5, 2024",
    location: "GDG, KL University",
    description:
      "Catch up on the latest announcements from Flutter Forward and see live demos from local developers.",
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    dataAiHint: "mobile phone apps",
  },
  {
    title: "Web Performance Deep Dive",
    date: "September 20, 2024",
    location: "Online",
    description:
      "Learn how to optimize your web applications for speed and a better user experience with Core Web Vitals.",
    image: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2fGVufDB8fDB8fHww", // web vitals/dashboard
    dataAiHint: "website analytics",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [newEvent, ...prevEvents]);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative flex items-center justify-between overflow-hidden rounded-2xl p-4">
        <CalendarDays className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">
            Check out our upcoming events and meetups.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a New Event</DialogTitle>
              <DialogDescription>
                Fill in the details below to add a new event to the calendar.
              </DialogDescription>
            </DialogHeader>
            <CreateEventForm onSubmit={handleAddEvent} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
