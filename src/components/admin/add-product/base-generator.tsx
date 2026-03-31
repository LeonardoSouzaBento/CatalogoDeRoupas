import { MuiIcon } from "@/components/ui";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BaseGenCore } from "./base-generator/base-gen-core";

const BaseGenerator = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="gap-2">
          <MuiIcon icon="edit_note" size="h3" weight={500} fill />
          <h4>Informações básicas</h4>
        </CardTitle>
        <CardDescription>
          Defina cada característica ou escolha uma roupa básica
        </CardDescription>
      </CardHeader>
      <BaseGenCore />
    </Card>
  );
};

export { BaseGenerator };

