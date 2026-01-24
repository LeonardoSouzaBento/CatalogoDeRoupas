'use client';

const css = {
  wrapperDesc: `border p-5 pt-4 pb-5`,
};

interface DescriptionProps {
  selectedName: string;
}

const Description = ({ selectedName }: DescriptionProps) => {
  const [firstPart, restPart] = selectedName
    ? selectedName.split(/–(.+)/).map((s) => s.trim())
    : ['', ''];

  return (
    <div className={css.wrapperDesc}>
      <p className="text-gray-800 font-semibold mb-1 ">Descrição completa: </p>
      <p className="text-gray-800 ">
        {selectedName ? (
          <>
            {firstPart} - {restPart}
          </>
        ) : (
          <strong className="font-normal">Selecione um item caso queira</strong>
        )}
      </p>
    </div>
  );
};

export { Description };
