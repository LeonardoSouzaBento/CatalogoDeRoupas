import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label, Textarea } from '@/components/ui';

const css = {
  wrapper: `flex flex-col`,
};

const Description = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Descrição</DialogTitle>
        </DialogHeader>
        <div className={css.wrapper}>
          <Label htmlFor="description" className="mb-2 text-sm font-medium">
            Descrição do produto
          </Label>
          <Textarea
            name="description"
            id="description"
            rows={4}
            className="p-2 border rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Description };
