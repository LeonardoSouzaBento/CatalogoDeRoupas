import Image from "next/image";

const Images = () => {
  const nameFile = "Principal: ";
  const nameFile2 = "Menor: ";

  return (
    <div
      className={`h-auto w-full flex flex-col gap-3 sm:gap-2
        sm:flex-row mb-5`}
    >
      <ImageAndName url="/home" nameFile={nameFile2} menor={true}/>
      <ImageAndName url="/home" nameFile={nameFile} />
    </div>
  );
};

export default Images;

const ImageAndName = ({
  nameFile,
  url,
  menor,
}: {
  nameFile: string;
  url: string;
  menor?: boolean;
}) => {
  const css = {
    wrapper: "w-full sm:w-1/2 relative flex",
    wrapperImg: "h-25 min-w-21 bg-gray-100 crop br-md",
    img: "size-full object-contain box-border p-2",
    wrapperNameFile: "w-full max-h-25 box-border p-2 br-0 crop",
    nameFile: "break-all text-[0.91em]",
  };

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperImg} ${menor && "min-w-16!"}`}>
        <Image src={url} fill={true} alt="..." className={`${css.img}`} />
      </div>

      <div className={`${css.wrapperNameFile}`}>
        <p className={`${css.nameFile}`}>{nameFile}</p>
      </div>
    </div>
  );
};
