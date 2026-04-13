import { Button, Icon, Input } from "@/components/ui";
import { Search } from "lucide-react";
import Link from "next/link";

export const SearchButton = () => {
  return (
    <Button
      asChild
      variant={"secondary"}
      size="lg"
      className="w-full max-w-xl mt-3 gap-3 justify-center p-0 pl-[0.9em] rounded-full shadow-xs/32 border-shadow"
    >
      <Link href={"/loja/produto/"}>
        <Icon Svg={Search} size="lg" className="text-muted-foreground" />
        <Input
          type="search"
          placeholder="O que você procura?"
          className={`flex-auto border-none bg-transparent leading-0! z-2 shadow-none p-0`}
        />
      </Link>
    </Button>
  );
};
