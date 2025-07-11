"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, Trash2 } from "lucide-react";
import type { Poll } from "./poll-card";

interface CreatePollFormProps {
    onSubmit: (poll: Poll) => void;
}

export function CreatePollForm({ onSubmit }: CreatePollFormProps) {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '']);
    const { toast } = useToast();

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        if (options.length < 10) {
            setOptions([...options, '']);
        } else {
             toast({
                title: "Option limit reached",
                description: "You can add a maximum of 10 options.",
                variant: "destructive",
            });
        }
    };

    const removeOption = (index: number) => {
        if (options.length > 2) {
            const newOptions = options.filter((_, i) => i !== index);
            setOptions(newOptions);
        } else {
            toast({
                title: "Minimum options required",
                description: "You need at least 2 options for a poll.",
                variant: "destructive",
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const filteredOptions = options.filter(opt => opt.trim() !== '');

        if (!question.trim() || filteredOptions.length < 2) {
            toast({
                title: "Missing fields",
                description: "Please provide a question and at least two options.",
                variant: "destructive",
            });
            return;
        }

        onSubmit({
            question,
            options: filteredOptions,
        });

         toast({
            title: "Poll Created!",
            description: "Your poll has been successfully created.",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="space-y-2">
                <Label htmlFor="question">Poll Question</Label>
                <Input
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g., What's our next t-shirt color?"
                    required
                />
            </div>

            <div className="space-y-2">
                 <Label>Options</Label>
                 <div className="space-y-2">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Input
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={`Option ${index + 1}`}
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeOption(index)}
                                disabled={options.length <= 2}
                                className="text-muted-foreground hover:text-destructive"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                 </div>
            </div>

            <Button
                type="button"
                variant="outline"
                onClick={addOption}
                disabled={options.length >= 10}
            >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Option
            </Button>
            
            <Button type="submit" className="w-full mt-2">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Poll
            </Button>
        </form>
    );
}
