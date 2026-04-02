import React from "react";

const array = [1, 2, 3, 4, 5, 6];

const FullProductImages = () => {
  return (
    <div className="w-full crop">
      <div>
        {array.map((item) => (
          <div key={item} className="" />
        ))}
      </div>
    </div>
  );
};

export {FullProductImages};
