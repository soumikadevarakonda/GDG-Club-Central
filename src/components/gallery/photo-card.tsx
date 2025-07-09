import Image from "next/image";

interface PhotoCardProps {
    src: string;
    alt: string;
    dataAiHint?: string;
}

export function PhotoCard({ src, alt, dataAiHint }: PhotoCardProps) {
    return (
        <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <Image 
                src={src} 
                alt={alt} 
                fill 
                className="object-cover transition-transform group-hover:scale-110" 
                data-ai-hint={dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm font-medium">{alt}</p>
            </div>
        </div>
    );
}
