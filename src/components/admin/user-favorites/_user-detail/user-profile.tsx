'use client';
import Image from 'next/image';

const UserProfile = () => {
  const css = {
    wrapper: `h-13 w-13 relative bg-neutral-100 round-lg crop`,
    img: `object-cover size-full`,
    p: '',
  };
  return (
    <div className={`${css.wrapper}`}>
      <Image src={'/'} fill={true} alt="Imagem do usúario" className={`${css.img}`} />
    </div>
  );
};

export { UserProfile };
