import BooksSection from "@/components/section/BooksSection"

export default function AuthorPage() {
   return (
      <main className="max-w-5xl mx-auto px-4">
         <div className="rounded-lg shadow px-6 py-24 mt-8 border">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Author</h1>
            <p className="text-sm text-muted-foreground">Author front stats</p>
         </div>

         <section className="mt-20">
            <BooksSection />
         </section>
      </main>
   )
}
