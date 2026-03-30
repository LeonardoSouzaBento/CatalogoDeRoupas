import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import { Form, Icon, Input, InputWrapper, Label } from "@/components/ui";
import React from "react";

const css = {
  form: `w-full flex flex-col items-start gap-3 mb-5`,
};

const InfoForm = ({ id }: { id: number | string }): React.ReactElement => {
  return (
    <div className="w-full space-y-5">
      <Form>
        <InputWrapper>
          <Label htmlFor={`nome-${id}`}>Nome</Label>
          <Input type="text" id={`nome-${id}`} placeholder="Digite o nome" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor={`price-${id}`}>Preço</Label>
          <Input type="text" id={`price-${id}`} placeholder="Ex.: 80" />
        </InputWrapper>
      </Form>

      <Button className="w-full">
        <Icon Svg={CircleCheckBig} />
        Salvar
      </Button>
    </div>
  );
};

export { InfoForm };
