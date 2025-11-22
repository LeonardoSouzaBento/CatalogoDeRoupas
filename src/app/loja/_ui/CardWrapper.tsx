import React from "react";

const CardWrapper = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <div
      className={`card-styles ${styles}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
