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
  Separator,
} from '@/components/ui';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UserData } from '@/types/types';
import { CircleQuestionMark, Info, Pen, PenLine } from 'lucide-react';
import React from 'react';

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];

const css = {
  wrapper: `w-full sm:w-auto flex flex-wrap max-[375px]:flex-col 
  border max-[375px]:border-b-transparent! mb-5 rounded-md crop`,
};

export const MeasuresCard = ({ userData }: { userData: UserData }) => {
  const measuresData: Measure[] = [
    { type: 'Camisa', value: userData.camisa },
    { type: 'Calça', value: userData.calça },
    { type: 'Calçado', value: userData.calçado },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="square_foot" size="h3" fill={1} className='mb-0.5 -ml-0.5' />
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
            Definir suas medidas é importante para mostrarmos roupas preferencialmente do seu
            tamanho
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
          <Button variant="outline" size="outline">
            <Icon LucideIcon={CircleQuestionMark} size="xl" />
            Ver Guia De Medidas
          </Button>
        </ButtonsWrapper>
      </CardContent>
    </Card>
  );
};

/* measure item */
interface Measure {
  type: string | undefined;
  value: string | undefined | number;
}

const MeasureItem = ({ type, value }: Measure) => {
  const css = {
    wrapper: `w-1/3 max-[375px]:w-full flex flex-col min-[375px]:border-r 
      min-[375px]:border-gray-300 mr-md crop last:border-none`,
    thEtd: 'h-10 flex j-sart i-center box-border px-4',
    th: `font-normal text-neutral-900 text-left border-b border 
    max-[375px]:border-none bg-neutral-100`,
    td: 'max-[375px]:border-b max-[375px]:border-gray-300',
  };

  return (
    <tr className={`${css.wrapper}`}>
      <th className={`${css.thEtd} ${css.th}`}>{type}</th>
      <td className={`${css.thEtd} ${css.td}`}>{value}</td>
    </tr>
  );
};
