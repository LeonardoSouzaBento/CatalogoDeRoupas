"use client";
import React, { useState } from "react";
import { ButtonLoginGoogle, ButtonLoginEmail, EmailForm } from "./login/index";

const Separator = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-neutral-200"></span>
      </div>
      <div className="relative flex justify-center text-xs">
        <span
          className="bg-light-bg px-2 pt-2 pb-1.75 text-neutral-400 
        font-semibold tracking-wider text-button-lg"
        >
          OU
        </span>
      </div>
    </div>
  );
};

const LoginCore = () => {
  const [seeEmailForm, setSeeEmailForm] = useState<boolean>(false);

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-700">
      {!seeEmailForm ? (
        <div className="flex flex-col gap-3">
          <ButtonLoginGoogle />
          <Separator />
          <ButtonLoginEmail
            seeEmailForm={seeEmailForm}
            setSeeEmailForm={setSeeEmailForm}
          />
        </div>
      ) : (
        <EmailForm setSeeEmailForm={setSeeEmailForm} />
      )}
    </div>
  );
};

export default LoginCore;
