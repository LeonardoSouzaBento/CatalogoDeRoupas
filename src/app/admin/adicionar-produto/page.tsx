import AddProductCore from '@/components/admin/add-product-core';
import { PageHeader, PageHeaderWrapper, PageTitle } from '@/components/ui';

// const specificProperties = [
//   { name: "Nome" },
//   { name: "Marca", options: "" },
//   { name: "Cor principal", options: "" },
//   { name: "Diferencial", options: "" },
//   { name: "Idade da criança", options: "", type: "number" },
//   { name: "Padrão de aparência secundário", options: "" },
//   { name: "Preço", type: "number" },
//   { name: "Descrição" },
// ];

const page = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderWrapper>
          <PageTitle className="md:px-0 md:max-w-3xl lg:max-w-4xl">Cadastrar Produtos</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>

      <AddProductCore />
    </>
  );
};

export default page;
