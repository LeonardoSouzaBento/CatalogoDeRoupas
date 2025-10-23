import React from "react";
import { mostSearched } from "@/data/productsInfo";

const css = {
  wrapper: `br-md p-5 shadow-md`,
  title: ``,
  wrapperSuggestions: `flex flex-wrap gap-3`,
  wrapperItem: "min-h-10 centralize px-4 br-sm bg-button ",
};

const Suggestions = () => {
    
  return (
    <div className={`${css.wrapper}`}>
      <p className="mb-4">Buscas Frequentes:</p>
      <div className={`${css.wrapperSuggestions}`}>
        {mostSearched.masculino.map((item) => (
          <div key={item} className={`${css.wrapperItem}`}>
            <p className="small-p">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
