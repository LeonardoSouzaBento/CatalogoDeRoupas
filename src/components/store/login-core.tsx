"use client";
import React, { useState } from "react";
import { ButtonLoginGoogle, ButtonLoginEmail, EmailForm } from "./login/index";

const LoginCore = () => {
  const [seeEmailForm, setSeeEmailForm] = useState<boolean>(false);

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-700">
      {!seeEmailForm ? (
        <div className="flex flex-col gap-3">
          <ButtonLoginGoogle />
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-light-bg pt-2 pb-1.75 text-neutral-400 font-semibold tracking-wider">
                ou
              </span>
            </div>
          </div>
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
