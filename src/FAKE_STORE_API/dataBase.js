//very important topic to understand which is local storage

// const addToDataBase = (id) => {
// const quantity = localStorage.getItem(id);
//ekhane mainly dekhteci je localstorage e ei id er kono key ase kina?...jodi thake taile ek bepar ar jodi na thake taile arek bepar..ekhn shuru te thakbe na savabik!!..quantity er value thakbe null shuru te..

//jkhn e call korbo tkhn id ta asbe and jodi ei id(key) er kono value age na thake taile eta set hbe 1 hisebe,right?

//ar jodi thake tahole quantity er value barte thakbe,ok?sevabe set korbo

// if (quantity) {
//ekhane dekhteci quanity ase na nai!!jodi theke thake tahole ei condition e dhukbe and eitar value increase korbe!!

// const newQuan = +quantity + 1; //var er age + dile number e convert hoy!!

// localStorage.setItem(id, newQuan); //chilo dekhe quantity barailam
// } else {
//ekhane null howay condition er karone key er value 1 set kortece
// localStorage.setItem(id, 1);
// }

//abar jkhn click korbo new kono id thakle setar value 1 boshabe ar jodi dekhe ekhan theke giye je ase then quantity er value baray dibe
// };

/* const addToDataBase = (id) => {
  let cartValue = {};

  const storedCartValue = localStorage.getItem("shopping_cart");

  if (storedCartValue) {
    cartValue = JSON.parse(storedCartValue);
  }

  const quanity = cartValue[id];
  if (quanity) {
    const newQuan = parseInt(quanity) + 1;
    cartValue[id] = newQuan;
  } else {
    cartValue[id] = 1;
  }

  localStorage.setItem("shopping_cart", JSON.stringify(cartValue));
}; */

const addToDataBase = (id) => {
  let shoppingCart = {};

  const localStorageValue = localStorage.getItem("shopping_cart");

  if (localStorageValue) {
    shoppingCart = JSON.parse(localStorageValue);
  } else {
    shoppingCart = {};
  }

  const quantityPerId = shoppingCart[id];

  if (quantityPerId) {
    const newQuantity = parseInt(quantityPerId) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
};

const deleteFromDataBase = (id) => {
  let parsify = {};
  const cartItem = localStorage.getItem("shopping_cart");

  if (cartItem) {
    parsify = JSON.parse(cartItem);
  }

  const prevQuantity = parsify[id];

  if (prevQuantity >= 0) {
    // parsify[id] = prevQuantity - 1;
    delete parsify[id];

    localStorage.setItem("shopping_cart", JSON.stringify(parsify));
  }
};

export { addToDataBase, deleteFromDataBase };
