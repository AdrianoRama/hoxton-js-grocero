/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const state = [ 
  groceries = {
    id: '001',
    name: 'beetroot',
    price: 0.35,
    amount: 0
  },
  {
    id: '002',
    name: 'carrot',
    price: 0.35,
    amount: 0
  },
  {
    id: '003',
    name: 'apple',
    price: 0.35,
    amount: 0
  },
  {
    id: '004',
    name: 'apricot',
    price: 0.35,
    amount: 0
  },
  {
    id: '005',
    name: 'avocado',
    price: 0.35,
    amount: 0
  },
  {
    id: '006',
    name: 'bananas',
    price: 0.35,
    amount: 0
  },
  {
    id: '007',
    name: 'bell-pepper',
    price: 0.35,
    amount: 0
  },
  {
    id: '008',
    name: 'berry',
    price: 0.35,
    amount: 0
  },
  {
    id: '009',
    name: 'blueberry',
    price: 0.35,
    amount: 0
  },
  {
    id: '010',
    name: 'eggplant',
    price: 0.35,
    amount: 0
  }
  
]


function storeItem() {
  const liEl = document.createElement(`li`)
  const storeItemIcon = document.createElement(`div`)
  storeItemIcon.setAttribute(`class`, `store--item-icon`)
  const btnEl = document.createElement(`button`)
  btnEl.textContent = `Add to cart`
  const imgEl = document.createElement(`img`)
  imgEl.setAttribute(`src`, `assets/icons/001-beetroot.svg`)
  imgEl.setAttribute(`alt`, `beetroot`)
  liEl.append(storeItemIcon, btnEl)
  storeItemIcon.append(imgEl)
}

function cartItem() {
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
  liEl.append(cartItemIcon, paragraphEl, quantityBtn, quantityTxt, addBtn)

}





function render() {

}