// ProductTable.tsx
'use client';
import React, { useMemo } from 'react';
import { TablePart } from './table-part';

const css = {
  grid: `px-5 py-2 grid grid-cols-1 sm:grid-cols-2 crop round-md border`,
  wrapper: `bg-white round-none `,
  row: `h-9.5 flex flex-row justify-between items-center border-b border-gray-200 last:border-none
  round-none`,
  label: ` font-medium text-gray-800 w-40`,
  value: `text-gray-700 flex-1 text-right round-none`,
  voidValue: `font-semibold text-gray-400 text-right`,
};

type Field = {
  key: string;
  label: string;
  value: string;
};

const fields: Field[] = [
  // Coluna 1
  { key: 'id', label: 'ID', value: '' },
  { key: 'nome', label: 'Nome', value: '' },
  { key: 'modelagem', label: 'Modelagem', value: '' },
  { key: 'marca', label: 'Marca', value: '' },
  { key: 'genero', label: 'Gênero', value: '' },
  { key: 'e_infantil', label: 'É infantil', value: '' },
  { key: 'idade_crianca', label: 'Idade da criança', value: '' },
  { key: 'categoria', label: 'Categoria', value: '' },
  { key: 'subcategoria', label: 'Subcategoria', value: '' },

  // Coluna 2
  { key: 'cor_principal', label: 'Cor principal', value: '' },
  { key: 'preco', label: 'Preço', value: '' },
  { key: 'composicao', label: 'Composição', value: '' },
  { key: 'padrao_principal', label: 'Padrão principal', value: '' },
  { key: 'padrao_secundario', label: 'Padrão secundário', value: '' },
  { key: 'estampa', label: 'Estampa', value: '' },
  { key: 'diferencial', label: 'Diferencial', value: '' },
  { key: 'descricao', label: 'Descrição', value: '' },
  { key: 'tamanhos_disponiveis', label: 'Tamanhos disponíveis', value: '' },
  { key: 'criado_em', label: 'Criado em', value: '' },
  { key: 'atualizado_em', label: 'Atualizado em', value: '' },
];

// índices onde será feita a divisão em colunas
const splitIndex = 9; // até subcategoria → coluna 1, o restante coluna 2

const col1 = fields.slice(0, splitIndex);
const col2 = fields.slice(splitIndex);

const buildEmptyItem = (): Record<string, string> =>
  fields.reduce(
    (acc, f) => {
      acc[f.key] = f.value;
      return acc;
    },
    {} as Record<string, string>,
  );

const ProductTable: React.FC<{ initialItems?: Record<string, string>[] }> = ({ initialItems }) => {
  const items = useMemo(() => initialItems ?? [buildEmptyItem()], [initialItems]);

  return (
    <div className={css.grid}>
      <TablePart
        items={items}
        fields={col1}
        wrapperClass={`border-b border 
            sm:border-b-0 sm:pr-4`}
      />
      <TablePart
        items={items}
        fields={col2}
        wrapperClass={`sm:border-l sm:border-gray-300
        sm:pl-4`}
      />
    </div>
  );
};

export { ProductTable, fields };
