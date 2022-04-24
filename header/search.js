import {catalog, list} from '../shopping/shopping.js';

const inputSearch = document.querySelector('.search-catalog__input');
// Функция поиска товара
let search = () => {
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
}
// Событие поиска товара
inputSearch.addEventListener('input', search)

export {inputSearch, search};