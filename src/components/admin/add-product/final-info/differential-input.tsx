import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Icon, Input, InputWrapper, Label } from "@/components/ui";
import { Plus } from "lucide-react";

const Differential = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Diferencial</DialogTitle>
        </DialogHeader>
        <InputWrapper className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Informe o diferencial</Label>
          <Input type="text" placeholder="Ex: Tecido respirável" />
        </InputWrapper>
        <Button>
          <Icon Svg={Plus} size="lg" />
          Adicionar diferencial
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { Differential };
