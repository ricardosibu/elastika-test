import { chatConversationServices } from "@/services";
import { setDataChat } from "@/store/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const useChatComments = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const getComments = (comments) => {
        setLoading(true);
        getResponseChatAI(comments);
      };
    
      const getResponseChatAI = async (data) => {
        const response = await chatConversationServices(data);
        dispatch(setDataChat(response));
        setLoading(false);
      };

      return {
        loading,
        getComments
      };

}

export default useChatComments;