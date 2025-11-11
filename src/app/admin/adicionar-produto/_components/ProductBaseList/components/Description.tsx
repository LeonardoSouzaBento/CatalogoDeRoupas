"use client";

const css = {
  wrapperDesc: `mb-5 bg-white bg-gradient-to-t from-gray-50/80 to-white bs-light p-5 br-lg`,
};

interface DescriptionProps {
  selectedName: string;
}

const Description = ({ selectedName }: DescriptionProps) => {
  const [firstPart, restPart] = selectedName
    ? selectedName.split(/–(.+)/).map((s) => s.trim())
    : ["", ""];

  return (
    <div className={css.wrapperDesc}>
      <p className="text-gray-800 font-semibold tracking-wide mb-3">Descrição: </p>
      <p className="text-gray-800">
        {selectedName ? (
          <>
            {firstPart} {restPart}
          </>
        ) : (
          <strong className="font-normal">
            Selecione um item caso queira
          </strong>
        )}
      </p>
    </div>
  );
};

export default Description;
