"use client";
import { iconSm } from "@/app/lucideIconStyles";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const css = {
  wrapper: `relative p-4 flex br-md text-left overflow-hidden bg-gray-50`,
  wrapperTitle: `min-h-10 flex justify-between items-end gap-2 sm:gap-0 mb-1 box-border pb-3`,
  title: `w-full text-left font-semibold`,
  p: `p165 text-gray-700 transition-all duration-300`,
  highlight: `font-medium text-gray-900`,
  button: `size-9 centralize px-0 br-50 text-gray-500 
  hover:text-gray-700 trans white-button shadow-soft-hover`,
};

const Recommendations = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${css.wrapper}`}>
      <div className="size-9">
        <button
          onClick={() => setExpanded(!expanded)}
          className={css.button}
          aria-label="Mostrar mais ou menos"
        >
          {expanded ? <Minus {...iconSm} /> : <Plus {...iconSm} />}
        </button>
      </div>

      <div>
        {expanded ? (
          <>
            <p className={css.p}>
              O ideal é <span className={css.highlight}>pelo menos 3 fotos</span>{" "}
              para cada roupa (frente, costas e o tecido visto de perto).
            </p>
            <p className={`${css.p} mt-2`}>
              O{" "}
              <span className={css.highlight}>
                mais recomendado é adicionar 5 fotos
              </span>
              , mostrando também a lateral da peça e a peça sendo usada por uma
              pessoa. Assim o cliente entende melhor o caimento e a textura.
            </p>
          </>
        ) : (
          <p className={css.p}>
            O ideal é <span className={css.highlight}>pelo menos 3 fotos</span>{" "}
            para cada roupa (frente, costas e o tecido visto de perto)...
          </p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
