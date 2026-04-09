import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import { Form, Icon, Input, InputWrapper, Label } from "@/components/ui";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

const css = {
  form: `w-full flex flex-col items-start gap-3 mb-5`,
};

const InfoForm = ({ id }: { id: number | string }): React.ReactElement => {
  return (
    <div className="w-full space-y-5 mt-4">
      <Form>
        <InputWrapper>
          <Label htmlFor={`nome-${id}`}>Nome</Label>
          <Textarea id={`nome-${id}`} placeholder="Digite o nome" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor={`price-${id}`}>Preço</Label>
          <Input type="text" id={`price-${id}`} placeholder="Ex.: 80" />
        </InputWrapper>
      </Form>

      <Button className="w-full shadow-xs/16" variant={"ghost"} >
        <Icon Svg={CircleCheckBig} size="md" />
        Salvar
      </Button>
    </div>
  );
};

export { InfoForm };
