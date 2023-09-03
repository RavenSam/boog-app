import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"

export default function NewBook() {
   return (
      <>
         <Button variant="outline">
            <PlusIcon className="mr-2 h-4 w-4" />
            New book
         </Button>
      </>
   )
}
