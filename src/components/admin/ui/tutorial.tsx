'use client';
import { useRef } from 'react';
import { ResizableCardTitle } from './resizable-card-title';
import { Card, CardHeader, CardTitle, MuiIcon } from '@/components/ui';

interface Props {
  title: string;
  steps: string[];
  resizeCount: number;
  cssList?: string;
  itemCss?: string;
  pb?: number;
}

const css = {
  itemList: ` w-full min-h-10 hover:bg-blue-50 transition-300 mb-0 cursor-default break-words`,
};

const Tutorial = ({ title, steps, cssList, itemCss, pb, resizeCount }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const middle = Math.ceil(steps.length / 2);
  const firstHalf = steps.slice(0, middle);
  const secondHalf = steps.slice(middle);

  const renderItems = (items: string[], startIndex: number) =>
    items.map((item, index) => (
      <li key={index} className={`${css.itemList} ${itemCss}`}>
        <strong>{startIndex + index + 1}</strong> - {item}
      </li>
    ));

  return (
    <Card ref={cardRef} className="crop relative">
      <ResizableCardTitle cardRef={cardRef} resizeCount={resizeCount} pb={pb}>
        <CardHeader>
          <CardTitle>
            <MuiIcon icon="info" size="xl" />
            <h3>Saiba {title}</h3>
          </CardTitle>
        </CardHeader>
      </ResizableCardTitle>

      <ol className={`flex flex-col justify-start [&>div]:w-full text-muted-foreground ${cssList}`}>
        <div>{renderItems(firstHalf, 0)}</div>
        <div>{renderItems(secondHalf, firstHalf.length)}</div>
      </ol>
    </Card>
  );
};

export { Tutorial };
