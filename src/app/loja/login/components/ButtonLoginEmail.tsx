"use client";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { LogIn, Mail } from "lucide-react";
import { ButtonClose, HeaderCard } from "../../_ui";
import { buttonStyles } from "../page";
import { BooleanSetter } from "@/types/types";

const css = { wrapper: ``, p: ``, button: `h-11 w-full j-center` };

const ButtonLoginEmail = ({
  seeEmailForm,
  setSeeEmailForm,
}: {
  seeEmailForm: boolean;
  setSeeEmailForm: BooleanSetter;
}) => {
  return (
    <div>
      {!seeEmailForm ? (
        <button
          className={`${buttonStyles} bg-gray-50 hover:bg-gray-200/80 trans`}
          onClick={() => {
            setSeeEmailForm(true);
          }}
        >
          <Mail {...iconMdStyles} />
          Login com email
        </button>
      ) : (
        <div className="bg-white z-3 relative">
          <ButtonClose
            setState={setSeeEmailForm}
            simpleDesign={true}
            styles="br-lg size-[38px]! light-button"
            positionStyles="absolute -top-[7px] -right-3"
          />
          <HeaderCard
            wrapperStyles="mb-4!"
            title="Entre com email"
            icon="mail"
            spanStyles="font-semibold! text-[1.25em]! mt-1"
          />
          <div className="mb-[18px]">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="meuemail@email.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              id="password"
              placeholder="Geramos uma, se preferir."
            />
          </div>
          <button className={`${css.button} mb-5`}>
            <LogIn {...iconMdStyles} /> entrar
          </button>
          <button
            className={`${css.button} h-10! font-light bg-white bs-light text-neutral-600`}
          >
            esqueci minha senha
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonLoginEmail;
