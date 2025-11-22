import React, { useContext } from "react";
import { iconMd } from "@/app/lucideIconStyles";
import { PenOff } from "lucide-react";
import { HomeContext } from "@/contexts";

const css = {
  button: `h-11 fixed bottom-19 right-4 bg-white rounded-2xl 
  shadow-soft hover:shadow-soft-hover z-3 [box-shadow:0_0_15px_#00000017,0_4_8px_#0000001a]`,
};

const ExitHomeEditButton = () => {
  const { homeEditMode, setHomeEditMode } = useContext(HomeContext);

  if (homeEditMode) {
    return (
      <button
        onClick={() => {
          setHomeEditMode(false);
        }}
        className={`${css.button} `}
      >
        Fechar edição
        <div className="wrapper-icon">
          <PenOff {...iconMd} strokeWidth={2.3} />
        </div>
      </button>
    );
  }
};

export default ExitHomeEditButton;
