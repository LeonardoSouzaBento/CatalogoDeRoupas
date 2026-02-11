const Logo = () => {
  return (
    <header className="w-full h-max relative">
      <div
        className={`w-full h-max pt-3 pb-4 flex-center flex-col z-6 rounded-none 
        absolute top-0 left-0 bg-linear-to-br from-primary-950/25 to-transparent`}>
        <h2 className={`leading-none mb-1 font-logo text-primary-50 font-normal`}>Roupas Online</h2>

        <p className={`leading-none text-primary-50/86 font-light text-sm`}>Guardamos suas curtidas</p>
      </div>
    </header>
  );
};

export { Logo };

