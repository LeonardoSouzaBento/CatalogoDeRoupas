import React from 'react'
import ZapFixedButton from "@/app/loja/_ui/ZapFixedButton";
import Header from "./_components/Header";
import SearchButton from "./_components/SearchButton";
import UserGenders from "./_components/UserGenders";
import Suggestions from "./_components/Suggestions";

const Core = () => {
  return (
    <>
      <Header />
      <div className="px-3">
        <SearchButton />
        <UserGenders />
        <Suggestions />
        <ZapFixedButton />
      </div>
    </>
  )
}

export default Core;
