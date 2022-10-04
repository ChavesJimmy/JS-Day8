const flowers = [
  {
    name: "Rose",
    image: "https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334__480.jpg",
    price: 3.99,
    qtty: 1,
  },
  {
    name: "Sunflower",
    image: "https://cdn.pixabay.com/photo/2018/08/18/13/00/sunflower-3614728__480.jpg",
    price: 2.5,
    qtty: 1,
  },
  {
    name: "Tulip",
    image: "https://cdn.pixabay.com/photo/2014/08/27/10/46/flowers-429041__480.jpg",
    price: 1.99,
    qtty: 1,
  },
  {
    name: "Orchid",
    image: "https://cdn.pixabay.com/photo/2012/11/11/18/10/flower-65738__480.jpg",
    price: 8.0,
    qtty: 1,
  },
  {
    name: "Hyacinth",
    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726__480.jpg",
    price: 6.0,
    qtty: 1,
  },
  {
    name: "Anemone",
    image: "https://cdn.pixabay.com/photo/2022/08/07/11/49/anemone-7370430__480.jpg",
    price: 10.0,
    qtty: 1,
  },
];
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});
