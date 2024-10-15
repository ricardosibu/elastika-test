import { useState } from "react";
import { useDispatch } from "react-redux";

import { generatePromptBash } from "@/services";
import { setDataChat } from "@/store/slice";

const usePromptBash = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getDataBash = (linuxOS, backend, database) => {
    setLoading(true);
    const dataBash = {
      linux_distribution: linuxOS,
      backend_platform: backend,
      database,
    };
    getResponseAI(dataBash);
  };

  const getResponseAI = async (data) => {
    const response = await generatePromptBash(data);
    dispatch(setDataChat(response));
    setLoading(false);
    setOpen(false);
  };

  return {
    loading,
    open,
    setOpen,
    getDataBash,
  };
};

export default usePromptBash;
