import { Button } from "@/components/ui/button";
import { PhotoCard } from "@/components/gallery/photo-card";
import { PlusCircle } from "lucide-react";

const mockImages = [
  { src: "https://placehold.co/600x400.png", alt: "Team photo from the 2023 Hackathon", dataAiHint: "group people" },
  { src: "https://placehold.co/400x600.png", alt: "Winning project demo", dataAiHint: "laptop presentation" },
  { src: "https://placehold.co/600x400.png", alt: "Networking session", dataAiHint: "people talking" },
  { src: "https://placehold.co/600x400.png", alt: "Keynote speaker on stage", dataAiHint: "person stage" },
  { src: "https://placehold.co/400x600.png", alt: "Our amazing volunteers", dataAiHint: "team smiling" },
  { src: "https://placehold.co/600x400.png", alt: "Swag table", dataAiHint: "stickers t-shirts" },
  { src: "https://placehold.co/600x400.png", alt: "Audience view", dataAiHint: "audience conference" },
  { src: "https://placehold.co/600x400.png", alt: "Catering and snacks", dataAiHint: "food pizza" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-muted-foreground">
            A collection of photos from our events and meetups.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Upload Photo
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockImages.map((image, index) => (
          <PhotoCard key={index} {...image} />
        ))}
      </div>
    </div>
  );
}
