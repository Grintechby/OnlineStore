import {goodsList, modals, catalog} from '../shopping/shopping.js';

const shoppingCart = document.querySelector('.header__shopping-cart');
const basket = document.querySelector('.basket')
const basketClose = document.querySelector('.basket__close');
const basketBody = document.querySelector('.basket__body')
const basketClear = document.querySelector('.basket__clear');
const items = document.querySelector('.basket__items'); 
const fullPrice = document.querySelector('.basket__full-priceNum');
fullPrice.textContent = '0';
let price = 0;

//localStorage
const updateStorage = () => {
    let parent = document.querySelector('.basket__items');
    let html = parent.innerHTML;
    let cost = fullPrice.textContent;
    if (html.length) {
        localStorage.setItem('products', html);
        localStorage.setItem('price', cost);
    } else {
        localStorage.removeItem('products');
        localStorage.removeItem('price');
    }
}

const initialState = () => {
    if (localStorage.getItem('products')) {
        document.querySelector('.basket__items').innerHTML = localStorage.getItem('products');
        fullPrice.textContent = localStorage.getItem('price');
    }
}
initialState()

// Функция которая достает число из строки
const priceNum = (str) => parseInt(str.replace(/[^\d]/g, '')); 

// Функция которая возвращает пробелы в цену
const normalPrice = (str) => String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

//Функция добавления строки товара в корзину
function addItems (id) {
    let addItem = '';
    catalog.forEach((item) => {
        if (id == item.id) {
            addItem = `
                <div id="itm_${item.id}" class="basket__item">
                    <div class="item__img" style="background: url(${item.img}) no-repeat center; background-size: contain;"></div>
                    <div class="item__name">${item.name}/${item.description}</div>
                    <div class="item__price">${item.price}</div>
                </div>
            `;
            items.innerHTML += addItem;
            price += priceNum(item.price);
            fullPrice.textContent = normalPrice(price);
            updateStorage()
        }
    })
}

// Функция добавление товара в корзину из главной страницы и модального окна
const addMain = (preId, className) => {
    let replace = new RegExp(preId, 'g');
    let buttns = document.getElementsByClassName(className);
    let currentTargetId = event.target.id.replace(replace,'');

    if (event.target == buttns[currentTargetId - 1]) {
        addItems(currentTargetId);
    }
}

// Событие добавления товара в корзину из главной страницы
goodsList.addEventListener('click', () => {
    addMain('addbtn_', 'goods-card__basket-add');
})

// Событие добавления товара в корзину из окна быстрого просмотра
modals.addEventListener('click', () => {
    addMain('popbtn_', 'popup__basket-btn');
})

// Функция открытия корзины
const openBasket = () => basket.style.display = 'block';
// Событие открытия корзины
shoppingCart.addEventListener('click', openBasket);

// Функция закрытия корзины
const closeBasket = () => {
    if (event.target == basketBody){
        basket.style.display = 'none';
    } else if (event.target == basketClose) {
        basket.style.display = 'none';
    }
    event.preventDefault();
}
// Событие закрытия корзины
shoppingCart.addEventListener('click', closeBasket)

// Функция очистки корзины
const clearBasket = () => {
    items.innerHTML = '';
    price = 0;
    fullPrice.textContent = '0';
    updateStorage()
}
// Событие очистки корзины
basketClear.addEventListener('click', clearBasket)

export {shoppingCart, basket, basketClose, basketBody, basketClear, items, fullPrice, price, priceNum, normalPrice,
    addItems, addMain, openBasket, closeBasket, clearBasket, updateStorage}