import { Board } from "../components/Board"
import { CardBoard } from "../components/CardBoard"
import { Sidebar } from "../components/Sidebar"

export const ChatAI = () => {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
            <Board />
            <div className="flex-1 m-4 flex flex-col">
                <CardBoard />
            </div>
        </div>
        
    </div>
  )
}
