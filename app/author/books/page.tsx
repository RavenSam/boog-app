import BooksControl from "@/components/action/BooksControl"
import { Book, BookArtwork } from "@/components/custom-ui/BookCover"
import { Separator } from "@/components/ui/separator"

export default function BooksPage() {
   return (
      <>
         <main className="max-w-5xl mx-auto px-4">
            <section className="mt-20">
               <AllBooksSection />
            </section>
         </main>
      </>
   )
}

function AllBooksSection() {
   return (
      <>
         <div className="">
            <div className="bg-background space-y-6">
               <BooksControl />

               <Separator />

               <div className="relative grid grid-cols-4 gap-x-3 gap-y-6">
                  {RecentBook.map((book) => (
                     <BookArtwork
                        key={book.name}
                        book={book}
                        className="w-[230px]"
                        aspectRatio="portrait"
                        width={250}
                        height={330}
                     />
                  ))}
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
   {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
   },
]
