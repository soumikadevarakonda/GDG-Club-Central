"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, PlusCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const mockActivities = [
    { id: 1, name: "Tech Talk: AI in Web Dev", user: "Soumika Devarakonda", type: "Event Attendance", date: "2024-05-15", status: "Completed", avatar: "https://placehold.co/40x40.png", hint: "woman face" },
    { id: 2, name: "Code Review for Project Alpha", user: "Naisha Srinivas", type: "Task Completion", date: "2024-05-20", status: "Completed", avatar: "https://placehold.co/40x40.png", hint: "woman smiling" },
    { id: 3, name: "Organize Q3 Hackathon", user: "Vijay Atul", type: "Task Completion", date: "2024-06-01", status: "In Progress", avatar: "https://placehold.co/40x40.png", hint: "man face" },
    { id: 4, name: "Attend Flutter Meetup", user: "Saketh Kumar", type: "Event Attendance", date: "2024-06-05", status: "Completed", avatar: "https://placehold.co/40x40.png", hint: "man smiling" },
];

export function ActivityLogger() {
    const [activities, setActivities] = useState(mockActivities);
    const [date, setDate] = useState<Date | undefined>();
    const { toast } = useToast();

    useEffect(() => {
        // Set date on client to avoid hydration mismatch
        setDate(new Date());
    }, []);

    const handleLogActivity = (e: React.FormEvent) => {
        e.preventDefault();
        toast({ title: "Activity Logged", description: "Your activity has been recorded." });
    }

    return (
        <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
                <Card>
                    <form onSubmit={handleLogActivity}>
                        <CardHeader>
                            <CardTitle>Log a New Activity</CardTitle>
                            <CardDescription>Record participation and contributions.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="activity-name">Activity Name</Label>
                                <Input id="activity-name" placeholder="e.g., Attended workshop" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="activity-type">Activity Type</Label>
                                <Select required>
                                    <SelectTrigger id="activity-type">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="event">Event Attendance</SelectItem>
                                        <SelectItem value="task">Task Completion</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="activity-date">Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <Button className="w-full" type="submit">
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Log Activity
                            </Button>
                        </CardContent>
                    </form>
                </Card>
            </div>
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Member Activity History</CardTitle>
                        <CardDescription>A record of all member activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Activity</TableHead>
                                    <TableHead className="hidden sm:table-cell">Member</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activities.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell className="font-medium">{activity.name}</TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={activity.avatar} data-ai-hint={activity.hint} />
                                                    <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span>{activity.user}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{activity.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={activity.status === 'Completed' ? 'secondary' : 'outline'} className={activity.status === 'In Progress' ? 'border-yellow-500 text-yellow-700' : ''}>{activity.status}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
