'use client';
import React, { useState } from 'react';
import { MuiIcon } from './mui-icon';
import { Button } from './button';

const css = {
  wrapper: `absolute bottom-2 right-2 z-2 py-1 pr-1 flex-center rounded-full`,
  fastReturn: `pl-5 pr-2 font-medium`,
  wrapperIcon: `h-full min-w-10 w-max flex-center gap-3 fast-trans`,
};

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);
  const hearthColor = isFavorite ? 'text-theme-600' : 'text-card-foreground';
  function handleClickFavorite() {
    setIsFavorite((prev) => !prev);
    setFastReturn(true);
    setTimeout(() => setFastReturn(false), 1800);
  }
  return (
    <div
      className={css.wrapper}
      style={{
        backgroundColor: fastReturn ? 'var(--color-light-bg)' : 'transparent',
        boxShadow: fastReturn ? 'var(--shadow-sm)' : 'none',
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleClickFavorite();
      }}>
      {fastReturn && <span className={css.fastReturn}>{isFavorite ? 'Salvo!' : 'Removido!'}</span>}
      <Button variant="transparent" size="icon-lg" className="rounded-full shadow-sm bg-light-bg">
        <MuiIcon
          icon="favorite"
          size="3xl"
          weight={400}
          className={`mt-0.75 ${hearthColor}`}
          fill={isFavorite ? true : false}
        />
      </Button>
    </div>
  );
};

export { FavoriteButton };
