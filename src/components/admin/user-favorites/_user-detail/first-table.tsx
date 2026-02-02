import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/index';
import type { UserData } from '@/types/types';

const FirstTable = ({ userData }: { userData: UserData }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Sexo</TableHead>
        </TableRow>
        <TableRow className="*:capitalize">
          <TableCell>{userData.name}</TableCell>
          <TableCell>{userData.sex}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export { FirstTable };
