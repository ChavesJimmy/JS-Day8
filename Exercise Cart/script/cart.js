const flowers = [
  {
    name: "Rose",
    image: "https://cdn.pixabay.com/photo/2017/06/18/21/37/rose-2417334__480.jpg",
    price: 3.99,
    description:"Roses are erect, climbing, or trailing shrubs, the stems of which are usually copiously armed with prickles of various shapes and sizes, commonly called thorns. The leaves are alternate and pinnately compound (i.e., feather-formed), usually with oval leaflets that are sharply toothed.",
    qtty: 1,
  },
  {
    name: "Sunflower",
    image: "https://cdn.pixabay.com/photo/2018/08/18/13/00/sunflower-3614728__480.jpg",
    price: 2.5,
    description:"They are bright and cheery, and as warm and inviting as the sweet summer sun. With brilliant yellow petals, also known as “rays,” sunflowers have an unmistakable sun-like appearance that has made them a crowd favorite, especially in the summer months",
    qtty: 1,
  },
  {
    name: "Tulip",
    image: "https://cdn.pixabay.com/photo/2014/08/27/10/46/flowers-429041__480.jpg",
    price: 1.99,
    description:"Tulips are erect flowers with long, broad, parallel-veined leaves and a cup-shaped, single or double flower at the tip of the stem. Colors of the flowers can range anywhere from red to yellow to white. Some tulips are varicolored as a result of a viral disease carried and transferred to the plants by aphids.",
    qtty: 1,
  },
  {
    name: "Orchid",
    image: "https://cdn.pixabay.com/photo/2012/11/11/18/10/flower-65738__480.jpg",
    price: 8.0,
    description:"The orchid flower has the feminine and masculine organ of reproduction fusing in only one body called a column or gynostemium. The flower has an irregular form. It has three sepals and three petals. The medium petal is modified and is called labellum or lip.",
    qtty: 1,
  },
  {
    name: "Hyacinth",
    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726__480.jpg",
    price: 6.0,
    description:"Hyacinths are highly fragrant, bell-shaped flowers with reflexed petals. The waxy, densely-packed florets come in shades of white, peach, orange, salmon, yellow, pink, red, purple, lavender and blue. The 7-8 leaves of the hyacinth are fleshy, glossy green and strap shaped.",
    qtty: 1,
  },
  {
    name: "Anemone",
    image: "https://cdn.pixabay.com/photo/2022/08/07/11/49/anemone-7370430__480.jpg",
    price: 10.0,
    description:"Anemone (/əˈnɛməniː/) is a genus of flowering plants in the buttercup family Ranunculaceae. Plants of the genus are commonly called windflowers.",
    qtty: 1,
  },
];
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});

//select the products row and add items dynamically
let productsRow = document.querySelector(".products");

for (let flower of flowers) {
 productsRow.innerHTML += `
 <div class="card product col my-4" style="width: 300px;">
               <img class="card-img-top mt-2 px-3" src="${
                 flower.image
               }" alt="${flower.name}">
               <div class="card-body px-3 py-0">
                   <h5 class="card-title">${flower.name}</h5>
                   <p class="card-text">${flower.description}</p>
                   <p class="card-text h3 text-end">${currencyFormater.format(
                     flower.price
                   )}</p>
                   <p class="card-text3 d-flex justify-content-end"><button class="btn w-75 product-button"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button></p>

               </div>
           </div>
   `;
}
//product button selected
const addToCartBtn = document.querySelectorAll( ".product-button");

//add event to add to cart buttons
addToCartBtn.forEach((btn, i) => {
 btn.addEventListener("click" , () => {
   addToCart(flowers[i]);
 });
});
//cart declared

const cart = [];

//adds product to cart

const addToCart = (flowers) => {
  if (cart.find((val) => val.name == flowers.name)) {
    // console.log(cart.find((val) => val.name == product.name));
    flowers.qtty++;
  } else {
    cart.push(flowers);
  }
 // console.table(cart);
 createRows();
 cartTotal();
 cartTotalItems();
 };

 const createRows = () => {
  let result = "";
  for (let  item of cart) {
    result += `
    <div class="cart-row row gx-0">
    <div class="cart-item col-6 col-sm-6 my-2 d-flex align-items-center justify-content-center">
                        <img class="cart-item-image" src="${
                          item.image
                        }" width="100" height="100" alt="${item.name}">
                        <div class="cart-item-title h5 ms-2">JavaScript Course</div>
                    </div>
                    <div class="cart-qtty-action col-2 d-flex justify-content-center align-items-center">
                        <div class="d-flex">
                            <i class="plus fs-5 bi bi-plus-circle-fill"></i>
                        </div>
                        <div class="text-center m-0 cart-quantity h4 w-25">${
                          item.qtty
                        }</div>
                        <div class="d-flex">
                            <i class="minus fs-5 bi bi-dash-circle-fill"></i>
                        </div>
                    </div>
                    <div class="col-1 d-flex justify-content-start align-items-center">
                    <i class="del fs-4 bi bi-trash3-fill text-danger"></i>
                    </div>
                    <div class="cart-price col-3 h5 my-auto text-end pe-5">${currencyFormater.format(
                      item.price
                    )}</div>
                    <div class="number-items col-3 h5 my-auto text-end pe-5">${
                      item.qtty
                    }</div>
                </div>                    
                </div>
        `;
  }
  document.querySelector(".cart-items" ).innerHTML = result;
 const plusBtns = document.querySelectorAll(".plus");
plusBtns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
     plusQtty(i);
   });
 });
 
const minusBtns = document.querySelectorAll(".minus");
minusBtns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
     minusQtty(i);
   });
 });
 const deleteBtns = document .querySelectorAll(".del");
 deleteBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    deleteItem(i);
  });
});
};
   //updates the cart total product 
   const cartTotalItems = () => {
    let totalItems = 0;
    
    for (let items of cart){
      totalItems += items.qtty;

    }
    document.getElementById("totItems").innerHTML = totalItems;
    }

 //updates the cart total amount (+15% discount)
const cartTotal = () => {
  let total = 0;
  for (let  item of cart) {
    total += item.price * item.qtty;
}
  let discount = 0;
  let newtotal = total-discount
if(total > 30){
  let discount = total*0.15;
  newtotal = total-discount
  document.getElementById("newprice").innerHTML = `New price : ${currencyFormater.format(newtotal)}`;
  document.getElementById("price-discount").innerHTML = `Discount 15% : - ${currencyFormater.format(discount)}`;

   }
   else{
    document.getElementById("newprice").innerHTML = ``;
  document.getElementById("price-discount").innerHTML = ``;

   }
  document.getElementById("price").innerHTML = currencyFormater.format(total);
}

 
//increases item quantity
const plusQtty = (index) => {
  cart[index].qtty++;
  createRows();
  cartTotal();
  cartTotalItems();

 };
 
//decreases item quantity
const minusQtty = (index) => {
  if (cart[index].qtty == 1) {
    cart.splice(index, 1);
  } else {
    cart[index].qtty--;
  }
  createRows();
  cartTotal();
  cartTotalItems();

 };
 
//deletes item from cart
const deleteItem = (index) => {
  cart[index].qtty = 1;
  cart.splice(index, 1);
  createRows();
  cartTotal();
  cartTotalItems();

 };