import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
   return (
      <main className="flex h-screen items-center justify-center">
         <div className="">
            <Button asChild>
               <Link href={"/author"}>Author Page</Link>
            </Button>
         </div>
      </main>
   )
}
