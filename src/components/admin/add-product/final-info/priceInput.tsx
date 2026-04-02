import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Price = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Preço</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
           <label className="text-sm font-medium">Preço do produto</label>
           <input type="number" className="p-2 border rounded-md" placeholder="0,00" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Price };
