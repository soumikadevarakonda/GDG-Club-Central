"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface PollCardProps {
    question?: string;
    options?: string[];
}

const defaultQuestion = "Which programming language are you most excited about in 2024?";
const defaultOptions = ["Rust", "Zig", "Mojo", "TypeScript"];

export function PollCard({ question = defaultQuestion, options = defaultOptions }: PollCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);
    
    const initialVotes = useMemo(() => {
        const generatedVotes: Record<string, number> = {};
        for (const option of options) {
            generatedVotes[option] = Math.floor(Math.random() * 50) + 5;
        }
        return generatedVotes;
    }, [options]);

    const [votes, setVotes] = useState<Record<string, number>>({});

    useEffect(() => {
      setVotes(initialVotes);
    }, [initialVotes]);


    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

    const handleVote = () => {
        if (selectedOption) {
            setVotes(prevVotes => ({
                ...prevVotes,
                [selectedOption]: (prevVotes[selectedOption] || 0) + 1
            }));
            setHasVoted(true);
        }
    };

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>{question}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                {hasVoted ? (
                    <div className="space-y-4">
                        {options.map((option) => {
                            const voteCount = votes[option] || 0;
                            const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
                            return (
                                <div key={option} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <p className="font-medium">{option}</p>
                                        <p className="text-muted-foreground">{voteCount} votes ({percentage.toFixed(0)}%)</p>
                                    </div>
                                    <Progress value={percentage} aria-label={`${option}: ${percentage.toFixed(0)}%`} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <RadioGroup onValueChange={setSelectedOption}>
                        <div className="space-y-3">
                            {options.map((option) => (
                                <div key={option} className="flex items-center space-x-2 rounded-md border p-3 hover:border-primary transition-colors has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent/20">
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
