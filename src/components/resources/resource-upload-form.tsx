"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, X } from "lucide-react";
import { suggestTags, SuggestTagsInput } from "@/ai/flows/suggest-tags";
import { useToast } from "@/hooks/use-toast";

export function ResourceUploadForm() {
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [isSuggesting, setIsSuggesting] = useState(false);
    const { toast } = useToast();

    const handleSuggestTags = async () => {
        if (!title || !abstract) {
            toast({
                title: "Missing Information",
                description: "Please provide a title and abstract to suggest tags.",
                variant: "destructive",
            });
            return;
        }
        setIsSuggesting(true);
        try {
            const input: SuggestTagsInput = { title, abstract };
            const result = await suggestTags(input);
            const newTags = result.tags.filter(tag => !tags.includes(tag));
            setTags(prevTags => [...prevTags, ...newTags]);
        } catch (error) {
            console.error("Failed to suggest tags:", error);
            toast({
                title: "AI Error",
                description: "Could not suggest tags. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSuggesting(false);
        }
    };
    
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission logic
        toast({
            title: "Resource Uploaded",
            description: `${title} has been added to the hub.`,
        });
        setTitle('');
        setAbstract('');
        setLink('');
        setCategory('');
        setTags([]);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>Add a Resource</CardTitle>
                    <CardDescription>Share a learning material with the club.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="e.g., Intro to Next.js" value={title} onChange={e => setTitle(e.target.value)} required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="abstract">Abstract / Description</Label>
                        <Textarea id="abstract" placeholder="A brief summary of the resource." value={abstract} onChange={e => setAbstract(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="link">Link</Label>
                        <Input id="link" type="url" placeholder="https://example.com" value={link} onChange={e => setLink(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={setCategory} value={category}>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="frontend">Frontend</SelectItem>
                                <SelectItem value="backend">Backend</SelectItem>
                                <SelectItem value="devops">DevOps</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="career">Career</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                    <Label className="mb-1 block">Tags</Label>
                    <Button type="button" variant="outline" size="sm" onClick={handleSuggestTags} disabled={isSuggesting}>
                            {isSuggesting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                            Suggest with AI
                        </Button>
                        <div className="flex flex-wrap gap-2 pt-2 min-h-[2.5rem]">
                            {tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="pl-2 pr-1">
                                    {tag}
                                    <button type="button" onClick={() => removeTag(tag)} className="ml-1 rounded-full p-0.5 hover:bg-destructive/20 focus:outline-none focus:bg-destructive/20">
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                     <Button type="submit" className="w-full">Upload Resource</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
