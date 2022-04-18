const catalog = [
    {
        "id": "1",
        "name": "Honor",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": '1 953 ₽',
        "oldPrice": '2 790 ₽',
        "discount": '-30%'
    },
    {
        "id": "2",
        "name": "HUGGIES",
        "description": "Подгузники Elite Soft 3 (5-9 кг) 80 шт.",
        "img": "https://images.wbstatic.net/c246x328/new/8660000/8660678-1.jpg",
        "price": "2 076 ₽",
        "oldPrice": '3 099 ₽',
        "discount": '-33%'
    },
    {
        "id": "3",
        "name": "Raven",
        "description": "Худи",
        "img": "https://images.wbstatic.net/c246x328/new/13720000/13724854-1.jpg",
        "price": "2 596 ₽",
        "oldPrice": "3 245 ₽",
        "discount": '-33%'
    },
    {
        "id": "4",
        "name": "НАНОПЯТКИ",
        "description": "Средство для пяток: сразу удалит трещины, грубую кожу +2 пемзы для ног в подарок. Для мужчин, женщин",
        "img": "https://images.wbstatic.net/c246x328/new/11120000/11127342-1.jpg",
        "price": "382 ₽",
        "oldPrice": "2 126 ₽",
        "discount": '-82%'
    },
    {
        "id": "5",
        "name": "MERRIES",
        "description": "Трусики-подгузники для детей размер XL 12-22 кг, 50 шт",
        "img": "https://images.wbstatic.net/c246x328/new/4470000/4475177-1.jpg",
        "price": "2 287 ₽",
        "oldPrice": "2 859 ₽",
        "discount": '-20%'
    },
    {
        "id": "6",
        "name": "Makita",
        "description": "Угловая шлифмашина 9558HPG, 125мм, 840 Вт",
        "img": "https://images.wbstatic.net/c246x328/new/8320000/8329114-1.jpg",
        "price": "5 010 ₽",
        "oldPrice": "6 110 ₽",
        "discount": '-18%'
    },
    {
        "id": "7",
        "name": "МедТранс",
        "description": "Маски одноразовые медицинские - 50 шт., защитные для лица, трехслойные с фиксатором для носа",
        "img": "https://images.wbstatic.net/c246x328/new/12250000/12255057-1.jpg",
        "price": "167 ₽",
        "oldPrice": "398 ₽",
        "discount": '-58%'
    },
    {
        "id": "8",
        "name": "AmaroBaby",
        "description": "Автокресло детское поворотное с рождения до 12 лет / Isofix / 0+/1/2/3/до 36 кг 0-36кг / 0-12лет",
        "img": "https://images.wbstatic.net/c246x328/new/13220000/13221317-1.jpg",
        "price": "13 383 ₽",
        "oldPrice": "32 642 ₽",
        "discount": '-59%'
    },
    {
        "id": "9",
        "name": "Михайлов А.В.",
        "description": "Маски одноразовые трехслойные. Набор 50 шт",
        "img": "https://images.wbstatic.net/c246x328/new/12320000/12327739-1.jpg",
        "price": "374 ₽",
        "oldPrice": "2 200 ₽",
        "discount": '-83%'
    },
    {
        "id": "10",
        "name": "ТМ Belezzaa",
        "description": "Костюм брючный женский / Костюм женский деловой / Костюм женский классический / Костюм женский офис",
        "img": "https://images.wbstatic.net/c246x328/new/12920000/12920336-1.jpg",
        "price": "4 316 ₽",
        "oldPrice": "8 300 ₽",
        "discount": '-48%'
    },
    {
        "id": "11",
        "name": "Apple",
        "description": "Macbook Pro 13 i5/16Gb/SSD512Gb/13'WQXGA/Intel Iris Plus/MacOS",
        "img": "https://images.wbstatic.net/c246x328/new/12400000/12403169-1.jpg",
        "price": "199 000 ₽",
        "oldPrice": "",
        "discount": ''
    },
    {
        "id": "12",
        "name": "Animal",
        "description": "Препарат для суставов и связок / Ходропротектор / Энимал Флекс / Animal Flex / 44 порции",
        "img": "https://images.wbstatic.net/c246x328/new/9780000/9784640-1.jpg",
        "price": "3 991 ₽",
        "oldPrice": "5 468 ₽",
        "discount": '-27%'
    },
    {
        "id": "13",
        "name": "Major Fabric",
        "description": "джинсы женские с высокой посадкой/джинсы для девочек/джинсы женские мом/джинсы бананы женские",
        "img": "https://images.wbstatic.net/c246x328/new/6320000/6325002-1.jpg",
        "price": "5 790 ₽",
        "oldPrice": "15 238 ₽",
        "discount": '-62%'
    },
    {
        "id": "14",
        "name": "Xiaomi",
        "description": "Смартфон Redmi Note 10 Pro: 6,67' 2400х1800 IPS/Snapdragon 732G 8/128Gb 108+8+5+2Mp/16Mp 5020mAh",
        "img": "https://images.wbstatic.net/c246x328/new/22900000/22903474-1.jpg",
        "price": "29 961 ₽",
        "oldPrice": "36 990 ₽",
        "discount": '-19%'
    }
];


// Карточки товаров
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
    })
}
displayCards()

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
displayModals();

const popup = document.getElementsByClassName('popup');
const popupBody = document.getElementsByClassName('popup__body');
const popupContent = document.querySelector('.popup__content');
const popupLink = document.querySelectorAll('.goods-card__quick-view');
const popupClose = document.getElementsByClassName('popup__close');
//Закрытие модального окна
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
//Открытие модального окна на быстрый просмотр
goodsList.addEventListener('click', (e) => {
    let buttn = document.getElementsByClassName('goods-card__quick-view');
    let currentTargetId = e.target.id.replace(/btn_/g, "");
    if (e.target == buttn[currentTargetId - 1]) {
        popup[currentTargetId-1].style.display = 'block';
    }
})

