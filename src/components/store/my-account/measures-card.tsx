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
} from '@/components/ui';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ProductMeasure, UserData } from '@/types/types';
import { CircleQuestionMark, Info, PenLine } from 'lucide-react';

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];

const css = {
  wrapper: `w-full sm:w-auto flex flex-wrap max-[375px]:flex-col 
  border max-[375px]:border-b-transparent! mb-5 rounded-md crop`,
};

export const MeasuresCard = ({ userData }: { userData: UserData }) => {
  const measuresData: ProductMeasure[] = [
    { type: 'Camisa', value: userData.camisa },
    { type: 'Calça', value: userData.calça },
    { type: 'Calçado', value: userData.calçado },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="square_foot" size="h3" fill className="mb-0.5 -ml-0.5" />
          <h3>Minhas medidas</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert>
          <Icon LucideIcon={Info} strokeValue={'medium'} />
          <AlertTitle>
            <h6 className="font-medium">Recomendação</h6>
          </AlertTitle>
          <AlertDescription>
            <p>Defina suas medidas para podermos separar as peças mais rapidamente para você.</p>
          </AlertDescription>
        </Alert>
        <div className="border rounded-lg">
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
        <ButtonsWrapper>
          <Button>
            <Icon LucideIcon={PenLine} />
            Atualizar Minhas Medidas
          </Button>
          <Button variant="outline">
            <Icon LucideIcon={CircleQuestionMark} size="xl" />
            Ver Guia De Medidas
          </Button>
        </ButtonsWrapper>
      </CardContent>
    </Card>
  );
};
