'use client';
import { useState } from 'react';
import { ResizableCardTitle } from './resizable-card-title';
import { CardHeader, CardTitle, MuiIcon } from '@/components/ui';

interface Props {
  title: string;
  steps: string[];
  listStyles?: string;
  itemStyles?: string;
}

const css = {
  section: `
    card-styles bg-white relative crop
  `,
  wrapperTitle: `flex justify-between gap-4 sm:justify-start`,
  button: `h-8 min-w-8 -mr-2 px-0 pt-px flex-center border
  rounded-full box-border default-transition  sm:mt-1 sm:mr-0`,
  list: `flex flex-col j-start`,
  wrapperList: `w-full text-gray-700`,
  itemList: ` w-full min-h-10 hover:bg-blue-50 default-transition mb-0 cursor-default break-words`,
};

const Tutorial = ({ title, steps, listStyles, itemStyles }: Props) => {
  /* estados para expandir */
  const [expand, setExpand] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string | null>('');

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
    <section className={`${css.section}`} style={{ height: expand ? 'auto' : divHeight || 'auto' }}>
      <ResizableCardTitle
        expand={expand}
        setExpand={setExpand}
        setDivHeight={setDivHeight}
        valueToFixHeight={10}>
        <CardHeader>
          <CardTitle>
            <MuiIcon icon="info" />
            <h3>Saiba {title}</h3>
          </CardTitle>
        </CardHeader>
      </ResizableCardTitle>

      <ol className={`${css.list} ${listStyles}`}>
        <div className={`${css.wrapperList}`}>{renderItems(firstHalf, 0)}</div>
        <div className={`${css.wrapperList}`}>{renderItems(secondHalf, firstHalf.length)}</div>
      </ol>
    </section>
  );
};

export { Tutorial };
