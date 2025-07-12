import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LifeBuoy } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="space-y-8">
       <div className="relative overflow-hidden rounded-2xl p-4">
            <LifeBuoy className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
            <div className="relative z-10">
                <h1 className="text-3xl font-bold">Support</h1>
                <p className="text-muted-foreground">Get help and support.</p>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Having an issue? We're here to help.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Support form will be here.</p>
            </CardContent>
        </Card>
    </div>
  );
}
