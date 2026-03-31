import Link from "next/link";
import { Button, MuiIcon } from "@/components/ui";
import { HomeContext } from "@/contexts/index";
import { useContext } from "react";

const optionButtons = [
  {
    name: "editar esta página",
    icon: "edit",
    iconStyles: "",
    setEditMode: true,
  },
  {
    name: "adicionar produto",
    url: "/admin/adicionar-produto",
    icon: "add_circle",
    iconStyles: "",
  },
  {
    name: "atualizar produtos",
    url: "/admin/atualizar-produto",
    icon: "edit_note",
    iconStyles: "-ml-1.25",
  },
  {
    name: "ver favoritos do usuário",
    url: "/admin/favoritos-do-usuario",
    icon: "favorite",
    iconStyles: "",
  },
];

const AdministrationOptions = () => {
  const { setHomeEditMode } = useContext(HomeContext);

  return (
    <>
      {optionButtons.map((item) => (
        <Button
          data-less-pl
          className="w-full justify-start"
          variant="transparent"
          key={item.name}
          asChild
          onClick={() => item.setEditMode && setHomeEditMode(true)}
        >
          <Link href={item.url || "#"}>
            <MuiIcon
              icon={item.icon}
              fill
              className={`text-theme ${item.iconStyles}`}
              size={item.name === "atualizar produtos" ? "2xl" : "lg"}
            />
            {item.name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export { AdministrationOptions };
