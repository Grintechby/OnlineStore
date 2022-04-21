// Карточки товаров
let list = [];

const goodsList = document.querySelector('.goods__list');

function displayCards() {
    let displayCard = '';
    catalog.forEach(function (item, index) {
        displayCard += `
        <li class="goods__item" id="cd_${item.id}">
                <div class="goods-card__img" style="background: url(${item.img}) no-repeat center; background-size: cover;">
                    <div class="goods-card__discount">
                        <span>${item.discount}</span>
                    </div>
                    <button class="goods-card__basket-add">+</button>
                    <button id="btn_${item.id}" class="goods-card__quick-view">Быстрый просмотр</button>
                </div>
                <div class="goods-card__info">
                    <div class="goods-card__price">
                        <span class="goods-card__price-now">${item.price}</span>
                        <del class="goods-card__price-last">${item.oldPrice}</del>
                    </div>
                    <div class="goods-card__description">
                        <span>${item.name}</span>
                        /
                        <span>${item.description}</span>
                    </div>
                </div>
        </li>
        `;
        goodsList.innerHTML = displayCard;
        list = document.querySelectorAll('.goods__item');
    })
}

// Модальные окна к карточкам товаров
const modals = document.querySelector('.modals');

function displayModals() {
    let displayModal = '';
    catalog.forEach(function (item, index) {
        displayModal += `
        <div id="popup_${item.id}" class="popup">
            <div id="body_${item.id}" class="popup__body">
                <div class="popup__content">
                    <a href="#" id="close_${item.id}" class="popup__close close-popup">X</a>
                    <div class="popup__title">${item.name}/${item.description}</div>
                    <div class="popup__description">
                        <img class="popup__img" src="${item.img}" alt="">
                        <div class="basket-price">
                            <span class="popup__description-price">${item.price}</span>
                            <button class="popup__basket-btn">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        modals.innerHTML = displayModal;
    })
};


const popup = document.getElementsByClassName('popup');
const popupBody = document.getElementsByClassName('popup__body');
const popupClose = document.getElementsByClassName('popup__close');

// Закрытие модального окна
modals.addEventListener('click', (e) => {
    let closeId = e.target.id.replace(/close_/g, "");
    let bodyId = e.target.id.replace(/body_/g,"");

    if (e.target == popupBody[bodyId -1]) {
        popup[bodyId - 1].style.display = 'none';
    }else if (e.target == popupClose[closeId -1]) {
        popup[closeId - 1].style.display = 'none';
    }
    e.preventDefault();
})

// Открытие модального окна на быстрый просмотр
goodsList.addEventListener('click', (e) => {
    let buttn = document.getElementsByClassName('goods-card__quick-view');
    let currentTargetId = e.target.id.replace(/btn_/g, "");
    if (e.target == buttn[currentTargetId - 1]) {
        popup[currentTargetId-1].style.display = 'block';
    }
})

// Получение данных с сервера
let catalog = [];

fetch('https://6257ff20e4e0b7314284d524.mockapi.io/wildberries')
.then((responce) => {
    return responce.json();
})
.then((body) => {
    catalog = body;
    displayCards();
    displayModals();
})

catalog = fetch('https://6257ff20e4e0b7314284d524.mockapi.io/wildberries')
.then((responce) => {
    return responce.json();
})

// Поиск по товарам
const inputSearch = document.querySelector('.search-catalog__input');

inputSearch.addEventListener('input', () => {
    if (inputSearch.value != '') {
        catalog.forEach((item, index) => {
            if (item.description.toLowerCase().search(inputSearch.value.toLowerCase()) == -1) {
               list[index].classList.add('hide');
            } else {
                list[index].classList.remove('hide');
            }
        });
    }
    else {
        catalog.forEach((item, index) => {
            list[index].classList.remove('hide');
        });
    };
})


