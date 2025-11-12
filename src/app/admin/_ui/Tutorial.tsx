"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { icon2LgStyles } from "@/app/lucideIconStyles";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  steps: string[];
  listStyles?: string;
  itemStyles?: string;
}

const css = {
  section: `
    basic-card-style max-w-3xl lg:max-w-4xl mx-auto
    bg-gradient-to-br from-white to-gray-50 relative crop
  `,
  list: `flex flex-col j-start`,
  wrapperList: `w-full text-gray-700`,
  itemList: ` w-full min-h-10 hover:bg-blue-50 trans mb-0 cursor-default break-words`,
};

const Tutorial = ({ title, steps, listStyles, itemStyles }: Props) => {
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
    <section className={`${css.section} ${dropDown ? "h-auto" : "h-19"}`}>
      <HeaderCard title={`Saiba ${title}`} icon="info" spanStyles="line-span zoom-out-span font-[550]!"/>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDropDown((prev) => !prev);
        }}
        className={`size-9 px-0 pt-px centralize absolute top-[10px] right-[10px] 
         br-50 box-border trans`}
      >
        <div
          className={`wrapper-icon trans ${
            dropDown ? "rotate-180 pt-1" : "rotate-0"
          }`}
        >
          <ChevronDown {...icon2LgStyles} strokeWidth={2}/>
        </div>
      </button>
      <ol className={`${css.list} ${listStyles}`} >
        <div className={`${css.wrapperList}`}>{renderItems(firstHalf, 0)}</div>
        <div className={`${css.wrapperList}`}>
          {renderItems(secondHalf, firstHalf.length)}
        </div>
      </ol>
    </section>
  );
};

export default Tutorial;
