import AddProductCore from '@/components/admin/add-product-core';
import { PageHeader, PageTitle } from '@/components/ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Tutorial } from '@/components/admin/ui/tutorial';

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

const css = { wrapper: `px-3 pb-6 bg-gray-50` };

const page = () => {
  return (
    <>
      <PageHeader>
        <PageTitle className="md:px-0 md:max-w-3xl lg:max-w-4xl">Cadastrar Produtos</PageTitle>
      </PageHeader>
      <div className={`${css.wrapper}`}>
        <div className={`max-w-3xl lg:max-w-4xl mx-auto`}>
          <Alert variant="destructive" className="card-styles border-none p-6 bg-white">
            <AlertCircle />
            <AlertDescription>
              Registre um tipo de peça de cada vez. Por exemplo: primeiro as camisetas básicas
              lisas, depois as camisas polos, e assim por diante. Isso facilita o cadastro e evita
              confusão.
            </AlertDescription>
          </Alert>
          <Tutorial
            title="como cadastrar"
            steps={[
              'Adicione as fotos.',
              'Defina o gênero.',
              'Caso queira, defina uma roupa base, se houver.',
              'Defina as informações básicas.',
              'Defina as informações especificas.',
              "Confira todas as informações e depois clique em 'Salvar' para concluir o cadastro.",
            ]}
            listStyles={`sm:flex-row sm:gap-4`}
            itemStyles="sm:mb-2"
          />
        </div>

        <AddProductCore />
      </div>
    </>
  );
};

export default page;
