import { iconMdStyles } from "@/app/lucideIconStyles";
import { Search } from "lucide-react";

const css = {
  button: `h-12 w-full px-4 mb-4 flex items-center gap-2 br-sm hover:bs bg-neutral-100`,
  input: "w-full h-full flex-auto !pl-0 !pb-0 font-normal",
};

const SearchButton = () => {
  return (
    <button className={`${css.button}`}>
      <input
        type="text"
        placeholder="O que você procura?"
        className={`${css.input} input`}
      />
      <Search {...iconMdStyles} />
    </button>
  );
};

export default SearchButton;
