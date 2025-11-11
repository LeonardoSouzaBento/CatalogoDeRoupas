"use client";

const css = {
  container: `
    bg-white bg-gradient-to-t from-gray-50/80 to-white bs-light p-5 br-lg`,
  title: `
    font-semibold text-gray-800 mb-4 tracking-wide
  `,
  wrapperOptions: `
    flex flex-wrap gap-3
  `,
  optionButton: `
    px-4.5 py-2.5 rounded-full bs-light
    text-gray-800 text-[0.97em] font-normal bg-white
    hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600
    focus:ring-2 focus:ring-blue-300 focus:outline-none
    transition-all duration-150
    active:scale-95
  `,
  optionSelected: `
    bg-blue-600 text-white border-blue-800
    hover:bg-blue-700 hover:border-blue-700
  `,
};

interface PropertyOptionsProps {
  hasOptions: boolean;
  options: string[];
  propSelected: string | null;
  handleSelectOption: (prop: string, option: string) => void;
}

const PropertyOptions = ({
  hasOptions,
  options,
  propSelected,
  handleSelectOption,
}: PropertyOptionsProps) => {
  return (
    <div className={css.container} onClick={(e) => e.stopPropagation()}>
      <p className={css.title}>Selecione</p>

      <div className={css.wrapperOptions}>
        {hasOptions &&
          options.map((option) => (
            <button
              key={option}
              className={`
                ${css.optionButton}
                ${propSelected === option ? css.optionSelected : ""}
              `}
              onClick={() =>
                propSelected && handleSelectOption(propSelected, option)
              }
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default PropertyOptions;
