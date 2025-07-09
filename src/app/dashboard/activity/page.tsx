import { ActivityLogger } from "@/components/activity/activity-logger";
import { ListChecks } from "lucide-react";

export default function ActivityPage() {
  return (
    <div className="space-y-8">
       <div className="relative overflow-hidden rounded-2xl p-4">
            <ListChecks className="absolute -top-8 -left-8 size-32 text-muted/50 opacity-20" />
            <div className="relative z-10">
                <h1 className="text-3xl font-bold">Activity Log</h1>
                <p className="text-muted-foreground">Log your event attendance and task completions.</p>
            </div>
        </div>
        <ActivityLogger />
    </div>
  );
}
