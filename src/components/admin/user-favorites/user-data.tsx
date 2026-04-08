'use client';
import {
  CardHeader,
  CardTitle,
  MuiIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/index';
import { useUserContext } from '@/contexts/index';

const UserData = () => {
  const { userData } = useUserContext();

  return (
    <div className="rounded-md max-w-xl">
      <CardHeader data-slot="card-header" className="mb-0">
        <CardTitle data-card-title>
          <MuiIcon icon="user_attributes" size="h5" fill className="mb-px" />
          <h5>Dados do usuário</h5>
        </CardTitle>
      </CardHeader>
      <Table>
        <TableBody className="text-sm [&>tr>th]:max-w-max [&>tr>td]:max-w-max">
          {Object.entries(userData).map(([key, value]) => {
            const exeptions = ['posição', 'email', 'favoritos'];
            if (exeptions.includes(key)) return null;
            return (
              <TableRow key={key}>
                <TableHead className="capitalize">{key}</TableHead>
                <TableCell className="capitalize">{value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export { UserData };
