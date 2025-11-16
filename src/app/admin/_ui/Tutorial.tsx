"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { icon2LgStyles, iconLgStyles } from "@/app/lucideIconStyles";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  steps: string[];
  listStyles?: string;
  itemStyles?: string;
  dropDownWrapperStyles?: string;
}

const css = {
  section: `
    basic-card-style max-w-3xl lg:max-w-4xl mx-auto bg-white relative crop
  `,
  list: `flex flex-col j-start`,
  wrapperList: `w-full text-gray-700`,
  itemList: ` w-full min-h-10 hover:bg-blue-50 trans mb-0 cursor-default break-words`,
};

const Tutorial = ({
  title,
  steps,
  listStyles,
  itemStyles,
  dropDownWrapperStyles,
}: Props) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const middle = Math.ceil(steps.length / 2);
  const firstHalf = steps.slice(0, middle);
  const secondHalf = steps.slice(middle);

  const renderItems = (items: string[], startIndex: number) =>
    items.map((item, index) => (
      <li key={index} className={`${css.itemList} ${itemStyles}`}>
        <strong>{startIndex + index + 1}</strong> - {item}
      </li>
    ));

  return (
    <section
      className={`${css.section} ${
        dropDown ? "h-auto" : dropDownWrapperStyles || "h-19"
      }`}
    >
      <div
        className={`flex justify-between gap-3 sm:gap-4.5 sm:justify-start`}
        onClick={() => {
          setDropDown((prev) => !prev);
        }}
      >
        <HeaderCard
          icon="info"
          title={`Saiba ${title}`}
          titleStyles="leading-7"
          spanStyles="font-semibold! text-[1.147em]!"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setDropDown((prev) => !prev);
          }}
          className={`h-9 min-w-9 -mr-2 px-0 pt-px centralize bs
          br-50 box-border trans white-button sm:order-[-1] sm:mt-1 sm:mr-0 ${
            dropDown ? "rotate-180 pt-1" : "rotate-0"
          }`}
        >
          <ChevronDown {...iconLgStyles} />
        </button>
      </div>
      <ol className={`${css.list} ${listStyles}`}>
        <div className={`${css.wrapperList}`}>{renderItems(firstHalf, 0)}</div>
        <div className={`${css.wrapperList}`}>
          {renderItems(secondHalf, firstHalf.length)}
        </div>
      </ol>
    </section>
  );
};

export default Tutorial;
