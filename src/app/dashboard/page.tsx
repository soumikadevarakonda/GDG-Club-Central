import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceHub } from "@/components/resources/resource-hub";
import { ActivityLogger } from "@/components/activity/activity-logger";
import { PollCard } from "@/components/polls/poll-card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h2>
      </div>
      <Tabs defaultValue="resources" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="resources">Resource Hub</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="polls">Polls</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-4">
          <ResourceHub />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <ActivityLogger />
        </TabsContent>
        <TabsContent value="polls" className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Community Polls</CardTitle>
                    <CardDescription>Make your voice heard and see what other members think.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <PollCard />
                    <PollCard 
                        question="What should be our next workshop topic?"
                        options={["Advanced React Patterns", "Intro to Docker", "UI/UX Design Fundamentals", "Public Speaking"]}
                    />
                    <PollCard 
                        question="Best time for weekly meetups?"
                        options={["Monday 7 PM", "Wednesday 6 PM", "Friday 5 PM", "Saturday 11 AM"]}
                    />
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
