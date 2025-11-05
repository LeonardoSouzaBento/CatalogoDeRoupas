import { iconMdStyles } from "@/app/lucideIconStyles";
import { Search } from "lucide-react";

const css = {
  button: `h-11 w-full pl-4 pr-0 flex items-center gap-2 br-md hover:bs bg-neutral-100`,
  wrraperIcon: "h-full w-13 centralize pb-[1px]",
  input: "w-full min-h-full flex-auto p-0! font-normal!",
};

const SearchButton = () => {
  return (
    <div className="px-2">
      <button className={`${css.button}`}>
        <input
          type="text"
          placeholder="O que você procura?"
          className={`${css.input} input`}
        />
        <div className={`${css.wrraperIcon}`}>
          <Search {...iconMdStyles} />
        </div>
      </button>
    </div>
  );
};

export default SearchButton;
