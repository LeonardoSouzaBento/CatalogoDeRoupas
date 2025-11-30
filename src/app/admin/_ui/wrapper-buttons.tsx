import React from "react";

const WrapperButtons = ({
  children,
  styles = "mb-5",
  grid = false,
}: {
  children: React.ReactNode;
  styles?: string;
  grid?: boolean;
}) => {
  return (
    <div
      className={`${
        !grid && `p-5 flex justify-start items-start flex-wrap gap-4`
      } ${styles}`}
    >
      {children}
    </div>
  );
};

export default WrapperButtons;
