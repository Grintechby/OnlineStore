parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EZJ2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.closeModals=exports.catalog=void 0,exports.displayCards=t,exports.displayModals=c,exports.popupClose=exports.popupBody=exports.popup=exports.openModals=exports.modals=exports.list=exports.goodsList=void 0;var o=[];exports.list=o;var e=[];exports.catalog=e,fetch("https://6257ff20e4e0b7314284d524.mockapi.io/wildberries").then(function(o){return o.json()}).then(function(o){exports.catalog=e=o,t(),c()});var s=document.querySelector(".goods__list");function t(){var t="";e.forEach(function(e,n){t+='\n        <li class="goods__item" id="cd_'.concat(e.id,'">\n                <div class="goods-card__img" style="background: url(').concat(e.img,') no-repeat center; background-size: cover;">\n                    <div class="goods-card__discount">\n                        <span>').concat(e.discount,'</span>\n                    </div>\n                    <button id="addbtn_').concat(e.id,'" class="goods-card__basket-add">+</button>\n                    <button id="btn_').concat(e.id,'" class="goods-card__quick-view">Быстрый просмотр</button>\n                </div>\n                <div class="goods-card__info">\n                    <div class="goods-card__price">\n                        <span class="goods-card__price-now">').concat(e.price,'</span>\n                        <del class="goods-card__price-last">').concat(e.oldPrice,'</del>\n                    </div>\n                    <div class="goods-card__description">\n                        <span>').concat(e.name,"</span>\n                        /\n                        <span>").concat(e.description,"</span>\n                    </div>\n                </div>\n        </li>\n        "),s.innerHTML=t,exports.list=o=document.querySelectorAll(".goods__item")})}exports.goodsList=s;var n=document.querySelector(".modals");function c(){var o="";e.forEach(function(e,s){o+='\n        <div id="popup_'.concat(e.id,'" class="popup">\n            <div id="body_').concat(e.id,'" class="popup__body">\n                <div class="popup__content">\n                    <a href="#" id="close_').concat(e.id,'" class="popup__close close-popup">X</a>\n                    <div class="popup__title">').concat(e.name,"/").concat(e.description,'</div>\n                    <div class="popup__description">\n                        <img class="popup__img" src="').concat(e.img,'" alt="">\n                        <div class="basket-price">\n                            <span class="popup__description-price">').concat(e.price,'</span>\n                            <button id="popbtn_').concat(e.id,'" class="popup__basket-btn">Добавить в корзину</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        '),n.innerHTML=o})}exports.modals=n;var a=document.getElementsByClassName("popup");exports.popup=a;var p=document.getElementsByClassName("popup__body");exports.popupBody=p;var d=document.getElementsByClassName("popup__close");exports.popupClose=d;var i=function(){var o=event.target.id.replace(/close_/g,""),e=event.target.id.replace(/body_/g,"");event.target==p[e-1]?a[e-1].style.display="none":event.target==d[o-1]&&(a[o-1].style.display="none"),event.preventDefault()};exports.closeModals=i,n.addEventListener("click",i);var r=function(){var o=document.getElementsByClassName("goods-card__quick-view"),e=event.target.id.replace(/btn_/g,"");event.target==o[e-1]&&(a[e-1].style.display="block")};exports.openModals=r,s.addEventListener("click",r);
},{}],"kdAV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.search=exports.inputSearch=void 0;var e=require("../shopping/shopping.js"),t=document.querySelector(".search-catalog__input");exports.inputSearch=t;var s=function(){""!=t.value?e.catalog.forEach(function(s,r){-1==s.description.toLowerCase().search(t.value.toLowerCase())?e.list[r].classList.add("hide"):e.list[r].classList.remove("hide")}):e.catalog.forEach(function(t,s){e.list[s].classList.remove("hide")})};exports.search=s,t.addEventListener("input",s);
},{"../shopping/shopping.js":"EZJ2"}],"A8M7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addItems=m,exports.updateStorage=exports.shoppingCart=exports.priceNum=exports.price=exports.openBasket=exports.normalPrice=exports.items=exports.fullPrice=exports.closeBasket=exports.clearBasket=exports.basketClose=exports.basketClear=exports.basketBody=exports.basket=exports.addMain=void 0;var e=require("../shopping/shopping.js"),t=document.querySelector(".header__shopping-cart");exports.shoppingCart=t;var r=document.querySelector(".basket");exports.basket=r;var o=document.querySelector(".basket__close");exports.basketClose=o;var a=document.querySelector(".basket__body");exports.basketBody=a;var n=document.querySelector(".basket__clear");exports.basketClear=n;var s=document.querySelector(".basket__items");exports.items=s;var c=document.querySelector(".basket__full-priceNum");exports.fullPrice=c,c.textContent="0";var i=0;exports.price=i;var p=function(){var e=document.querySelector(".basket__items").innerHTML,t=c.textContent;e.length?(localStorage.setItem("products",e),localStorage.setItem("price",t)):(localStorage.removeItem("products"),localStorage.removeItem("price"))};exports.updateStorage=p;var d=function(){localStorage.getItem("products")&&(document.querySelector(".basket__items").innerHTML=localStorage.getItem("products"),c.textContent=localStorage.getItem("price"))};d();var l=function(e){return parseInt(e.replace(/[^\d]/g,""))};exports.priceNum=l;var u=function(e){return String(e).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")};function m(t){var r="";e.catalog.forEach(function(e){t==e.id&&(r='\n                <div id="itm_'.concat(e.id,'" class="basket__item">\n                    <div class="item__img" style="background: url(').concat(e.img,') no-repeat center; background-size: contain;"></div>\n                    <div class="item__name">').concat(e.name,"/").concat(e.description,'</div>\n                    <div class="item__price">').concat(e.price,"</div>\n                </div>\n            "),s.innerHTML+=r,exports.price=i+=l(e.price),c.textContent=u(i),p())})}exports.normalPrice=u;var v=function(e,t){var r=new RegExp(e,"g"),o=document.getElementsByClassName(t),a=event.target.id.replace(r,"");event.target==o[a-1]&&m(a)};exports.addMain=v,e.goodsList.addEventListener("click",function(){v("addbtn_","goods-card__basket-add")}),e.modals.addEventListener("click",function(){v("popbtn_","popup__basket-btn")});var x=function(){return r.style.display="block"};exports.openBasket=x,t.addEventListener("click",x);var g=function(){event.target==a?r.style.display="none":event.target==o&&(r.style.display="none"),event.preventDefault()};exports.closeBasket=g,t.addEventListener("click",g);var k=function(){s.innerHTML="",exports.price=i=0,c.textContent="0",p()};exports.clearBasket=k,n.addEventListener("click",k);
},{"../shopping/shopping.js":"EZJ2"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./header/search.js"),r=require("./shopping/shopping.js"),s=require("./header/shopping_cart.js");
},{"./header/search.js":"kdAV","./shopping/shopping.js":"EZJ2","./header/shopping_cart.js":"A8M7"}]},{},["Focm"], null)