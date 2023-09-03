import Navbar from "@/components/Navbar"

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Navbar />

         {children}
      </>
   )
}
