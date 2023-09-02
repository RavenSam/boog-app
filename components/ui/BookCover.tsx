import Image from "next/image"

import { cn } from "@/lib/utils"

export interface Book {
   name: string
   artist: string
   cover: string
}

interface BookArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
   book: Book
   aspectRatio?: "portrait" | "square"
   width?: number
   height?: number
}

export function BookArtwork({ book, aspectRatio = "portrait", width, height, className, ...props }: BookArtworkProps) {
   return (
      <div className={cn("space-y-3", className)} {...props}>
         <div className="overflow-hidden rounded-md">
            <Image
               src={book.cover}
               alt={book.name}
               width={width}
               height={height}
               className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
               )}
            />
         </div>

         <div className="space-y-1 text-sm">
            <h3 className="font-medium leading-none">{book.name}</h3>
            <p className="text-xs text-muted-foreground">{book.artist}</p>
         </div>
      </div>
   )
}
