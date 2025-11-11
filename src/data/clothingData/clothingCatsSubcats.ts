interface CatSubcats {
  [categoryName: string]: string[];
}

interface ClothingCatsSubcats {
  masculino: CatSubcats;
  feminino: CatSubcats;
}

export const clothingCatsSubcats: ClothingCatsSubcats = {
  masculino: {
    "Camisa(Botões)": [
      "Social", // Colarinho rígido, punho estruturado
      "Casual / Flanela", // Colarinho e punho mais moles, tecidos como flanela, xadrez, etc.
      "Jeans",
      "Xadrez",
      "Listrada",
      "Manga Longa",
      "Manga Curta",
      "Gola Padre (Colarinho Mandarim)", // Outro tipo de gola de camisa
    ],
    Camisetas: [
      "Básica (Gola Redonda)",
      "Gola V",
      "Estampada",
      "Listrada",
      "Manga Longa",
      "Oversized",
      "Esportiva / Academia",
    ],
    "Camisa Polo": ["Lisa", "Estampada", "Listrada", "Manga Longa", "Slim Fit"],
    Regatas: ["Básica", "Esportiva / Nadador"],
    Calças: [
      "Jeans",
      "Sarja",
      "Social",
      "Moletom / Jogger",
      "Esportiva (academia)",
    ],
    Shorts: ["Jeans", "Casual / Sarja", "Praia / Tactel", "Esportivo"],
    Calçados: [
      "Sapatos sociais",
      "Tênis casuais",
      "Tênis esportivos",
      "Sandálias",
      "Chinelos",
    ],
    Acessórios: [
      "Meias",
      "Bonés",
      "Cintos",
      "Carteiras",
      "Relógios",
      "Pulseiras",
      "Óculos de sol",
    ],
    Outros: [""],
  },
  feminino: {
    "Camisas (Botão)": [
      "Social",
      "Casual (Tecido leve/viscose)",
      "Oversized", // Pelo corte
      "Manga Longa",
      "Manga Curta",
      "Gola com detalhe",
    ],
    Camisetas: [
      "Básica (Gola Redonda)",
      "Gola V",
      "Estampada",
      "Listrada",
      "Manga Longa",
      "Oversized",
      "Esportiva",
      "Regatas",
    ],
    "Camisa Polo": ["Lisa", "Estampada", "Listrada", "Manga Longa", "Slim Fit"],
    "Blusas Fashion": [
      // Nova categoria para peças mais elaboradas
      "Ciganinha / Ombro a Ombro",
      "Com Babados / Rendas",
      "Transpassada / Peplum",
      "Tricô / Crochê",
    ],
    "Tops e Cropped": [
      "Camiseta Cropped",
      "Blusa Cropped",
      "Top Faixa / Bustiê",
    ],
    Vestidos: [
      "Curto",
      "Midi",
      "Longo (maxi)",
      "De festa / Formal",
      "Social / Trabalho",
      "De praia / Sundress",
    ],
    Saias: [
      "Curta (mini)",
      "Midi",
      "Longa (maxi)",
      "Lápis / Social",
      "Casual / Jeans ou Sarja",
      "De praia",
    ],
    Calças: [
      "Jeans",
      "Sarja / Chino",
      "Social / Alfaiataria",
      "Legging / Malha",
      "Moletom / Jogger",
      "Esportiva",
    ],
    Shorts: ["Jeans", "Casual / Sarja", "Praia / Tactel", "Esportivo / Treino"],
    "Conjuntos / Macacões": [
      "Macacão (Jumpsuit)",
      "Conjunto Top + Saia",
      "Conjunto Top + Calça",
      "Conjunto de Moletom / Lounge",
    ],
    "Outerwear / Camadas": [
      "Jaquetas (Jeans, Couro, Bomber)",
      "Blazers",
      "Cardigans",
      "Casacos / Coats",
      "Trench Coat",
    ],
    Calçados: [
      "Sapatos / Saltos",
      "Tênis casuais",
      "Tênis esportivos",
      "Sandálias",
      "Chinelos / Flats",
      "Botas",
    ],
    Acessórios: [
      "Meias / Meias-calça",
      "Bonés / Chapéus",
      "Cintos",
      "Carteiras / Bolsas",
      "Relógios / Pulseiras",
      "Óculos de sol",
      "Joias / Bijuterias",
      "Lenços / Echarpes",
    ],
    Roupa_íntima: [
      "Sutiãs",
      "Calcinhas",
      "Bodies",
      "Pijamas / Camisolas",
      "Roupas de dormir / Loungewear",
    ],
    Outros: [""],
  },
};