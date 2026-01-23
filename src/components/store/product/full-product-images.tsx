import React from "react";

const array = [1, 2, 3, 4, 5, 6];

const css = {
  wrapper: `w-full crop`,
  p: ``,
  button: ``,
  scrollableDiv: "",
  img: "",
};

const FullProductImages = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.scrollableDiv}`}>
        {array.map((item) => (
          <div key={item} className={`${css.img}`} />
        ))}
      </div>
    </div>
  );
};

export {FullProductImages};
