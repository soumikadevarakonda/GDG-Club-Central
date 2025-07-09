import { MainSidebar } from "@/components/layout/main-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset>
        <div className="min-h-screen">
            {children}
        </div>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
