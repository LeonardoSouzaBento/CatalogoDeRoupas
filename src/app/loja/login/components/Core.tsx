"use client"
import React, { useState } from "react";
import { HeaderCard } from "../../_ui";
import ButtonLoginGoogle from "./ButtonLoginGoogle";
import ButtonLoginEmail from "./ButtonLoginEmail";

const Core = () => {
  const [seeEmailForm, setSeeEmailForm] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col">
      {!seeEmailForm && (
        <>
          <HeaderCard
            title="Fazer Login"
            subtitle="Recomendamos o login com Google"
            spanStyles="font-medium! text-[1.35em]! mt-1"
            titleStyles="font-semibold text-[1.12em]!"
          />
          <ButtonLoginGoogle />
        </>
      )}
      <ButtonLoginEmail
        seeEmailForm={seeEmailForm}
        setSeeEmailForm={setSeeEmailForm}
      />
    </div>
  );
};

export default Core;
