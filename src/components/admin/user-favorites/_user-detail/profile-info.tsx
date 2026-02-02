'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/index';
import { UserContext } from '@/contexts/index';
import { useContext } from 'react';

const ProfileInfo = () => {
  const { userData } = useContext(UserContext);

  const css = {
    wrapper: 'mb-5 rounded-lg bg-neutral-50 p-3',
  };

  return (
    <div className={`${css.wrapper}`}>
      <Table>
        <TableBody>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableCell>{userData.name}</TableCell>
          </TableRow>
          <TableRow className="*:capitalize">
            <TableHead>Sexo</TableHead>
            <TableCell>{userData.sex}</TableCell>
          </TableRow>
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
    </div>
  );
};

export { ProfileInfo };
