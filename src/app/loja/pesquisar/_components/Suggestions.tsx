import React from "react";
import { mostSearched } from "@/data/UsersData";

const css = {
  wrapper: `br-md`,
  title: ``,
  wrapperSuggestions: `flex flex-wrap gap-3`,
  wrapperItem: "min-h-9 centralize px-2 br-sm border bs-color",
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
