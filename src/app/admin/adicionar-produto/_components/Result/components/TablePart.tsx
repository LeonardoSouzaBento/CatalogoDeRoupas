import React from "react";

interface Field {
  key: string;
  label: string;
}

interface Props {
  items: Record<string, string>[];
  fields: Field[];
  wrapperClass?: string;
}

const css = {
  wrapper: `bg-white br-0 `,
  row: `h-10 flex flex-row justify-between items-center border-b border-gray-200 last:border-none
  br-0`,
  label: `5 font-normal text-gray-800 w-40`,
  value: `text-sm text-gray-700 flex-1 text-right br-0`,
};

function TablePart({ items, fields, wrapperClass }: Props) {
  return (
    <div className={`${css.wrapper} ${wrapperClass ?? ""}`}>
      {items.map((item, i) =>
        fields.map((f) => (
          <div key={f.key + i} className={css.row}>
            <span className={css.label}>{f.label}</span>

            <span
              className={`${css.value} ${
                !item[f.key] && "font-light text-gray-300!"
              }`}
            >
              {item[f.key] || "——"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default TablePart;
