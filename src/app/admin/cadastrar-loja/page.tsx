import RegisterStoreCore from '@/components/admin/register-store-core';
import { PageHeader, PageTitle } from '@/components/ui';

const page = () => {
  return (
    <>
      <PageHeader>
        <PageTitle className="max-w-[554px]">Cadastrar minha loja</PageTitle>
      </PageHeader>
      <div className="px-3 pb-8 m-auto max-w-[576px]">
        <RegisterStoreCore />
      </div>
    </>
  );
};

export default page;
