import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  ButtonsWrapper,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Icon,
  MuiIcon,
} from "@/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ProductMeasure, UserData } from "@/types/types";
import { CircleQuestionMark, Info, PenLine } from "lucide-react";

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];

export const MeasuresCard = ({ userData }: { userData: UserData }) => {
  const measuresData: ProductMeasure[] = [
    { type: "Camisa", value: userData.camisa },
    { type: "Calça", value: userData.calça },
    { type: "Calçado", value: userData.calçado },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon
            icon="square_foot"
            size="h4"
            fill
            className="mb-0.5 -ml-0.5"
          />
          <h3>Minhas medidas</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert>
          <Icon LucideIcon={Info} strokeWidth={"medium"} />
          <AlertTitle>
            <h6 className="font-medium">Recomendação</h6>
          </AlertTitle>
          <AlertDescription>
            <p>
              Defina suas medidas para podermos separar as peças mais
              rapidamente para você.
            </p>
          </AlertDescription>
        </Alert>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                {measuresData.map((measure) => (
                  <TableHead key={measure.type}>{measure.type}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {measuresData.map((measure) => (
                  <TableCell key={measure.type}>{measure.value}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <ButtonsWrapper className="grid grid-cols-1 gap-3 bp-704:grid-cols-2">
          <Button>
            <Icon LucideIcon={PenLine} size="md" />
            Atualizar Minhas Medidas
          </Button>
          <Button variant="outline">
            <Icon LucideIcon={CircleQuestionMark} size="lg" strokeWidth="light" />
            Ver Guia De Medidas
          </Button>
        </ButtonsWrapper>
      </CardContent>
    </Card>
  );
};
