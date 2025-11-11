import { HeaderCard } from "@/app/loja/_ui";
import React from "react";

interface Props {
  title: string;
  steps: string[];
}

const css = {
  section: `
    basic-card-style max-w-3xl mx-auto
    bg-gradient-to-br from-white to-gray-50
  `,
  wrapperList: `
    list-decimal pl-6 space-y-3 text-gray-700
  `,
  itemList: `
    bg-white hover:bg-blue-50 transition-colors
    px-3 br-md py-3
  `,
};

const Tutorial = ({ title, steps }: Props) => {
  return (
    <section className={css.section}>
      <HeaderCard title={`Saiba ${title}`} />
      <ol className={css.wrapperList}>
        {steps.map((item, index) => (
          <li className={css.itemList} key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Tutorial;
