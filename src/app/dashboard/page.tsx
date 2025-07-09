import { StatCard } from "@/components/dashboard/stat-card";
import { EventCard } from "@/components/events/event-card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, FolderKanban, TrendingUp } from "lucide-react";
import { HeroBanner } from "@/components/dashboard/hero-banner";

const recentActivities = [
  { name: "Eva Green", avatar: "https://placehold.co/40x40.png", hint: "woman face", action: "uploaded a new resource:", item: "Advanced TypeScript Guide", time: "2h ago" },
  { name: "John P.", avatar: "https://placehold.co/40x40.png", hint: "man face", action: "RSVP'd to event:", item: "Summer Tech Fest 2024", time: "5h ago" },
  { name: "Maria Garcia", avatar: "https://placehold.co/40x40.png", hint: "woman smiling", action: "logged an activity:", item: "Mentored new members", time: "1d ago" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <HeroBanner />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Members" value={128} icon={<Users className="h-5 w-5 text-muted-foreground" />} />
        <StatCard title="Upcoming Events" value={4} icon={<Calendar className="h-5 w-5 text-muted-foreground" />} />
        <StatCard title="Shared Resources" value={76} icon={<FolderKanban className="h-5 w-5 text-muted-foreground" />} />
        <StatCard title="Member Engagement" value={12} icon={<TrendingUp className="h-5 w-5 text-muted-foreground" />} description="since last month" prefix="+" suffix="%" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss out on what's next!</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
                <EventCard 
                    title="Summer Tech Fest 2024"
                    date="August 15, 2024"
                    location="Google Campus, Mountain View"
                    description="Our biggest event of the year! Join us for a full day of tech talks, workshops, and networking."
                    image="https://placehold.co/600x400.png"
                    dataAiHint="tech conference"
                />
                <EventCard 
                    title="AI/ML Workshop"
                    date="July 28, 2024"
                    location="Virtual / Google Meet"
                    description="A hands-on workshop covering the fundamentals of machine learning with TensorFlow."
                    image="https://placehold.co/600x400.png"
                    dataAiHint="laptop code"
                />
            </CardContent>
          </Card>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>See what your fellow members are up to.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={activity.avatar} data-ai-hint={activity.hint} />
                                    <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <p><span className="font-semibold">{activity.name}</span> {activity.action}</p>
                                    <p className="font-medium text-primary">{activity.item}</p>
                                </div>
                                <time className="ml-auto text-xs text-muted-foreground">{activity.time}</time>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
