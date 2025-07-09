"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { useToast } from "@/hooks/use-toast";

const mockActivities = [
    { id: 1, name: "Tech Talk: AI in Web Dev", type: "Event Attendance", date: "2024-05-15", status: "Completed" },
    { id: 2, name: "Code Review for Project Alpha", type: "Task Completion", date: "2024-05-20", status: "Completed" },
    { id: 3, name: "Organize Q3 Hackathon", type: "Task Completion", date: "2024-06-01", status: "In Progress" },
];

export function ActivityLogger() {
    const [activities, setActivities] = useState(mockActivities);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const { toast } = useToast();

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
                            <CardTitle>Log an Activity</CardTitle>
                            <CardDescription>Record your participation and contributions.</CardDescription>
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
                            <Button className="w-full" type="submit">Log Activity</Button>
                        </CardContent>
                    </form>
                </Card>
            </div>
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>My Activity History</CardTitle>
                        <CardDescription>A record of your recent activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Activity</TableHead>
                                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {activities.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell className="font-medium">{activity.name}</TableCell>
                                        <TableCell className="hidden sm:table-cell">{activity.type}</TableCell>
                                        <TableCell className="hidden md:table-cell">{activity.date}</TableCell>
                                        <TableCell>
                                            <Badge variant={activity.status === 'Completed' ? 'secondary' : 'outline'}>{activity.status}</Badge>
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
