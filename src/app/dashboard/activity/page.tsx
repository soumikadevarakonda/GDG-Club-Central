import { ActivityLogger } from "@/components/activity/activity-logger";

export default function ActivityPage() {
  return (
    <div className="space-y-8">
       <div>
            <h1 className="text-3xl font-bold">Activity Log</h1>
            <p className="text-muted-foreground">Log your event attendance and task completions.</p>
        </div>
        <ActivityLogger />
    </div>
  );
}
