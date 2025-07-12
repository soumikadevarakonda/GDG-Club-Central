"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UploadCloud, Image as ImageIcon } from "lucide-react";
import type { Photo } from "./photo-card";

interface UploadPhotoFormProps {
    onSubmit: (photo: Photo) => void;
}

export function UploadPhotoForm({ onSubmit }: UploadPhotoFormProps) {
    const [alt, setAlt] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const { toast } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !alt.trim()) {
            toast({
                title: "Missing Information",
                description: "Please select a photo and provide a description.",
                variant: "destructive",
            });
            return;
        }

        if (previewUrl) {
            onSubmit({
                src: previewUrl,
                alt,
                dataAiHint: "new photo",
            });

            toast({
                title: "Photo Uploaded!",
                description: "Your photo has been added to the gallery.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="space-y-2">
                <Label htmlFor="photo-file">Photo</Label>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="photo-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                        {previewUrl ? (
                            <Image src={previewUrl} alt="Preview" width={192} height={192} className="object-contain h-full p-2" />
                        ) : (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <ImageIcon className="w-8 h-8 mb-4 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or GIF</p>
                            </div>
                        )}
                        <Input id="photo-file" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                    </label>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="alt">Description</Label>
                <Input
                    id="alt"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                    placeholder="e.g., Team photo at the hackathon"
                    required
                />
            </div>
            <Button type="submit" className="w-full mt-2">
                <UploadCloud className="mr-2 h-4 w-4" />
                Upload Photo
            </Button>
        </form>
    );
}
