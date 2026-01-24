'use client';
import React, { useState } from 'react';
import { MuiIcon } from './mui-icon';
import { Button } from './button';

const css = {
  wrapper: `absolute bottom-3 right-3 z-1 flex-center shadow-sm rounded-full`,
  pReturn: `pb-[1px] font-normal`,
  wrapperIcon: `h-full min-w-10 w-max flex-center gap-3 fast-trans`,
};

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);

  function handleClickFavorite() {
    setIsFavorite((prev) => !prev);
    setFastReturn(true);
    setTimeout(() => setFastReturn(false), 1800);
  }
  return (
    <div className={css.wrapper}>
      {fastReturn && <span className={css.pReturn}>{isFavorite ? 'Salvo!' : 'Removido!'}</span>}
      <Button
        variant="transparent"
        size="icon"
        className="round-full"
        onClick={(e) => {
          e.stopPropagation();
          handleClickFavorite();
        }}>
        <MuiIcon icon="favorite" size="3xl" weight={400} className="pt-0.5" />
      </Button>
    </div>
  );
};

export { FavoriteButton };
