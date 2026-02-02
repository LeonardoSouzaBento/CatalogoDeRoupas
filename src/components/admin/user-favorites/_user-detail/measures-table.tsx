import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '@/components/ui';
import type { UserData } from '@/types/types';

const MeasuresTable = ({ userData }: { userData: UserData }) => {
  return (
    <Table>
      <TableCaption className="text-left pl-2">Medidas</TableCaption>
      <TableBody>
        <TableRow>
          <TableHead>Camisa</TableHead>
          <TableCell>{userData.camisa}</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Calça</TableHead>
          <TableCell>{userData.calça}</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Calçado</TableHead>
          <TableCell>{userData.calçado}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { MeasuresTable };

