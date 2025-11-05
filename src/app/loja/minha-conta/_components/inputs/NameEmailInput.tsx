import React, { useState } from "react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { Check, Upload } from "lucide-react";
import { validateName } from "@/functions/validateName";
import { validateEmail } from "@/functions/validateEmail";
import Image from "next/image";
import { ButtonClose } from "@/app/loja/_ui";
import { BooleanSetter } from "@/types/types";

const css = {
  pError: `text-red-600 mb-[14px]`,
};

const NameEmailInput = ({
  setSeeEditMode,
}: {
  setSeeEditMode: BooleanSetter;
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameErrors, setNameErrors] = useState<string>("");
  const [emailErrors, setEmailErrors] = useState<string>("");

  function handleSaveNameEmail() {
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
    <div className={`flex flex-col gap-4 pt-2 relative`}>
      <ButtonClose
        setState={setSeeEditMode}
        simpleDesign={true}
        positionStyles="absolute top-0 -right-2"
      />
      <div className="size-auto flex items-end justify-start gap-5">
        <div className="size-16 br-lg bg-gray-50 crop relative">
          <Image src={`/`} fill={true} alt="" />
        </div>
        <button className="bg-gray-50 hover:bg-gray-100 trans">
          <Upload {...iconMdStyles} />
          Subir nova imagem
        </button>
      </div>

      {/* nome */}
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Seu Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {nameErrors && <p className={`${css.pError}`}>{nameErrors}</p>}
      {/* email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="meuemail@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      {emailErrors && <p className={`${css.pError}`}>{emailErrors}</p>}
      {/*  */}
      <button className="mt-1" onClick={handleSaveNameEmail}>
        <Check {...iconMdStyles} />
        Salvar Alterações
      </button>
    </div>
  );
};

export default NameEmailInput;
