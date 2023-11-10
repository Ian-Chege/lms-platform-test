"use client"

import { usePathname } from "next/navigation"
import {
  Home,
  Library,
  Medal,
  Banknote,
  UserCircle2,
  ShieldCheck,
  List,
  BarChart,
} from "lucide-react"

import { SidebarItem } from "./sidebar-item"

const guestRoutes = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Library,
    label: "Courses",
    href: "/search",
  },
  {
    icon: Medal,
    label: "Certificates",
    href: "/certificates",
  },
  {
    icon: Banknote,
    label: "Payments",
    href: "/payments",
  },
  {
    icon: UserCircle2,
    label: "My Account",
    href: "/my-account",
  },
  {
    icon: ShieldCheck,
    label: "Safety Center",
    href: "/safety-center",
  },
]

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.includes("/teacher")
  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
