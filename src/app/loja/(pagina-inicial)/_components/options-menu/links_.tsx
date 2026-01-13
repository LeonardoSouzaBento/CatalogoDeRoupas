import Link from "next/link";

const pageOptions = [
  {
    name: "Meus favoritos",
    link: "/loja/favoritos",
    icon: "favorite",
    iconStyles: "",
  },
  {
    name: "Minha Conta",
    link: "/loja/minha-conta",
    icon: "account_circle",
    iconStyles: "ml-[0px] ",
  },
];

const css = {
  wrapper: `w-full flex flex-col i-center j-start`,
  wrapperLink: `h-11 w-full flex i-center pl-6 gap-3 br-0 bg-transparent hover:bg-gray-100 hover:pl-4 transition-all duration-200`,
  link: `font-normal bg-transparent hover:bg-gray-100 px-0 hover:text-black transition-colors`,
};

const Links = () => {
  return (
    <div className={`${css.wrapper}`}>
      {pageOptions.map((item) => (
        <div key={item.name} className={`${css.wrapperLink}`}>
          <span className={`material-symbols-rounded ${item.iconStyles}`}>
            {item.icon}
          </span>
          <Link href={item.link} className={`${css.link}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
