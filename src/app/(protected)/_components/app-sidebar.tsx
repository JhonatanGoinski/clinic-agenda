"use client";

import {
  Banknote,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Stethoscope,
  UserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Agendamentos",
    url: "/appointments",
    icon: CalendarDays,
  },
  {
    title: "Médicos",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "Pacientes",
    url: "/patients",
    icon: UserRound,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const session = authClient.useSession();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  return (
    <Sidebar>
      <SidebarHeader className="from-primary/5 to-background flex h-16 flex-row items-center gap-2 border-b bg-gradient-to-r p-4">
        <Image
          src="/Logo.svg"
          alt="Clinic Agenda"
          width={30}
          height={30}
          className="transition-transform hover:scale-105"
        />
        <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent">
          Clinic Agenda
        </h1>
      </SidebarHeader>
      <SidebarContent className="from-background via-background to-primary/5 bg-gradient-to-b">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/70 text-xs font-medium tracking-wider uppercase">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`transition-all duration-200 hover:translate-x-1 ${
                      pathname === item.url
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <Link href={item.url}>
                      <item.icon
                        className={`transition-colors ${
                          pathname === item.url ? "text-primary" : ""
                        }`}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/70 text-xs font-medium tracking-wider uppercase">
            Outros
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/subscription"}
                  className={`transition-all duration-200 hover:translate-x-1 ${
                    pathname === "/subscription"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <Link href="/subscription">
                    <Banknote
                      className={`transition-colors ${
                        pathname === "/subscription" ? "text-primary" : ""
                      }`}
                    />
                    <span>Assinatura</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="from-primary/5 to-background border-t bg-gradient-to-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="hover:bg-primary/5 group transition-colors"
                >
                  <Avatar className="border-primary/20 bg-primary/5 group-hover:border-primary/30 border transition-colors">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {session.data?.user?.clinic?.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="group-hover:text-primary text-sm font-medium transition-colors">
                      {session.data?.user?.clinic?.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {session.data?.user.email}
                    </p>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="text-destructive focus:text-destructive gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
