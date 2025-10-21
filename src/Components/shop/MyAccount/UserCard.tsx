import Image from "next/image";

const UserCard = () => {
  const css = {
    wrapper: ``,
    wrapperImg: "h-14 w-14 br-lg",
    img: "size-full object-cover",
    name: "font-semibold ",
    email: `font-normal`,
    button: ``,
  };

  return (
    <div>
      <div className={`${css.wrapperImg}`}>
        <Image src={"/"} fill={true} alt="foto do usuario"/>
      </div>
      <p className={`${css.name}`}></p>
      <p className={`${css.email}`}></p>
    </div>
  );
};

export default UserCard;
