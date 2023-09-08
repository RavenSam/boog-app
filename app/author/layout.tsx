import Navbar from "@/components/Navbar"

interface LayoutProps {
    children: React.ReactNode, 
    params:{ id: string, chapterId: string } 
}

export default function AuthorLayout({ children, params }: LayoutProps ) {

   return (
      <>
         { !params.chapterId && <Navbar /> }

         <div className={`${!params.chapterId && "ml-16"}`}>
            {children}
         </div>
      </>
   )
}
