"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebar } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Bell,
  MessageSquare,
  BadgeCheck,
  UserCog,
  LineChart,
  StethoscopeIcon,
  DollarSignIcon,
  UserIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import LogoFull from "@/components/custom/LogoFull";
import Image from "next/image";
import { SearchForm } from "./SearchForm";

const menuItems = {
  patient: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
    },
    {
      title: "My Doctors",
      url: "/my-checkups",
      icon: <StethoscopeIcon className="w-4 h-4 mr-2" />,
    },
    {
      title: "My Profile",
      url: "/profile",
      icon: <UserIcon className="w-4 h-4 mr-2" />,
    },
    {
      title: "Subscription",
      url: "/subscription",
      icon: <DollarSignIcon className="w-4 h-4 mr-2" />,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: <MessageSquare className="w-4 h-4 mr-2" />,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: <Bell className="w-4 h-4 mr-2" />,
    },
  ],
  admin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4 mr-2" />,
    },
    {
      title: "User Management",
      url: "/admin/users",
      icon: <UserCog className="w-4 h-4 mr-2" />,
    },
    {
      title: "Profile Approvals",
      url: "/admin/profile-approvals",
      icon: <BadgeCheck className="w-4 h-4 mr-2" />,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: <LineChart className="w-4 h-4 mr-2" />,
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings className="w-4 h-4 mr-2" />,
    },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: "patient" | "admin";
  userId?: string;
}

export function AppSidebar({
  userRole = "patient",
  userId,
  ...props
}: AppSidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getItemUrl = (url: string) => {
    if (url.includes("my-checkups") && userId) {
      return `${url}/${userId}`;
    }
    return url;
  };

  const items = menuItems[userRole] || [];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div
          className={`mb-3 ${isCollapsed ? "flex justify-center mt-3" : ""}`}
        >
          {!isCollapsed ? (
            <LogoFull width={24} height={24} textSize="lg" />
          ) : (
            <Link href="/">
              <Image
                src="/logo.svg"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/blur.jpg"
                alt="logo"
                width={20}
                height={20}
              />
            </Link>
          )}
        </div>
        {!isCollapsed && <SearchForm />}
      </SidebarHeader>
      <SidebarContent className="remove-scrollbar">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.url)}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <Link
                      href={getItemUrl(item.url)}
                      className="flex items-center"
                    >
                      {pathname.startsWith(item.url) ? (
                        <div className="text-primary">{item.icon}</div>
                      ) : (
                        item.icon
                      )}
                      {!isCollapsed && item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
