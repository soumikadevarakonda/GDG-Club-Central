import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { PollCard } from "@/components/polls/poll-card";

export default function PollsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Polls</h1>
          <p className="text-muted-foreground">
            Make your voice heard and see what other members think.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Poll
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PollCard />
        <PollCard
          question="What should be our next workshop topic?"
          options={[
            "Advanced React Patterns",
            "Intro to Docker",
            "UI/UX Design Fundamentals",
            "Public Speaking",
          ]}
        />
        <PollCard
          question="Best time for weekly meetups?"
          options={[
            "Monday 7 PM",
            "Wednesday 6 PM",
            "Friday 5 PM",
            "Saturday 11 AM",
          ]}
        />
         <PollCard
          question="Favorite cloud platform?"
          options={[
            "Google Cloud",
            "AWS",
            "Azure",
            "Firebase",
          ]}
        />
      </div>
    </div>
  );
}
