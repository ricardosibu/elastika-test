import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

import useChatComments from "@/hooks/useChatComments";
import { setDataChat } from "@/store/slice";
import { Spinner } from "./commons/Spinner";
import { setMessage } from "@/utils/setMessage";

export const InputChat = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const { loading, getComments } = useChatComments();

  const handleMessage = () => {
    const dataMessage = setMessage(input)
    dispatch(setDataChat(dataMessage));
    getComments(dataMessage.content);
    setInput('');
  }
  

  return (
    <div className="mt-4 flex">
      <Input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // onKeyPress={handleKeyPress}
        className="flex-1 mr-2"
      />
      <Button onClick={handleMessage} disabled={loading}>
        {loading ? (
          <Spinner size="h-4 w-4" color="text-blue-500" />
        ) : (
          <Send className=" h-4 w-4" />
        )}
      </Button>
    </div>
  );
};
