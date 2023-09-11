import Image from "next/image" 
import Link from "next/link" 

import { cn } from "@/lib/utils"

export interface Book {
   id:number,
   name: string
   artist: string
   cover: string
   chapter?: []
   words_count?: number
   // need to make progress of the book [progress % = (word_count * 100) / leght]
   length_metric?: "chapters" | "word count" | "pages"
   length?: number 
}

interface BookArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
   book: Book
   aspectRatio?: "portrait" | "square"
   width?: number
   height?: number
}

export function BookArtwork({ book, aspectRatio = "portrait", width, height, className }: BookArtworkProps) {

   return (
      <Link 
         href={'/author/books/' + book.id}
         className={cn("space-y-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} 
         >
         <div className="overflow-hidden rounded-lg">
            <Image
               src={book.cover}
               alt={book.name}
               width={width}
               height={height}
               className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[1/1.6]" : "aspect-square"
               )}
            />
         </div>

         <div className="space-y-1 text-sm">
            <h3 className="font-medium leading-none">{book.name}</h3>
            <p className="text-xs text-muted-foreground">{book.artist}</p>
         </div>
      </Link>
   )
}
