import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

import { InputChat } from "./InputChat";
import { validateMessageCode } from "@/utils/validateMessageCode";


export const CardBoard = () => {
  const chatComments = useSelector((state) => state.dataChat.message);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    setConversations([ ...conversations, chatComments, ]);

  }, [chatComments])
  
  console.log('comments',conversations);
 

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversacion con IA</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          {conversations?.length &&
            conversations.map((conv) => <ConsoleText key={conv.id}>{conv.content}</ConsoleText>)}
        </ScrollArea>
        <InputChat />
      </CardContent>
    </Card>
  );
};

const ConsoleText = ({ children }) => {
  const { content, hasTripleQuotes } = validateMessageCode(children);
  
  return (
    <div className=" m-2">
      {hasTripleQuotes && (
        <p className="text-sm text-gray-500 mb-2">Comando de consola detectado:</p>
      )}
      <pre className={`p-4 w-[920px] rounded-md overflow-x-auto font-mono text-sm ${
        hasTripleQuotes ? 'bg-gray-800 text-green-400' : 'text-gray-800'
      }`}>
        <code>{content}</code>
      </pre>
    </div>
  );
};