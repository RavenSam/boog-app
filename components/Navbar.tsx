"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
   { label: "Overview", href: "/author" },
   { label: "Books", href: "/author/books" },
   { label: "Notes", href: "/author/notes" },
]

export default function Navbar() {
   return (
      <div className="">
         <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
            <MainNav className="mx-6" />

            <div className="ml-auto flex items-center space-x-4">
               <div>
                  {/* Later oon change to Command component intead of input*/}
                  {/* https://ui.shadcn.com/docs/components/command */}
                  <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
               </div>

               <UserNav />
            </div>
         </div>
      </div>
   )
}

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
   const pathname = usePathname()

   return (
      <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
         {navLinks.map((item) => (
            <Link
               key={item.label}
               href={item.href}
               className={cn(
                  "text-sm font-medium",
                  pathname !== item.href ? "text-muted-foreground transition-colors hover:text-primary" : ""
               )}
            >
               {item.label}
            </Link>
         ))}
      </nav>
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
         <DropdownMenuContent className="w-56" align="end" forceMount>
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
