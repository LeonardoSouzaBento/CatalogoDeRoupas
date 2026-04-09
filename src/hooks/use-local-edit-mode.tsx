import { useHomeContext } from "@/contexts";
import { useEffect, useState } from "react";

/**
 * Hook customizado para gerenciar o modo de edição local em sincronia com o estado global.
 * 
 * @returns [editMode, setEditMode] - O estado de edição local e sua função de atualização.
 */
export const useLocalEditMode = () => {
  const { homeEditMode } = useHomeContext();
  const [editMode, setEditMode] = useState<boolean>(homeEditMode);

  useEffect(() => {
    setEditMode(homeEditMode);
  }, [homeEditMode]);

  return [editMode, setEditMode] as const;
};
