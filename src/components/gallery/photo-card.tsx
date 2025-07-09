import Image from "next/image";

interface PhotoCardProps {
    src: string;
    alt: string;
    dataAiHint?: string;
}

export function PhotoCard({ src, alt, dataAiHint }: PhotoCardProps) {
    return (
        <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image 
                src={src} 
                alt={alt} 
                fill 
                className="object-cover transition-transform group-hover:scale-105" 
                data-ai-hint={dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm font-medium">{alt}</p>
            </div>
        </div>
    );
}
