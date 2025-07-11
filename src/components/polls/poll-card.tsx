"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PollResultsChart } from "./poll-results-chart";

export interface Poll {
    question: string;
    options: string[];
}

interface PollCardProps {
    question: string;
    options: string[];
}

export function PollCard({ question, options }: PollCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [votes, setVotes] = useState<{ name: string; votes: number }[]>([]);

    useEffect(() => {
        // Generate initial votes on the client-side to prevent hydration errors.
        const generatedVotes = options.map(option => ({
            name: option,
            votes: Math.floor(Math.random() * 50) + 5
        }));
        setVotes(generatedVotes);
    }, [options]);

    const handleVote = () => {
        if (selectedOption) {
            setVotes(prevVotes => 
                prevVotes.map(v => 
                    v.name === selectedOption ? { ...v, votes: v.votes + 1 } : v
                )
            );
            setHasVoted(true);
        }
    };

    return (
        <Card className="flex flex-col hover:scale-[1.02]">
            <CardHeader>
                <CardTitle>{question}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                {hasVoted ? (
                    <div className="h-48">
                        {votes.length > 0 && <PollResultsChart data={votes} />}
                    </div>
                ) : (
                    <RadioGroup onValueChange={setSelectedOption}>
                        <div className="space-y-3">
                            {options.map((option) => (
                                <div key={option} className="flex items-center space-x-2 rounded-md border p-3 hover:border-primary transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent">
                                    <RadioGroupItem value={option} id={`${question}-${option}`} />
                                    <Label htmlFor={`${question}-${option}`} className="flex-1 cursor-pointer">{option}</Label>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>
                )}
            </CardContent>
            <CardFooter>
                {hasVoted ? (
                    <Button disabled variant="outline" className="w-full">Thank you for voting!</Button>
                ) : (
                    <Button onClick={handleVote} disabled={!selectedOption} className="w-full">Vote</Button>
                )}
            </CardFooter>
        </Card>
    );
}
