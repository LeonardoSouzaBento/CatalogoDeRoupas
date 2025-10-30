export interface Measure {
  type: string | undefined;
  value: string | undefined | number;
}

const MeasureItem: React.FC<Measure> = ({ type, value }) => {
  const css = {
    wrapperInfo: "w-1/3 max-[375px]:w-full flex flex-col border-r bs-color br-0",
    firstP: `font-medium py-1 px-4 border-b bs-color max-[375px]:border-none bg-neutral-50`,
    secondP: "max-[375px]:border-b max-[375px]:border-gray-300 pl-4 py-1",
  };

  return (
    <div className={`${css.wrapperInfo}`}>
      <p className={`${css.firstP}`}>{type}</p>
      <p className={`${css.secondP}`}>{value}</p>
    </div>
  );
};

export default MeasureItem;
