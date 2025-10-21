import type { AddressSchema, ShopInfo } from "@src/types/types";

/* Dados da loja */
const defaultShopAddress : AddressSchema = {
  rua: "Rua Antonio Filomeno",
  numero: 123,
  complemento: "",
  bairro: "Nossa Senhora Do Carmo",
  cidade: "Caém",
  estado: "BA",
};

export const defaultShopInfo: ShopInfo = {
  name: "Minha Loja Online",
  address: defaultShopAddress,
  contact: "(34) 98412-5832",
  aboutText: [
    `Nosso objetivo é lhe oferecer peças que unem estilo, qualidade e conforto, para que você se sinta bem em qualquer ocasião.`,
    `Tornando a moda mais acessível: oferecemos uma plataforma com navegação simples, segura e prática, e um catálogo variado que vai desde peças básicas do dia a dia até opções mais sofisticadas para ocasiões especiais.`,
    `Selecionamos cuidadosamente os nossos produtos, sempre atentos às tendências, mas sem abrir mão do clássico e do atemporal. No nosso site você encontra mais do que roupas, encontra inspiração para se vestir melhor.`,
    `Na [Nome Da Sua Loja], cada detalhe é pensado para você. Desejamos vender, mas também queremos construir uma relação de confiança, oferecendo uma experiência de visitação positiva, prática e facilitada.`,
  ],
  urlMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.645384050795!2d-40.43701879862941!3d-11.091693430701477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ce50be0507481%3A0x8abcc8307f84985b!2sPra%C3%A7a%20Desembargador%20Souza%20Dias!5e0!3m2!1spt-BR!2sbr!4v1759400849290!5m2!1spt-BR!2sbr"
};
