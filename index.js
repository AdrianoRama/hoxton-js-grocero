const storeUl = document.querySelector(".item-list.store--item-list")

const cartUl = document.querySelector("#cart .item-list.cart--item-list")

const totalEl = document.querySelector(`.total-number`)

function renderStoreItem(grocery) {
  const liEl = document.createElement(`li`)

  const storeItemIcon = document.createElement(`div`)
  storeItemIcon.setAttribute(`class`, `store--item-icon`)

  const btnEl = document.createElement(`button`)
  btnEl.textContent = `Add to cart`

  btnEl.addEventListener(`click`, function() {
    addItemToCart(grocery)

    render()
  })

  const imgEl = document.createElement(`img`)
  imgEl.setAttribute(`src`, `assets/icons/${grocery.id<10?'00':'0'}${grocery.id}-${grocery.name}.svg`)
  imgEl.setAttribute(`alt`, `beetroot`)

  storeUl.append(liEl)
  liEl.append(storeItemIcon, btnEl)
  storeItemIcon.append(imgEl)
}

function renderCartitem(cartItem) {
  const liEl = document.createElement(`li`)

  const cartItemIcon = document.createElement(`img`)
  cartItemIcon.setAttribute(`class`, `cart--item-icon`)
  cartItemIcon.setAttribute(`src`, `assets/icons/${cartItem.id<10?'00':'0'}${cartItem.id}-${cartItem.name}.svg`)
  cartItemIcon.setAttribute(`alt`, cartItem.name)

  const paragraphEl = document.createElement(`p`)
  paragraphEl.textContent = cartItem.name

  const quantityBtn = document.createElement(`button`)
  quantityBtn.setAttribute(`class`, `quantity-btn remove-btn center`)
  quantityBtn.textContent =  `-`

  quantityBtn.addEventListener(`click`, function() {
    removeItemFromCart(cartItem)
    
    render()
  })

  const quantityTxt = document.createElement(`span`)
  quantityTxt.setAttribute(`class`, `quantity-text center`)
  quantityTxt.textContent = cartItem.amount

  const addBtn = document.createElement(`button`)
  addBtn.setAttribute(`class`, `quantity-btn add-btn center`)
  addBtn.textContent = `+`

  addBtn.addEventListener(`click`, function() {
    addItemToCart(cartItem)

    render()
  })

  cartUl.append(liEl)
  liEl.append(cartItemIcon, paragraphEl, quantityBtn, quantityTxt, addBtn)
}


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


function renderstoreItems() {
  storeUl.innerHTML = ``

  for (const grocery of state.groceries){
   renderStoreItem(grocery)
  }
}

function getCart(){
  return state.groceries.filter(item => item.amount > 0)
}

function getTotal(){
  let total = 0
  
  const cart = getCart()

  for (const item of cart){
    total += item.price * item.amount
  }

  return total
}

function renderCartItems() {
  cartUl.innerHTML = ``
  
   const cart = getCart()


   for(const cartItem of cart){
    renderCartitem(cartItem)
   }
}

function renderTotal(){
  totalEl.textContent = `$` + getTotal().toFixed(2)
}

function addItemToCart(item) {
 item.amount++
}

function removeItemFromCart(item) {
  if(item.amount > 0){
    item.amount--
  }
 
}

function render() {
  renderstoreItems()
  renderCartItems()
  renderTotal()
}

render()
render()
render()
render()
render()
render()