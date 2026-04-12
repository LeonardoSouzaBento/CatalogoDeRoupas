import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input, InputWrapper, Label } from "@/components/ui";

const Price = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Preço</DialogTitle>
        </DialogHeader>
        <InputWrapper>
          <Label className="text-sm font-medium">Preço do produto</Label>
          <Input
            type="number"
            className="p-2 border rounded-md"
            placeholder="0,00"
          />
        </InputWrapper>
      </DialogContent>
    </Dialog>
  );
};

export { Price };
