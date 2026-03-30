import {
  Button,
  CardHeader,
  CardTitle,
  Input,
  Icon,
  MuiIcon,
  Label,
  InputWrapper,
} from "@/components/ui";
import type { BooleanSetter } from "@/types/types";
import { Eye, EyeClosed, LogIn, X } from "lucide-react";
import { useState } from "react";

const css = { button: `h-11 w-full justify-center` };

const EmailForm = ({ setSeeEmailForm }: { setSeeEmailForm: BooleanSetter }) => {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  return (
    <div className="bg-light-bg z-3 relative">
      <Button
        className="absolute top-1 right-1"
        variant="transparent"
        size="icon"
        onClick={() => {
          setSeeEmailForm(false);
        }}
      >
        <Icon Svg={X} />
      </Button>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="mail" />
          <h3>Entre com email</h3>
        </CardTitle>
      </CardHeader>
      <InputWrapper className="mb-[18px]">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" placeholder="meuemail@email.com" />
      </InputWrapper>
      <InputWrapper className="mb-6 relative">
        <Label htmlFor="password">Senha</Label>
        <Input
          type={seePassword ? "text" : "password"}
          id="password"
          placeholder="Geramos uma, se preferir."
        />
        <div
          className={`absolute bottom-0 right-1`}
          onClick={() => {
            setSeePassword((prev) => !prev);
          }}
        >
          {seePassword ? <Icon Svg={EyeClosed} /> : <Icon Svg={Eye} />}
        </div>
      </InputWrapper>
      <Button className={`${css.button} mb-5`}>
        <Icon Svg={LogIn} />
        Entrar
      </Button>
      <Button
        className={`${css.button} h-10! font-light bg-light-bg  text-neutral-600`}
      >
        Esqueci minha senha
      </Button>
    </div>
  );
};

export { EmailForm };
