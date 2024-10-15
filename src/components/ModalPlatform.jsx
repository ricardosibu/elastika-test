import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDataChat } from "@/store/slice";

import { Button } from "./ui/button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Settings } from "lucide-react";

import {
  databaseOptions,
  linuxDistribution,
  serverPlatform,
} from "@/constants";

import { setMessage } from "@/utils/setMessage";
import { Spinner } from "./commons/Spinner";
import usePromptBash from "@/hooks/usePromptBash";

export const ModalPlatform = () => {
  const dispatch = useDispatch();
  const [linuxDistro, setLinuxDistro] = useState("");
  const [backendPlatform, setBackendPlatform] = useState("");
  const [database, setDatabase] = useState("");

  const { loading, open, setOpen, getDataBash } = usePromptBash();

  const handleForm = () => {
    getDataBash(linuxDistro, backendPlatform, database);
    const dataMessage = setMessage(`Proveeme de un script bash sin comentarios y tampoco me des las instrucciones, solo dame el script bash, 
        para instalar ${linuxDistro}, ${backendPlatform} y ${database}`)
    dispatch(setDataChat(dataMessage));
  };



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outlined" size="icon">
          <Settings className=" h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Genera un script bash para realizar la configuracion de tu servidor
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="linux" className="text-right text-sm font-medium">
              Distribución Linux
            </label>
            <Select value={linuxDistro} onValueChange={setLinuxDistro}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona una distribución" />
              </SelectTrigger>
              <SelectContent>
                {linuxDistribution.map((dist) => (
                  <SelectItem key={dist.name} value={dist.name}>
                    {dist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="backend" className="text-right text-sm font-medium">
              Plataforma Backend
            </label>
            <Select value={backendPlatform} onValueChange={setBackendPlatform}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona una plataforma" />
              </SelectTrigger>
              <SelectContent>
                {serverPlatform.map((platform) => (
                  <SelectItem key={platform.name} value={platform.name}>
                    {platform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="database"
              className="text-right text-sm font-medium"
            >
              Base de Datos
            </label>
            <Select value={database} onValueChange={setDatabase}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona una base de datos" />
              </SelectTrigger>
              <SelectContent>
                {databaseOptions.map((db) => (
                  <SelectItem key={db.name} value={db.name}>
                    {db.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleForm} disabled={loading}>
          {loading ? <Spinner size="h-4 w-4" color="text-blue-500" /> : null}
          <span className="ml-4">Generar Script</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};
