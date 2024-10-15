import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { ModalPlatform } from "./ModalPlatform"

export const Board = () => {
  return (
        <header className='bg-white border-b p-4 flex justify-between items-center'>
        <Button variant="ghost">
            <Menu className="h6 w-6" />
        </Button>
            <h1 className='text-xl font-bold'>AI Chat</h1>
            <ModalPlatform />
        </header>
  )
}
