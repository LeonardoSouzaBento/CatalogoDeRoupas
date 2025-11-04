export interface Measure {
  type: string | undefined;
  value: string | undefined | number;
}

const MeasureItem: React.FC<Measure> = ({ type, value }) => {
  const css = {
    wrapper: "w-1/3 max-[375px]:w-full flex flex-col border-r bs-color br-0",
    thEtd: "h-10 flex j-sart i-center box-border px-4",
    th: `font-medium text-left border-b bs-color max-[375px]:border-none bg-neutral-100`,
    td: "max-[375px]:border-b max-[375px]:border-gray-300",
  };

  return (
    <tr className={`${css.wrapper}`}>
      <th className={`${css.thEtd} ${css.th}`}>{type}</th>
      <td className={`${css.thEtd} ${css.td}`}>{value}</td>
    </tr>
  );
};

export default MeasureItem;
