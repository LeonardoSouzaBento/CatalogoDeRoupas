"use client";

import { Button, Icon, Input } from "@/components/ui";
import { StateSetter } from "@/types";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  resizeCount: number;
  setSeeOptionsSection: StateSetter<boolean>;
}

export const Header = ({ resizeCount, setSeeOptionsSection }: Props) => {
  const [isMobile, setisMobile] = useState<boolean>(false);
  function getIsMobile() {
    setisMobile(
      window.innerWidth < 530 ||
        (window.innerWidth > 640 && window.innerWidth < 768),
    );
  }
  useEffect(() => {
    getIsMobile();
  }, []);

  useEffect(() => {
    getIsMobile();
  }, [resizeCount]);

  return (
    <header
      className="w-full pt-5 pb-6 px-4 sm:px-6 md:px-8 lg:px-10 bg-linear-to-br 
    from-primary-800 via-primary-700 to-theme-700 relative h-max z-6 flex-center"
    >
      <div
        className={`w-full max-w-3xl grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr] justify-start items-center`}
      >
        <div className={`flex flex-col items-start rounded-none`}>
          <h1 className={`leading-none mb-1 font-logo text-white font-light`}>
            Roupas Online
          </h1>
          <p
            className={`leading-none text-white font-extralight pr-0.5 text-sm`}
          >
            Guardamos suas curtidas
          </p>
        </div>
        <div className={`w-full relative flex-center gap-6`}>
          <div className="w-full relative shadow-sm rounded-full *:rounded-full crop">
            <div className="relative">
              <Link
                href={"/loja/pesquisar"}
                className="absolute size-full z-2"
              />
              <Input
                placeholder="Buscar"
                className="h-11 w-full bg-linear-to-br from-light-bg/86 to-light-bg/88
                border-none outline-none pl-12 bg-transparent"
              />
            </div>
            <Button
              size={"icon-md"}
              variant={"secondary"}
              className="absolute left-1 top-1 z-2 text-primary-950"
            >
              <Icon LucideIcon={Search} size="lg" className="mb-0.5" />
            </Button>
          </div>
          <Button
            onClick={() => {
              setSeeOptionsSection(true);
            }}
            size={isMobile ? "icon-lg" : "sm"}
            className="max-sm:absolute max-sm:-top-16 
            max-sm:right-0 sm:relative shadow-sm 
            rounded-full"
          >
            <Icon
              LucideIcon={Menu}
              className="mb-px ml-px"
              size="lg"
              strokeWidth="light"
            />
            {!isMobile && "Mais opções"}
          </Button>
        </div>
      </div>
    </header>
  );
};
