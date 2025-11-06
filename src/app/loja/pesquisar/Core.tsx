"use client";
import React, { useState } from "react";
import SearchButton from "./_components/SearchButton";
import Suggestions from "./_components/Suggestions";
import UserGenders from "./_components/UserGenders";
import ProductList from "./_components/ProductList";

const Core = () => {
  const [seeProductList, setSeeProductList] = useState<boolean>(false);

  return (
    <>
      {!seeProductList ? (
        <>
          <SearchButton />
          <UserGenders />
          <Suggestions />
        </>
      ) : (
        <ProductList />
      )}
    </>
  );
};

export default Core;
