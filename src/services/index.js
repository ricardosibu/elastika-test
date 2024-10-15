import { elastikaAPI } from "@/api";

export const generatePromptBash = async (data) => {
  const { linux_distribution, backend_platform, database } = data;
  const response = await elastikaAPI.post('/chat_ai', {}, {
    params: { linux_distribution, backend_platform, database },
  });
  return response.data.message.sendMessageAI.data;
};

export const chatConversationServices = async (comments) => {
  const data = { comments };
  const response = await elastikaAPI.post('chatComments', data);
  return response.data.message.sendMessageAI.data;
};

export const getAllConversations = async () => {
  const response = await elastikaAPI.get('/conversation');
  return response.data;
};

export const getConversation = async (id) => {
  const response = await elastikaAPI.get(`/conversation/${id}`);
  return response.data;
};

export const saveConversation = async (data) => {
  const response = await elastikaAPI.post('/conversation');
  return response.data;
}
