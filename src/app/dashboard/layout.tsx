import { MainSidebar } from "@/components/layout/main-sidebar";
import { Header } from "@/components/layout/header";
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-4 md:p-8 pt-6 bg-background">
            {children}
          </main>
          <footer className="py-4 px-8 text-center text-sm text-muted-foreground">
            Built with Firebase • GDG Club 2025
          </footer>
        </div>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
