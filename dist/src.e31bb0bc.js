// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"shopping/shopping.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModals = exports.catalog = void 0;
exports.displayCards = displayCards;
exports.displayModals = displayModals;
exports.popupClose = exports.popupBody = exports.popup = exports.openModals = exports.modals = exports.list = exports.goodsList = void 0;
//Присваиваем переменной catalog данные с сервера
var list = [];
exports.list = list;
var catalog = [];
exports.catalog = catalog;
fetch('https://6257ff20e4e0b7314284d524.mockapi.io/wildberries').then(function (responce) {
  return responce.json();
}).then(function (body) {
  exports.catalog = catalog = body;
  displayCards();
  displayModals();
}); // Карточки товаров

var goodsList = document.querySelector('.goods__list'); //Берет данные с сервера и создает карточку на каждый товар

exports.goodsList = goodsList;

function displayCards() {
  var displayCard = '';
  catalog.forEach(function (item, index) {
    displayCard += "\n        <li class=\"goods__item\" id=\"cd_".concat(item.id, "\">\n                <div class=\"goods-card__img\" style=\"background: url(").concat(item.img, ") no-repeat center; background-size: cover;\">\n                    <div class=\"goods-card__discount\">\n                        <span>").concat(item.discount, "</span>\n                    </div>\n                    <button id=\"addbtn_").concat(item.id, "\" class=\"goods-card__basket-add\">+</button>\n                    <button id=\"btn_").concat(item.id, "\" class=\"goods-card__quick-view\">\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440</button>\n                </div>\n                <div class=\"goods-card__info\">\n                    <div class=\"goods-card__price\">\n                        <span class=\"goods-card__price-now\">").concat(item.price, "</span>\n                        <del class=\"goods-card__price-last\">").concat(item.oldPrice, "</del>\n                    </div>\n                    <div class=\"goods-card__description\">\n                        <span>").concat(item.name, "</span>\n                        /\n                        <span>").concat(item.description, "</span>\n                    </div>\n                </div>\n        </li>\n        ");
    goodsList.innerHTML = displayCard;
    exports.list = list = document.querySelectorAll('.goods__item');
  });
} // Модальные окна к карточкам товаров


var modals = document.querySelector('.modals'); //Берет данные с сервера и создает модальное окно на каждую карточку товара

exports.modals = modals;

function displayModals() {
  var displayModal = '';
  catalog.forEach(function (item, index) {
    displayModal += "\n        <div id=\"popup_".concat(item.id, "\" class=\"popup\">\n            <div id=\"body_").concat(item.id, "\" class=\"popup__body\">\n                <div class=\"popup__content\">\n                    <a href=\"#\" id=\"close_").concat(item.id, "\" class=\"popup__close close-popup\">X</a>\n                    <div class=\"popup__title\">").concat(item.name, "/").concat(item.description, "</div>\n                    <div class=\"popup__description\">\n                        <img class=\"popup__img\" src=\"").concat(item.img, "\" alt=\"\">\n                        <div class=\"basket-price\">\n                            <span class=\"popup__description-price\">").concat(item.price, "</span>\n                            <button id=\"popbtn_").concat(item.id, "\" class=\"popup__basket-btn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ");
    modals.innerHTML = displayModal;
  });
}

;
var popup = document.getElementsByClassName('popup');
exports.popup = popup;
var popupBody = document.getElementsByClassName('popup__body');
exports.popupBody = popupBody;
var popupClose = document.getElementsByClassName('popup__close'); // Функция закрытия модального окна

exports.popupClose = popupClose;

var closeModals = function closeModals() {
  var closeId = event.target.id.replace(/close_/g, "");
  var bodyId = event.target.id.replace(/body_/g, "");

  if (event.target == popupBody[bodyId - 1]) {
    popup[bodyId - 1].style.display = 'none';
  } else if (event.target == popupClose[closeId - 1]) {
    popup[closeId - 1].style.display = 'none';
  }

  event.preventDefault();
}; // Событие закрытия модального окна


exports.closeModals = closeModals;
modals.addEventListener('click', closeModals); // Функция открытия модального окна на быстрый просмотр

var openModals = function openModals() {
  var buttns = document.getElementsByClassName('goods-card__quick-view');
  var currentTargetId = event.target.id.replace(/btn_/g, "");

  if (event.target == buttns[currentTargetId - 1]) {
    popup[currentTargetId - 1].style.display = 'block';
  }
}; // Событие открытия модального окна на быстрый просмотр


exports.openModals = openModals;
goodsList.addEventListener('click', openModals);
},{}],"header/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.inputSearch = void 0;

var _shopping = require("../shopping/shopping.js");

var inputSearch = document.querySelector('.search-catalog__input'); // Функция поиска товара

exports.inputSearch = inputSearch;

var search = function search() {
  if (inputSearch.value != '') {
    _shopping.catalog.forEach(function (item, index) {
      if (item.description.toLowerCase().search(inputSearch.value.toLowerCase()) == -1) {
        _shopping.list[index].classList.add('hide');
      } else {
        _shopping.list[index].classList.remove('hide');
      }
    });
  } else {
    _shopping.catalog.forEach(function (item, index) {
      _shopping.list[index].classList.remove('hide');
    });
  }

  ;
}; // Событие поиска товара


