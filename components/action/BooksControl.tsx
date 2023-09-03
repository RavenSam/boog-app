"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import NewBook from "@/components/action/NewBook"
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons"

export default function BooksControl() {
   const [view, setView] = useState<"list" | "grid">("grid")

   const viewHandler = () => {
      setView((prev) => (prev === "grid" ? "list" : "grid"))
   }

   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">My Books</h2>
         </div>

         <div className="ml-auto space-x-2">
            <Button onClick={viewHandler} variant="outline" size="icon">
               {view === "list" ? <GridIcon className="h-4 w-4" /> : <ListBulletIcon className="h-4 w-4" />}
            </Button>

            <NewBook />
         </div>
      </div>
   )
}
