import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BellRing } from "lucide-react";

import { cn } from "@/lib/utils";
import { getConversation } from "@/services";
import { useDispatch } from "react-redux";
import { setDataChat } from "@/store/slice";

export const CardChats = ({ chats }) => {
    const dispatch = useDispatch();

    const handlerConversation = async (id) => {
        const response = await getConversation(id);
        dispatch(setDataChat(...response.conversation));
    }

    const handlerMessage  = (id) => {
        handlerConversation(id);
    }
  return (
    <Card className={cn("w-[350px]")}>
      <CardHeader>
        <CardTitle>Chats</CardTitle>
        <CardDescription>{`Tienes ${chats?.length} conversaciones`}</CardDescription>
      </CardHeader>
      {chats &&
        chats.length &&
        chats.map((chat) => (
          <CardContent key={chat.id} className="grid gap-4 cursor-pointer" onClick={() => {handlerMessage(chat._id)}}>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {chat.conversation[0].content}
                </p>
              </div>
              {/* <Switch /> */}
            </div>
          </CardContent>
        ))}
    </Card>
  );
};
