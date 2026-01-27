// Associações para sugestões de pesquisa
const genderCategories = {
  unisex: [
    { nome: 'calça', relevancia: 0 },
    { nome: 'camisa', relevancia: 0 },
    { nome: 'blusa de inverno', relevancia: 0 },
    { nome: 'short', relevancia: 0 },
    { nome: 'sandália', relevancia: 0 },
  ],
  male: [{ nome: 'cueca', relevancia: 0 }],
  female: [
    { nome: 'Vestido', relevancia: 0 },
    { nome: 'saia', relevancia: 0 },
    { nome: 'calcinha', relevancia: 0 },
    { nome: 'sutiã', relevancia: 0 },
  ],
  boy: [unisex, male],
  girl: [unisex, female],
};

const subcatsByCats = {
  calça: ['skinny', 'reta', 'jogger'],
  camisa: ['social', 'polo', 'estampada'],
  short: ['jeans', 'moletom', 'bermuda'],
};
//

const gender = { M: 'Masculino', F: 'Feminino', MnO: 'Menina', MnA: 'Menino' };

const featuredClothes = [
  {
    gender: [''],
    cat: '',
    subcat: '',
    name: '',
    price: null,
    urlImgManequin: '',
    urlImgProduct: '',
  },
];

const popularCategories = [{ gender: [''], name: '', urlImgBackground: '', productList: [''] }];

const womensCollection = [];
const maleCollection = [];
const childCollection = [];
