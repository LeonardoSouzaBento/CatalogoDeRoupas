// ProductTable.tsx
'use client';
import React, { useMemo } from 'react';
import { TablePart } from './table-part';

type Field = {
  key: string;
  label: string;
  value: string;
};

const fields: Field[] = [
  // Coluna 1
  { key: 'nome', label: 'Nome', value: '' },
  { key: 'preco', label: 'Preço', value: '' },
  { key: 'genero', label: 'Gênero', value: '' },
  { key: 'modelagem', label: 'Modelagem', value: '' },
  { key: 'tamanhos_disponiveis', label: 'Tamanhos disponíveis', value: '' },
  { key: 'marca', label: 'Marca', value: '' },
  { key: 'e_infantil', label: 'É infantil', value: '' },
  { key: 'categoria', label: 'Categoria', value: '' },
  { key: 'subcategoria', label: 'Subcategoria', value: '' },
  
  // Coluna 2
  { key: 'id', label: 'ID', value: '(criado automaticamente)' },
  { key: 'cor_principal', label: 'Cor principal', value: '' },
  { key: 'composicao', label: 'Composição', value: '' },
  { key: 'padrao_principal', label: 'Padrão principal', value: '' },
  { key: 'padrao_secundario', label: 'Padrão secundário', value: '' },
  { key: 'estampa', label: 'Estampa', value: '' },
  { key: 'idade_crianca', label: 'Idade da criança', value: '' },
  { key: 'diferencial', label: 'Diferencial', value: '' },
  { key: 'descricao', label: 'Descrição', value: '' },
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
    <div className="grid grid-cols-1 sm:grid-cols-2 crop rounded-md">
      <TablePart
        items={items}
        fields={col1}
        wrapperClass={`border-b 
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


