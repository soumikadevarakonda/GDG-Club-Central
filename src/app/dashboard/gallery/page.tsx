"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhotoCard, type Photo } from "@/components/gallery/photo-card";
import { GalleryVertical, PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadPhotoForm } from "@/components/gallery/upload-photo-form";
import { mockImages } from "@/lib/data/gallery";

export default function GalleryPage() {
  const [images, setImages] = useState<Photo[]>(mockImages);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUploadPhoto = (newPhoto: Photo) => {
    setImages((prevImages) => [newPhoto, ...prevImages]);
    setIsDialogOpen(false);
  };

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
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload Photo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload a New Photo</DialogTitle>
              <DialogDescription>
                Share a photo from a recent event with the community.
              </DialogDescription>
            </DialogHeader>
            <UploadPhotoForm onSubmit={handleUploadPhoto} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <PhotoCard key={`${image.src}-${index}`} {...image} />
        ))}
      </div>
    </div>
  );
}
