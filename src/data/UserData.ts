import { GenderKey, UserData } from "@/types/types";

export const defaultUserData: UserData = {
  name: "Meu Nome",
  email: "meuemail@email.com",
  sex: "M",
  position: "user",
  camisa: "M",
  calça: 40,
  calçado: 40,
};

export const userGenders: GenderKey[] = ["masculino", "feminino", "infantil"];

export const mostSearched = {
  masculino: [
    "Camisa Básica",
    "Camisa Polo",
    "Short Jeans",
    "Calça Jeans",
    "Regata",
    "Cueca",
    "Meia",
  ],
  feminino: [
    "Camisa Básica",
    "Short Jeans",
    "Calça Jeans",
    "Vestido Casual",
    "Saia",
    "Regata",
    "Calça Legging",
  ],
};
