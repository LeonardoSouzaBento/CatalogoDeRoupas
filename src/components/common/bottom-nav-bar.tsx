"use client";
import { Button, Icon } from "@/components/ui";
import { Heart, Home, Search, User, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonType {
  LucideIcon: LucideIcon;
  name: string;
  link?: string;
  searchButton?: boolean;
}

const buttons: ButtonType[] = [
  { LucideIcon: User, name: "Minha Conta", link: "/loja/minha-conta" },
  { LucideIcon: Home, name: "Início", link: "/loja" },
  {
    LucideIcon: Search,
    name: "Buscar",
    searchButton: true,
    link: "/loja/pesquisar",
  },
  { LucideIcon: Heart, name: "Favoritos", link: "/loja/favoritos" },
];

const css = {
  mainWrapper:
    "w-full h-auto sticky bottom-0 left-0 z-4 bg-light-bg/75 backdrop-blur-xs border-t border-border/40",
  wrapper: "px-4 sm:px-6 max-w-212 mx-auto",
  nav: `h-14 w-full flex justify-between items-center
   flex-auto [&>button]:bg-light-bg/24`,
  button: `hover:bg-light-bg cursor-pointer gap-1.75`,
  searchButton: `min-w-30 w-1/3 max-w-64 justify-between lg:order-2 
  shadow-md/4 bg-light-bg/24 hover:scale-102 
  transition-all duration-300`,
};

const BottomNavBar = ({
  isMobile,
}: {
  isMobile: boolean;
}): React.ReactElement => {
  const pathname = usePathname();
  const selectedClass =
    "bg-selected-200/60 text-selected-900/85 hover:bg-light-bg";

  return (
    <>
      <div className={css.mainWrapper}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttons.map((button) => {
              const size = isMobile ? "icon" : "sm";
              const selected = pathname === button.link;

              return (
                <div key={button.name} className="flex flex-col gap-1 relative">
                  <Button
                    data-option
                    size={size}
                    variant={selected ? "secondary" : "transparent"}
                    className={`${css.button} ${selected ? selectedClass : ""}`}
                    asChild
                  >
                    <Link href={button.link || ""}>
                      <Icon
                        LucideIcon={button.LucideIcon}
                        strokeWidth={"medium"}
                        size={"lg"}
                        className="mb-0.5"
                        fill="var(--color-icon-fill)"
                      />
                      {isMobile ? null : button.name}
                    </Link>
                  </Button>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export { BottomNavBar };