exports.search = search;
inputSearch.addEventListener('input', search);
},{"../shopping/shopping.js":"shopping/shopping.js"}],"header/shopping_cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItems = addItems;
exports.updateStorage = exports.shoppingCart = exports.priceNum = exports.price = exports.openBasket = exports.normalPrice = exports.items = exports.fullPrice = exports.closeBasket = exports.clearBasket = exports.basketClose = exports.basketClear = exports.basketBody = exports.basket = exports.addMain = void 0;

var _shopping = require("../shopping/shopping.js");

var shoppingCart = document.querySelector('.header__shopping-cart');
exports.shoppingCart = shoppingCart;
var basket = document.querySelector('.basket');
exports.basket = basket;
var basketClose = document.querySelector('.basket__close');
exports.basketClose = basketClose;
var basketBody = document.querySelector('.basket__body');
exports.basketBody = basketBody;
var basketClear = document.querySelector('.basket__clear');
exports.basketClear = basketClear;
var items = document.querySelector('.basket__items');
exports.items = items;
var fullPrice = document.querySelector('.basket__full-priceNum');
exports.fullPrice = fullPrice;
fullPrice.textContent = '0';
var price = 0; //localStorage

exports.price = price;

var updateStorage = function updateStorage() {
  var parent = document.querySelector('.basket__items');
  var html = parent.innerHTML;
  var cost = fullPrice.textContent;

  if (html.length) {
    localStorage.setItem('products', html);
    localStorage.setItem('price', cost);
  } else {
    localStorage.removeItem('products');
    localStorage.removeItem('price');
  }
};

exports.updateStorage = updateStorage;

var initialState = function initialState() {
  if (localStorage.getItem('products')) {
    document.querySelector('.basket__items').innerHTML = localStorage.getItem('products');
    fullPrice.textContent = localStorage.getItem('price');
  }
};

initialState(); // Функция которая достает число из строки

var priceNum = function priceNum(str) {
  return parseInt(str.replace(/[^\d]/g, ''));
}; // Функция которая возвращает пробелы в цену


exports.priceNum = priceNum;

var normalPrice = function normalPrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}; //Функция добавления строки товара в корзину


exports.normalPrice = normalPrice;

function addItems(id) {
  var addItem = '';

  _shopping.catalog.forEach(function (item) {
    if (id == item.id) {
      addItem = "\n                <div id=\"itm_".concat(item.id, "\" class=\"basket__item\">\n                    <div class=\"item__img\" style=\"background: url(").concat(item.img, ") no-repeat center; background-size: contain;\"></div>\n                    <div class=\"item__name\">").concat(item.name, "/").concat(item.description, "</div>\n                    <div class=\"item__price\">").concat(item.price, "</div>\n                </div>\n            ");
      items.innerHTML += addItem;
      exports.price = price = price + priceNum(item.price);
      fullPrice.textContent = normalPrice(price);
      updateStorage();
    }
  });
} // Функция добавление товара в корзину из главной страницы и модального окна


var addMain = function addMain(preId, className) {
  var replace = new RegExp(preId, 'g');
  var buttns = document.getElementsByClassName(className);
  var currentTargetId = event.target.id.replace(replace, '');

  if (event.target == buttns[currentTargetId - 1]) {
    addItems(currentTargetId);
  }
}; // Событие добавления товара в корзину из главной страницы


exports.addMain = addMain;

_shopping.goodsList.addEventListener('click', function () {
  addMain('addbtn_', 'goods-card__basket-add');
}); // Событие добавления товара в корзину из окна быстрого просмотра


_shopping.modals.addEventListener('click', function () {
  addMain('popbtn_', 'popup__basket-btn');
}); // Функция открытия корзины


var openBasket = function openBasket() {
  return basket.style.display = 'block';
}; // Событие открытия корзины


exports.openBasket = openBasket;
shoppingCart.addEventListener('click', openBasket); // Функция закрытия корзины

var closeBasket = function closeBasket() {
  if (event.target == basketBody) {
    basket.style.display = 'none';
  } else if (event.target == basketClose) {
    basket.style.display = 'none';
  }

  event.preventDefault();
}; // Событие закрытия корзины


exports.closeBasket = closeBasket;
shoppingCart.addEventListener('click', closeBasket); // Функция очистки корзины

var clearBasket = function clearBasket() {
  items.innerHTML = '';
  exports.price = price = 0;
  fullPrice.textContent = '0';
  updateStorage();
}; // Событие очистки корзины


exports.clearBasket = clearBasket;
basketClear.addEventListener('click', clearBasket);
},{"../shopping/shopping.js":"shopping/shopping.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _search = require("./header/search.js");

var _shopping = require("./shopping/shopping.js");

var _shopping_cart = require("./header/shopping_cart.js");
},{"./header/search.js":"header/search.js","./shopping/shopping.js":"shopping/shopping.js","./header/shopping_cart.js":"header/shopping_cart.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50120" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map