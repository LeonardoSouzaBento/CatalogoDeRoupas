import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, Ghost } from "lucide-react";
import { Icon } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 text-center">
      <div className="relative mb-4">
        <Ghost size={120} className="text-primary-200 animate-bounce" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-primary-900/10 rounded-[100%] blur-md" />
      </div>

      <h1 className="text-h1 font-bold text-primary-900 mb-2">404</h1>
      <h2 className="text-h4 font-semibold text-primary-800 mb-4">
        Página não encontrada
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Ops! Parece que as roupas que você está procurando saíram de estoque ou
        o link está quebrado.
      </p>

      <Button
        asChild
        variant="outline"
        size={"lg"}
        className="shadow-primary-900/10 active:scale-95 transition-transform"
      >
        <Link href="/">
          <Icon Svg={MoveLeft} size="md" />
          Voltar para o Início
        </Link>
      </Button>
    </div>
  );
}
