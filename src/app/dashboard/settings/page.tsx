import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
       <div className="relative overflow-hidden rounded-2xl p-4">
            <Settings className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
            <div className="relative z-10">
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings.</p>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Update your profile information.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Settings form will be here.</p>
            </CardContent>
        </Card>
    </div>
  );
}
