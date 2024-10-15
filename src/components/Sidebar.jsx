import { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { getAllConversations, saveConversation } from '@/services';
import { CardChats } from './CardChats';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const chatComments = useSelector((state) => state.dataChat.message);
    const [showSidebar, setShowSidebar] = useState(false);
    const [chats, setChats] = useState([]);
    const [success, setSuccess] = useState("");

    const getChats = async () => {
      const response = await getAllConversations();
      setChats(response)
    };

    const saveChat = () => {
      const response = saveConversation(chatComments);
      if(response.data) setSuccess("Conversacion guardada con exito");
    };

    useEffect(() => {
      getChats();
    }, []);


  return (
    <div className={`bg-white w-96 p-4 border-r ${showSidebar ? 'block' : 'hidden'} md:block`}>
        <Button variant="outline" className="w-full mb-4" onClick={saveChat}>
            <Plus className='mr-2 h-4 w-4' /> Guardar Conversacion
        </Button>
        <CardChats chats={chats} />
    </div>
  )
}
