import { ResourceUploadForm } from "./resource-upload-form";
import { ResourceList } from "./resource-list";

export function ResourceHub() {
    return (
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
                <ResourceUploadForm />
            </div>
            <div className="lg:col-span-2">
                <ResourceList />
            </div>
        </div>
    );
}
