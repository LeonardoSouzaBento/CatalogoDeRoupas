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

function TablePart({ items, fields, wrapperClass }: Props) {
  return (
    <div
      className={`bg-light-bg rounded-none small-text leading-tight ${wrapperClass ?? ""}`}
    >
      {items.map((item, index) =>
        fields.map((f) => (
          <div
            key={f.key + index}
            className="h-10 flex flex-row justify-between items-center border-b border-border/50 last:border-none
  rounded-none"
          >
            <span className="font-medium w-40 uppercase smaller-text tracking-wider leading-tight">{f.label}</span>

            <span
              className={`text-sm flex-1 text-right rounded-none ${!item[f.key] && "font-light text-gray-300!"}`}
            >
              {item[f.key] || "——"}
            </span>
          </div>
        )),
      )}
    </div>
  );
}

export { TablePart };
