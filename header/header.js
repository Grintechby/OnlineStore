import { catalog } from "../shopping/shopping";

const inputSearch = document.querySelector('.search-catalog__input');

inputSearch.addEventListener('input', () => {
    if (inputSearch.value != '') {
        catalog.forEach((item, index) => {
            if (item.name.search(inputSearch.value) == -1) {
                todoList[index].classList.add('hide');
            } else {
                todoList[index].classList.remove('hide');
            }
        });
    }
    else {
        todos.forEach((item, index) => {
            todoList[index].classList.remove('hide');
        });
    };
})