import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NewBook() {
   return (
      <>
         <Dialog>
            <DialogTrigger asChild>
               <Button variant="outline">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  New book
               </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>New book</DialogTitle>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                     <Label htmlFor="title">Title</Label>
                     <Input type="text" id="title" name="title" placeholder="title" />
                  </div>

                  <div className="grid w-full gap-1.5">
                     <Label htmlFor="synopsis">Synopsis</Label>
                     <Textarea id="synopsis" name="synopsis" placeholder="Type your synopsis here." />
                  </div>
               </div>
               <DialogFooter>
                  <Button type="submit">Create</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   )
}
