"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GdgLogo } from "../icons/gdg-logo";

export function MainSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" asChild>
                <SidebarTrigger />
            </Button>
            <GdgLogo className="w-8 h-8 text-primary" />
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <h2 className="font-semibold text-lg font-headline">GDG Club Central</h2>
            </div>
        </div>
      </SidebarHeader>
      
      <SidebarMenu className="flex-1 p-2">
        <SidebarMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <SidebarMenuButton isActive={pathname === "/dashboard"} tooltip="Dashboard">
              <LayoutDashboard />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-10">
                <AvatarImage src="https://placehold.co/40x40" alt="User" data-ai-hint="person face" />
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <p className="font-semibold">Alex Doe</p>
                <p className="text-sm text-muted-foreground">alex.doe@email.com</p>
            </div>
             <Link href="/" className="ml-auto group-data-[collapsible=icon]:hidden">
                <Button variant="ghost" size="icon" >
                    <LogOut />
                </Button>
            </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
