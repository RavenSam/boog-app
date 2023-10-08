"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Settings, Search, LayoutDashboard, BookCopy, StickyNoteIcon, ChevronRight, ChevronLeft } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

const navLinks = [
   { label: "Overview", icon: LayoutDashboard, href: "/author" },
   { label: "Books", icon: BookCopy, href: "/author/books" },
   { label: "Notes", icon: StickyNoteIcon, href: "/author/notes" },
]

export default function Navbar() {
   const pathname = usePathname()
   const [openInEdit, setOpenInEdit] = useState(false)

   const inEdit = pathname.split("/").includes("edit")

   return (
      <>
         <div
            className={cn(
               "w-16 fixed left-0 top-0 bottom-0 border-r transition-all duration-300",
               inEdit && !openInEdit && "-translate-x-16"
            )}
         >
            <Button
               onClick={() => setOpenInEdit((prev) => !prev)}
               variant="secondary"
               size="icon"
               aria-label="show/hidde navbar"
               className={cn(
                  "absolute -right-8 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                  inEdit && !openInEdit && "-right-12 rotate-180 opacity-60  hover:opacity-100 hover:-right-14"
               )}
            >
               <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex flex-col items-center h-full py-4 px-2">
               <Button variant="ghost" className="my-3" size="icon" aria-label="Search">
                  <Search className="h-5 w-5" />
               </Button>

               <Separator />

               {navLinks.map((item) => (
                  <Button variant="ghost" className="mt-3" key={item.label} size="icon" aria-label={item.label} asChild>
                     <Link href={item.href}>
                        <item.icon className="h-5 w-5" />
                     </Link>
                  </Button>
               ))}

               <div className="mt-auto">
                  <UserNav />
               </div>
            </div>
         </div>
      </>
   )
}

function UserNav() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
               <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/01.png" alt="@john" />
                  <AvatarFallback>JD</AvatarFallback>
               </Avatar>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent side="right" className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
               <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">john</p>
                  <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
               </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem>Profile</DropdownMenuItem>
               <DropdownMenuItem>Billing</DropdownMenuItem>
               <DropdownMenuItem>Settings</DropdownMenuItem>
               <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
