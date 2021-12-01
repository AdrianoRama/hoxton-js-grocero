/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const state = {
  groceries : [ {
    id: 1,
    name: 'beetroot',
    price: 0.35,
    amount: 0
  },
  {
    id: 2,
    name: 'carrot',
    price: 0.30,
    amount: 0
  },
  {
    id: 3,
    name: 'apple',
    price: 0.25,
    amount: 0
  },
  {
    id: 4,
    name: 'apricot',
    price: 0.65,
    amount: 0
  },
  {
    id: 5,
    name: 'avocado',
    price: 0.45,
    amount: 0
  },
  {
    id: 6,
    name: 'bananas',
    price: 0.35,
    amount: 0
  },
  {
    id: 7,
    name: 'bell-pepper',
    price: 0.15,
    amount: 0
  },
  {
    id: 8,
    name: 'berry',
    price: 0.385,
    amount: 0
  },
  {
    id: 9,
    name: 'blueberry',
    price: 0.95,
    amount: 0
  },
  {
    id: 10,
    name: 'eggplant',
    price: 0.25,
    amount: 0
  }
  ]}


function storeItems() {
  const storeUl = document.querySelector(".item-list.store--item-list")

  for (const grocery of state.groceries){

  const liEl = document.createElement(`li`)

  const storeItemIcon = document.createElement(`div`)
  storeItemIcon.setAttribute(`class`, `store--item-icon`)

  const btnEl = document.createElement(`button`)
  btnEl.textContent = `Add to cart`

  const imgEl = document.createElement(`img`)
  imgEl.setAttribute(`src`, `assets/icons/${grocery.id<10?'00':'0'}${grocery.id}-${grocery.name}.svg`)
  imgEl.setAttribute(`alt`, `beetroot`)

  storeUl.append(liEl)
  liEl.append(storeItemIcon, btnEl)
  storeItemIcon.append(imgEl)
  }
}
storeItems()

function cartItems() {

  const cartUl = document.querySelecton("#cart .item-list.cart--item-list")

  const liEl = document.createElement(`li`)

  const cartItemIcon = document.createElement(`img`)
  cartItemIcon.setAttribute(`class`, `cart--item-icon`)
  cartItemIcon.setAttribute(`src`, `assets/icons/001-beetroot.svg`)
  cartItemIcon.setAttribute(`alt`, `beetroot`)

  const paragraphEl = document.createElement(`p`)
  paragraphEl.textContent = `beetroot`

  const quantityBtn = document.createElement(`button`)
  quantityBtn.setAttribute(`class`, `quantity-btn remove-btn center`)
  quantityBtn.textContent =  `-`

  const quantityTxt = document.createElement(`span`)
  quantityTxt.setAttribute(`class`, `quantity-text center`)
  quantityTxt.textContent = `1`

  const addBtn = document.createElement(`button`)
  addBtn.setAttribute(`class`, `quantity-btn add-btn center`)
  addBtn.textContent = `+`

  cartUl.append(liEl)
  liEl.append(cartItemIcon, paragraphEl, quantityBtn, quantityTxt, addBtn)

}
cartItems()



function render() {

}

render()