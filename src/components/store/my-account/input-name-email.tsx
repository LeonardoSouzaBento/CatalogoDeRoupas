"use client";
import {
  CardHeader,
  CardTitle,
  Icon,
  Input,
  Label,
  MuiIcon,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contexts/index";
import { validateEmail } from "@/functions/validateEmail";
import { validateName } from "@/functions/validateName";
import type { BooleanSetter } from "@/types/types";
import { CircleCheckBig, Upload, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const InputNameEmail = ({
  setSeeEditMode,
}: {
  setSeeEditMode: BooleanSetter;
}) => {
  const { userData } = useUserContext();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameErrors, setNameErrors] = useState<string>("");
  const [emailErrors, setEmailErrors] = useState<string>("");

  async function handleSaveNameEmail() {
    setNameErrors(validateName(name));
    setTimeout(() => {
      setNameErrors("");
    }, 5000);
    setEmailErrors(validateEmail(email));
    setTimeout(() => {
      setEmailErrors("");
    }, 5000);
  }

  return (
    <div className={`flex flex-col gap-4 relative`}>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="edit" />
          <h3>Edite seus dados</h3>
        </CardTitle>
      </CardHeader>
      <Button
        className="absolute top-1 right-1"
        variant="transparent"
        size="icon"
        onClick={() => {
          setSeeEditMode(false);
        }}
      >
        <Icon Svg={X} />
      </Button>
      {/* <p>Foto de perfil</p> */}
      <div className="size-auto flex items-center justify-start max-[430px]:gap-3 gap-5">
        <div className="size-16 min-w-16 rounded-full bg-gray-100 crop relative">
          <Image src={`/`} fill alt="" />
        </div>
        <Button variant="outline" className="w-full">
          Subir nova imagem
          <Upload />
        </Button>
      </div>

      {/* nome */}
      <div>
        <Label htmlFor="name" className="mb-2">
          Nome
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder={userData.nome}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {nameErrors && <p className="text-red-600 mb-[14px]">{nameErrors}</p>}
      {/* email */}
      <div>
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder={userData.email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      {emailErrors && <p className="text-red-600 mb-[14px]">{emailErrors}</p>}
      <Button onClick={handleSaveNameEmail} className="w-full mt-1">
        Salvar Alterações
        <CircleCheckBig />
      </Button>
    </div>
  );
};
