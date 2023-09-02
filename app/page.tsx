import { Button } from "@/components/ui/button"
import { PlusIcon, GridIcon, ListBulletIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Book, BookArtwork } from "@/components/ui/BookCover"
import Link from "next/link"

export default function Home() {
   return (
      <main className="">
         <div className="mt-20">
            <Books />
         </div>
      </main>
   )
}

const Books = () => {
   return (
      <>
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-background space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between">
                     <h2 className="text-2xl font-semibold tracking-tight">My Books</h2>
                  </div>

                  <div className="ml-auto space-x-2">
                     <Button variant="outline" size="icon">
                        <GridIcon className="h-4 w-4" />
                     </Button>

                     <Button variant="outline">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        New book
                     </Button>
                  </div>
               </div>

               <Separator />

               <div className="relative">
                  <ScrollArea>
                     <div className="flex space-x-4 pb-4">
                        {RecentBook.map((book) => (
                           <BookArtwork
                              key={book.name}
                              book={book}
                              className="w-[250px]"
                              aspectRatio="portrait"
                              width={250}
                              height={330}
                           />
                        ))}

                        <div className="w-60 aspect-[3/4] rounded-md  flex items-center justify-center">
                           <div className="">
                              <Button variant="ghost" asChild>
                                 <Link href="/">
                                    <span>See more</span>
                                    <ChevronRightIcon className="mr-2 h-4 w-4" />
                                 </Link>
                              </Button>
                           </div>
                        </div>
                     </div>
                     <ScrollBar orientation="horizontal" />
                  </ScrollArea>
               </div>
            </div>
         </div>
      </>
   )
}

export const RecentBook: Book[] = [
   {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
   },
   {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
   },
   {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
   },
   {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
   },
]
