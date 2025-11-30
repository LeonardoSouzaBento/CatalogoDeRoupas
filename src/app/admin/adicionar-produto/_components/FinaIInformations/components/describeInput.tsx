import React from "react";

const css = {
  wrapper: `flex flex-col`,
};

const DescriptionInput = () => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="description">Descrição</label>
      <textarea name="description" id="description" rows={4} />
    </div>
  );
};

export default DescriptionInput;
