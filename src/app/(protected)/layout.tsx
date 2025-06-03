"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { Menu } from "lucide-react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const session = authClient.useSession();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative w-full">
        {/* Header mobile com gradiente e blur */}
        <header className="sticky top-0 z-50 md:hidden">
          <div className="from-primary/10 via-background to-primary/5 border-b bg-gradient-to-r backdrop-blur-md">
            <div className="flex h-16 items-center gap-4 px-4">
              <SidebarTrigger className="text-muted-foreground hover:text-primary transition-colors">
                <Menu className="h-6 w-6" />
              </SidebarTrigger>

              <div className="flex items-center gap-2">
                <span className="text-primary/80 font-semibold">
                  Clinic Agenda
                </span>
              </div>

              <div className="flex-1" />

              <Avatar className="border-primary/20 hover:border-primary/40 h-8 w-8 border transition-colors">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {session.data?.user?.clinic?.name?.[0] ?? "CA"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <div className="min-h-[calc(100vh-4rem)] p-4 md:min-h-screen md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
