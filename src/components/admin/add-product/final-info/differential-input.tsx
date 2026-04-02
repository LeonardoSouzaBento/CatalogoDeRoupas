import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Differential = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Diferencial</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
           <label className="text-sm font-medium">Informe o diferencial</label>
           <input type="text" className="p-2 border rounded-md" placeholder="Ex: Tecido respirável" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Differential };
