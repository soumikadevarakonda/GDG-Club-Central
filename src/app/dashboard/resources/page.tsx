import { ResourceUploadForm } from "@/components/resources/resource-upload-form";
import { ResourceList } from "@/components/resources/resource-list";
import { BookCopy } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl p-4">
                <BookCopy className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold">Resource Hub</h1>
                    <p className="text-muted-foreground">Find and share learning materials with the community.</p>
                </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <ResourceUploadForm />
                </div>
                <div className="lg:col-span-2">
                    <ResourceList />
                </div>
            </div>
        </div>
    );
}
