import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Icon,
  MuiIcon,
} from "@/components/ui/index";
import { CircleCheckBig } from "lucide-react";

const SaveCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="bucket_check" size="h4" fill />
          <h3>Salvar produto</h3>
        </CardTitle>
      </CardHeader>
      <Button className="w-full mt-5">
        Salvar produto no catálogo
        <Icon Svg={CircleCheckBig} />
      </Button>
    </Card>
  );
};

export { SaveCard };
