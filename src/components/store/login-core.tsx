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
          className="bg-light-bg px-1.5 pt-2 pb-1.75 text-muted-foreground/88 font-medium
        tracking-wider"
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
    <div className="w-full px-6 pb-8 pt-0 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {!seeEmailForm ? (
        <div className="flex flex-col gap-3">
          <ButtonLoginGoogle className="w-full gap-2.25 transition-all group rounded-lg normal-case" />
          <Separator />
          <ButtonLoginEmail
            className="w-full transition-all group rounded-lg normal-case shadow-xs/16"
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
