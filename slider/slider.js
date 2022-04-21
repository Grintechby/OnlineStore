let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className+= "active";
}










document.getElementById("cart-link").onclick = function () {
    document.getElementById('cart').style.display = 'block';
    return true;
}
document.getElementById("cart__close").onclick = function () {
    document.getElementById('cart').style.display = 'none';
    return true;
}

let product=[];

function fun(){
  let x={};
  x.price=document.getElementById('price').textContent;
  x.title=document.getElementById('title').textContent;
  product.push(x);

  let deleteAllBtn = document.getElementById('clear_cart');
  deleteAllBtn.addEventListener('click', deleteAllBtnClick);
  function deleteAllBtnClick(){
    let parentId = document.getElementById('cart__product');
    parentId.parentNode.removeChild(parentId);
    
  }

  
  let iDiv = document.createElement('div');
  iDiv.id = product.length;
  iDiv.className = 'block';
  document.getElementById("cart__product").appendChild(iDiv);
  
  
  let para = document.createElement("span");
  let node = document.createTextNode(x.title+ ' ');
  para.appendChild(node);

  let element = document.getElementById(product.length);
  element.appendChild(para);
  
  para = document.createElement("span");
  para.classList.add("foo");
  node = document.createTextNode(x.price);
  para.appendChild(node);
  
  element.appendChild(para);
  

  let products = document.querySelectorAll('.foo'),
  summ = 0;
  [].forEach.call(products, function(el){
      summ += +el.innerText;
  });
  document.querySelector('.cart__sum').innerText = summ;
}

