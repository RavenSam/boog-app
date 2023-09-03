import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Book, BookArtwork } from "@/components/custom-ui/BookCover"
import BooksControl from "@/components/action/BooksControl"

export default function BooksSection() {
   return (
      <>
         <div className="">
            <div className="bg-background space-y-6">
               <BooksControl />

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
                                 <Link href="/author/books">
                                    <span>See more</span>
                                    <ChevronRightIcon className="ml-2 h-4 w-4" />
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
