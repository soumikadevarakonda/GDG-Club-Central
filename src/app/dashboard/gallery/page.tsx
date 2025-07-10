import { Button } from "@/components/ui/button";
import { PhotoCard } from "@/components/gallery/photo-card";
import { GalleryVertical, PlusCircle } from "lucide-react";

const mockImages = [
  { src: "https://drive.google.com/uc?export=view&id=18wt61VOQ21RBWr0I30JsbXFC-kulranu", alt: "Team photo from the 2024 Hackathon", dataAiHint: "group people" },
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
      <div className="relative flex items-center justify-between overflow-hidden rounded-2xl p-4">
        <GalleryVertical className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
        <div className="relative z-10">
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
