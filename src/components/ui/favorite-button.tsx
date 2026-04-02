"use client";
import React, { useState } from "react";
import { MuiIcon } from "./mui-icon";
import { Button } from "./button";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);
  const hearthColor = isFavorite ? "text-theme-600" : "text-card-foreground";

  function handleClickFavorite() {
    setIsFavorite((prev) => !prev);
    setFastReturn(true);
    let debounceId: ReturnType<typeof setTimeout>;
    let actionId: ReturnType<typeof setTimeout>;

    function handleClick() {
      clearTimeout(debounceId);
      clearTimeout(actionId);

      debounceId = setTimeout(() => {
        actionId = setTimeout(() => {
          setFastReturn(false);
        }, 1800);
      }, 300);
    }
    handleClick();
  }

  return (
    <div
      className="absolute bottom-2 right-2 z-2 py-1 pr-1 flex-center rounded-full"
      style={{
        backgroundColor: fastReturn ? "var(--color-light-bg)" : "transparent",
        boxShadow: fastReturn ? "var(--shadow-sm)" : "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleClickFavorite();
      }}
    >
      {fastReturn && (
        <span className="pl-5 pr-2 font-medium">
          {isFavorite ? "Salvo!" : "Removido!"}
        </span>
      )}
      <Button
        variant="transparent"
        size="icon"
        className="rounded-full shadow-xs bg-light-bg hover:bg-light-bg"
      >
        <MuiIcon
          icon="favorite"
          size="3xl"
          weight={350}
          className={`mt-1.25 scale-96 ${hearthColor}`}
          fill={isFavorite ? true : false}
        />
      </Button>
    </div>
  );
};

export { FavoriteButton };
