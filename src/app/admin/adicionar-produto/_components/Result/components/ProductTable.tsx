// ProductTable.tsx
"use client";
import React, { useMemo } from "react";

const css = {
  container: `rounded-md `,
  grid: `p-5 grid grid-cols-1 sm:grid-cols-2 crop br-md bs`,
  wrapper: `bg-white br-0 `,
  row: `h-9 flex flex-row justify-between items-center border-b border-gray-200 last:border-none
  br-0`,
  label: `text-sm font-semibold text-gray-800 w-40`,
  value: `text-sm text-gray-700 flex-1 text-right br-0`,
};

type Field = {
  key: string;
  label: string;
  value: string;
};

const fields: Field[] = [
  // Coluna 1
  { key: "id", label: "ID", value: "" },
  { key: "nome", label: "Nome", value: "" },
  { key: "modelagem", label: "Modelagem", value: "" },
  { key: "marca", label: "Marca", value: "" },
  { key: "genero", label: "Gênero", value: "" },
  { key: "e_infantil", label: "É infantil", value: "" },
  { key: "idade_crianca", label: "Idade da criança", value: "" },
  { key: "categoria", label: "Categoria", value: "" },
  { key: "subcategoria", label: "Subcategoria", value: "" },

  // Coluna 2
  { key: "cor_principal", label: "Cor principal", value: "" },
  { key: "preco", label: "Preço", value: "" },
  { key: "composicao", label: "Composição", value: "" },
  { key: "padrao_principal", label: "Padrão principal", value: "" },
  { key: "padrao_secundario", label: "Padrão secundário", value: "" },
  { key: "estampa", label: "Estampa", value: "" },
  { key: "diferencial", label: "Diferencial", value: "" },
  { key: "descricao", label: "Descrição", value: "" },
  { key: "tamanhos_disponiveis", label: "Tamanhos disponíveis", value: "" },
  { key: "criado_em", label: "Criado em", value: "" },
  { key: "atualizado_em", label: "Atualizado em", value: "" },
];

// índices onde será feita a divisão em colunas
const splitIndex = 9; // até subcategoria → coluna 1, o restante coluna 2

const col1 = fields.slice(0, splitIndex);
const col2 = fields.slice(splitIndex);

const buildEmptyItem = (): Record<string, string> =>
  fields.reduce((acc, f) => {
    acc[f.key] = f.value;
    return acc;
  }, {} as Record<string, string>);

const ProductTable: React.FC<{ initialItems?: Record<string, string>[] }> = ({
  initialItems,
}) => {
  const items = useMemo(
    () => initialItems ?? [buildEmptyItem()],
    [initialItems]
  );

  return (
    <div className={css.container}>
      <div className={css.grid}>
        {/* Coluna 1 */}
        <div className={`${css.wrapper} border-b bs-color 
        sm:border-b-0 sm:pr-4`}>
          {items.map((item, i) =>
            col1.map((f) => (
              <div key={f.key + i} className={css.row}>
                <span className={css.label}>{f.label}</span>
                <span className={css.value}>{item[f.key] || "—"}</span>
              </div>
            ))
          )}
        </div>

        {/* Coluna 2 */}
        <div className={`${css.wrapper} sm:border-l sm:border-gray-300
        sm:pl-4`}>
          {items.map((item, i) =>
            col2.map((f) => (
              <div key={f.key + i} className={css.row}>
                <span className={css.label}>{f.label}</span>
                <span className={css.value}>{item[f.key] || "—"}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
export { fields };
