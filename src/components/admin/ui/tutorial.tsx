"use client";
import { Button, Card, CardHeader, CardTitle, Icon } from "@/components/ui";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  steps: string[];
}

const css = {
  itemList: ` w-full hover:bg-blue-50 transition-300 mb-0 cursor-default break-words`,
};

const Tutorial = ({ title, steps }: Props) => {
  const [expand, setExpand] = useState(false);

  const middle = Math.ceil(steps.length / 2);
  const firstHalf = steps.slice(0, middle);
  const secondHalf = steps.slice(middle);

  const renderItems = (items: string[], startIndex: number) =>
    items.map((item, index) => (
      <li key={index} className={`${css.itemList}`}>
        <strong>{startIndex + index + 1}</strong> - {item}
      </li>
    ));

  return (
    <Collapsible open={expand} onOpenChange={setExpand}>
      <Card className="crop relative pb-0 pt-3.5">
        <div className="w-full flex justify-between gap-2.5 sm:justify-start">
          <CollapsibleTrigger asChild>
            <Button
              size={"icon-sm"}
              variant={"secondary"}
              className={`rounded-full -ml-1 pt-px ${
                expand ? "rotate-180" : "rotate-0 pl-px"
              }`}
            >
              <Icon Svg={ChevronDown} strokeWidth="thin" size="lg" />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleTrigger asChild>
            <CardHeader className="h-full cursor-pointer [*]:[cursor-pointer] select-none">
              <CardTitle>
                <h5>Saiba {title}</h5>
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <ol
            className={`flex flex-col justify-start [&>div]:w-full text-muted-foreground pb-4 text-sm`}
          >
            <div>{renderItems(firstHalf, 0)}</div>
            <div>{renderItems(secondHalf, firstHalf.length)}</div>
          </ol>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export { Tutorial };
