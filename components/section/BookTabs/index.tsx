"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import BookTabChapters from "@/components/section/BookTabs/tabs/BookTabChapters"
import BookTabCharacters from "@/components/section/BookTabs/tabs/BookTabCharacters"
import BookTabPlaces from "@/components/section/BookTabs/tabs/BookTabPlaces"
import BookTabNotes from "@/components/section/BookTabs/tabs/BookTabNotes"
import BookTabScenes from "@/components/section/BookTabs/tabs/BookTabScenes"
import BookTabDescription from "@/components/section/BookTabs/tabs/BookTabDescription"

export default function BookTabs() {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()

   const currentTab = searchParams.get("t") || "description"

   return (
      <Tabs
         className="space-y-2 max-w-4xl mx-auto py-1.5"
         value={currentTab}
         onValueChange={(value) => router.push(pathname + "?t=" + value)}
      >
         <TabsList className="md:ml-[290px] mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="scenes">Scenes</TabsTrigger>
            <TabsTrigger value="places">Places</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
         </TabsList>

         <div className="p-4 border-t">
            <TabsContent value="description">
               <BookTabDescription />
            </TabsContent>
            <TabsContent value="chapters">
               <BookTabChapters />
            </TabsContent>
            <TabsContent value="characters">
               <BookTabCharacters />
            </TabsContent>
            <TabsContent value="places">
               <BookTabPlaces />
            </TabsContent>
            <TabsContent value="scenes">
               <BookTabScenes />
            </TabsContent>
            <TabsContent value="notes">
               <BookTabNotes />
            </TabsContent>
         </div>
      </Tabs>
   )
}
