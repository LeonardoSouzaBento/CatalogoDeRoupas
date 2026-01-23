import { Input, Label } from "@/components/ui";
import React from "react";

const Name = () => {
  return (
    <div>
      <Label htmlFor="name">Nome completo</Label>
      <Input type="text" id="name" />
    </div>
  );
};

export { Name };

