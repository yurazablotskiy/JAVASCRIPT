const mainBlock = document.querySelector('main.items');
let shopCartItems = document.querySelector('#shop-cart');
let countItems = document.querySelector('#count-items');
let inputAmount = document.querySelector('.input-amount');
console.log(inputAmount)
let goShop = document.querySelector('.go-shop b');

function showCart() {
  const showBlock = document.querySelector('.shop-cart-block');

  showBlock.classList.toggle('active');

  if (showBlock.classList.contains('active')) {
    mainBlock.style.width = '60%';
  } else {
    mainBlock.style.width = '90%';
  }
}

items.forEach((item) => {
  mainBlock.innerHTML += `
  <div class="item">
    <img src="img/${item.img}">
    <h4>${item.name} - ${item.price}$</h4>
    <p>${item.desc}</p>
    <div class="add-to-cart" onclick="addToCart(${item.id})">
     <i class="fas fa-cart-plus"></i>
    </div>
  </div>
  `
})

let shopCart = [];

if (localStorage.getItem('shopCart') != undefined) {
  shopCart = JSON.parse(localStorage.getItem('shopCart'))
  showCart();
  updateShopCart();
}

function addToCart(id) {
  let itemInCart = shopCart.find(item => item.id == id);
  if (itemInCart) {
    changeCountItems('+', id);
  } else {
    let item = items.find(item => item.id == id);
    shopCart.push({
      ...item,
      count: 1
    });
  }

  updateShopCart();
}

function updateShopCart() {
  shopCartItems.innerHTML = '';

  let elementCount = 0, totalPrice = 0;

  shopCart.forEach(el => {

    shopCartItems.innerHTML += `
    <div class="shop-item">
      <div class="info">
        <img src="img/${el.img}" alt="${el.name}">
        <span class="title">${el.name}</span>
      </div>
      <div class="price">${el.price}$</div>
      <div class="count">
        <button class="minus" onclick="changeCountItems('-', ${el.id})">-</button>
        <input class="input-amount" type="text" value="${el.count}">
        <button class="plus" onclick="changeCountItems('+', ${el.id})">+</button>
        <button class="delete" onclick="deleteItem(${el.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    `;

    elementCount += el.count;
    totalPrice += el.price * el.count
  })

  let ft = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  countItems.textContent = elementCount;
  document.querySelector('.go-shop b').textContent = ft.format(totalPrice);

  localStorage.setItem('shopCart', JSON.stringify(shopCart));
}


function changeCountItems(action, id) {
  let item = shopCart.find(item => item.id == id);
  if (action == '-' && item.count > 1)
   {
    item.count--;
   }
  else if (action == '+' && item.count < item.leftItems)
   {
    item.count++
   }
  else if (action == '-' && item.count == 1)
    shopCart = shopCart.filter((item) => item.id != id)
  updateShopCart();
}

function deleteAll() {
  shopCartItems.innerHTML = '';
  shopCart = [];
  countItems.textContent = 0;
  localStorage.setItem('shopCart', []);
  goShop.textContent = '0$';
}

function deleteItem(id) {
  let filteredCart = shopCart.filter(item => item.id != id)
  shopCart = [...filteredCart];
  updateShopCart();
}


