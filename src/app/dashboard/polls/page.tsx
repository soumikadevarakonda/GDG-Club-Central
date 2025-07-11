"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, PlusCircle } from "lucide-react";
import { PollCard, type Poll } from "@/components/polls/poll-card";
import { CreatePollForm } from "@/components/polls/create-poll-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialPolls: Poll[] = [
  {
    question: "Which programming language are you most excited about in 2024?",
    options: ["Rust", "Zig", "Mojo", "TypeScript"],
  },
  {
    question: "What should be our next workshop topic?",
    options: [
      "Advanced React Patterns",
      "Intro to Docker",
      "UI/UX Design Fundamentals",
      "Public Speaking",
    ],
  },
  {
    question: "Best time for weekly meetups?",
    options: ["Monday 7 PM", "Wednesday 6 PM", "Friday 5 PM", "Saturday 11 AM"],
  },
  {
    question: "Favorite cloud platform?",
    options: ["Google Cloud", "AWS", "Azure", "Firebase"],
  },
];

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>(initialPolls);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddPoll = (newPoll: Poll) => {
    setPolls((prevPolls) => [newPoll, ...prevPolls]);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="relative flex items-center justify-between overflow-hidden rounded-2xl p-4">
        <BarChart3 className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Polls</h1>
          <p className="text-muted-foreground">
            Make your voice heard and see what other members think.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Poll
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>Create a New Poll</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new poll for the
                community.
              </DialogDescription>
            </DialogHeader>
            <CreatePollForm onSubmit={handleAddPoll} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {polls.map((poll, index) => (
          <PollCard key={index} question={poll.question} options={poll.options} />
        ))}
      </div>
    </div>
  );
}
