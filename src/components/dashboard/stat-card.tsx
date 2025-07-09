"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface StatCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    description?: string;
    prefix?: string;
    suffix?: string;
}

export function StatCard({ title, value, icon: Icon, description, prefix="", suffix="" }: StatCardProps) {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        const animationDuration = 1000;
        const frameRate = 60;
        const totalFrames = animationDuration / (1000 / frameRate);
        const increment = value / totalFrames;

        let currentFrame = 0;
        const timer = setInterval(() => {
            currentFrame++;
            const currentValue = Math.min(value, increment * currentFrame);
            setAnimatedValue(currentValue);

            if (currentValue >= value) {
                clearInterval(timer);
                setAnimatedValue(value);
            }
        }, 1000 / frameRate);

        return () => clearInterval(timer);
    }, [value]);
    
    return (
        <Card className="hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">
                    {prefix}{Math.round(animatedValue)}{suffix}
                </div>
                {description && <p className="text-xs text-muted-foreground">{description}</p>}
            </CardContent>
        </Card>
    );
}
