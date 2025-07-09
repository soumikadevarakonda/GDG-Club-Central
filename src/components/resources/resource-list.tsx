import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const mockResources = [
  {
    title: "The Ultimate Guide to React Server Components",
    link: "#",
    category: "Frontend",
    tags: ["React", "Next.js", "Server Components", "Performance"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "code programming",
  },
  {
    title: "Mastering TypeScript for Enterprise Applications",
    link: "#",
    category: "Backend",
    tags: ["TypeScript", "Node.js", "Architecture"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "abstract geometric",
  },
  {
    title: "A Practical Introduction to Docker and Kubernetes",
    link: "#",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "CI/CD", "Infrastructure"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "shipping containers",
  },
  {
    title: "Designing for Accessibility: A Web Developer's Guide",
    link: "#",
    category: "Design",
    tags: ["Accessibility", "UI/UX", "Web Dev"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "user interface",
  },
];


export function ResourceList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Shared Resources</CardTitle>
                <CardDescription>Browse materials uploaded by club members.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {mockResources.map((resource, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <Image src={resource.image} alt={resource.title} width={120} height={80} className="rounded-md object-cover aspect-[3/2]" data-ai-hint={resource.dataAiHint} />
                        <div className="flex-1">
                            <Link href={resource.link} target="_blank" className="group font-medium text-base hover:text-primary transition-colors">
                                <h3 className="flex items-center">
                                    {resource.title} <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </Link>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="default" className="capitalize bg-primary/80">{resource.category}</Badge>
                                {resource.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
