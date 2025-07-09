import { ResourceUploadForm } from "@/components/resources/resource-upload-form";
import { ResourceList } from "@/components/resources/resource-list";

export default function ResourcesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Resource Hub</h1>
                <p className="text-muted-foreground">Find and share learning materials with the community.</p>
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
