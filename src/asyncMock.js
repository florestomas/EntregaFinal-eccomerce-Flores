const products = [
  {
    id: 1,
    title: 'Boca vs Real Madrid',
    price: '',
    year: '2000',
    description: "",
    image:
      'https://i.ytimg.com/vi/I0CJReSR3Rg/sddefault.jpg',
  },
  {
    id: 2,
    title: 'Boca vs AC Milan',
    price: '',
    year: '2003',
    description: '',
    image:
      'https://i.ytimg.com/vi/jOCkrNGKaDg/sddefault.jpg',
  },
  {
    id: 4,
    title: 'Boca vs Palmeiras',
    price: '',
    year: '2000',
    description: '',
    image:
      'https://media.tycsports.com/files/2022/06/21/442518/la-formacion-de-boca-vs-palmeiras-_862x485.webp?v=1',
  },
  {
    id: 5,
    title: 'Boca vs Cruz Azul',
    price: '',
    year: '2001',
    description: '',
    image:
      'https://www.ole.com.ar/images/2021/06/28/eYuzkVMLj_720x0__1.jpg',
  },
  {
    id: 6,
    title: 'Boca vs Santos',
    price: '',
    year: '2003',
    category: '',
    description: '',
    image:
      'https://www.ole.com.ar/2019/08/21/O5qbozEUk_1200x630__1.jpg',
  },
  {
    id: 7,
    title: 'Boca vs Gremio',
    price: '',
    category: '',
    year: '2007',
    description: '',
    image:
      'https://c8.alamy.com/comp/2PBD4PM/the-team-of-argentinas-boca-juniors-poses-at-olimpico-stadium-in-porto-alegre-brazil-before-the-copa-libertadores-final-against-brazils-gremio-on-wednesday-june-20-2007-ap-photovictor-r-caivano-2PBD4PM.jpg'
  },
];


export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};
