const catalog = [
    {
        "id": "cd_1",
        "name": "Honor",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_2",
        "name": "Huggies",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_3",
        "name": "Платье",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_4",
        "name": "Samsung",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_5",
        "name": "Apple",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_6",
        "name": "Tefal",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    },
    {
        "id": "cd_7",
        "name": "Electrolux",
        "description": "Фитнес-браслет Band 5",
        "img": "/img/Band-5.jpg",
        "price": 1953,
        "oldPrice": 2790,
        "discount": 30
    }
];

const goodsList = document.querySelector('.goods__list');

function displayCards() {
    let displayCard = '';
    catalog.forEach(function(item, index) {
        displayCard += `
        <li class="goods__item" id="${item.id}">
                <div class="goods-card__img" style="background: url(${item.img}) no-repeat center; background-size: cover;">
                    <div class="goods-card__discount">
                        -<span>${item.discount}</span>%
                    </div>
                </div>
                <div class="goods-card__info">
                    <div class="goods-card__price">
                        <span class="goods-card__price-now">${item.price}₽</span>
                        <del class="goods-card__price-last">${item.oldPrice}₽</del>
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
export {catalog};