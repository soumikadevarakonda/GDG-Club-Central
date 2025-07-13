"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, BookCopy, ListChecks, CalendarDays, BarChart3, GalleryVertical, LogOut, Settings, LifeBuoy } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GdgLogo } from "../icons/gdg-logo";

export function MainSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/dashboard/resources", label: "Resources", icon: BookCopy },
    { href: "/dashboard/activity", label: "Activity Logs", icon: ListChecks },
    { href: "/dashboard/events", label: "Event Updates", icon: CalendarDays },
    { href: "/dashboard/polls", label: "Polls", icon: BarChart3 },
    { href: "/dashboard/gallery", label: "Gallery", icon: GalleryVertical },
  ];

  const bottomMenuItems = [
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/support", label: "Support", icon: LifeBuoy },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
                <GdgLogo className="w-8 h-8" />
                <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                    <h2 className="font-semibold text-lg text-sidebar-foreground">Club Central</h2>
                </div>
            </Link>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu className="flex-1">
            {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton isActive={pathname === item.href} tooltip={item.label}>
                    <item.icon />
                    <span>{item.label}</span>
                </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
        <SidebarMenu>
            {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton isActive={pathname === item.href} tooltip={item.label}>
                    <item.icon />
                    <span>{item.label}</span>
                </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-10">
                <AvatarImage src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" data-ai-hint="person face" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <p className="font-semibold text-sidebar-foreground">User</p>
                <p className="text-sm text-sidebar-foreground/70">user@example.com</p>
            </div>
             <Link href="/" className="ml-auto group-data-[collapsible=icon]:hidden">
                <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent/20 hover:text-sidebar-foreground">
                    <LogOut />
                </Button>
            </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
