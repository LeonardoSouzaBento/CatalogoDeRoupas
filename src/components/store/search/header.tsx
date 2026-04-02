"use client";
import Link from "next/link";
import { Button, Icon } from "@/components/ui";
import { X } from "lucide-react";

export const Header = ({
  seeButtonClose = true,
}: {
  seeButtonClose?: boolean;
}) => {
  return (
    <div
      className="h-14 px-3 sm:px-4 md:px-6 box-content flex items-center justify-between rounded-none 
  bg-linear-to-r from-primary-900 to-primary-800"
    >
      <div className="h-12 w-max flex-center">
        <h2 className="leading-none font-logo text-primary-50 font-normal">
          Roupas Online
        </h2>
      </div>

      {seeButtonClose && (
        <Button
          variant={"default"}
          size="icon"
          asChild
          className="rounded-full"
        >
          <Link href="/loja">
            <Icon Svg={X} />
          </Link>
        </Button>
      )}
    </div>
  );
};
