const makeupCategory = document.querySelector('.category__item#makeup');
const skincareCategory = document.querySelector('.category__item#skincare');
const productWrappersMakeup = document.querySelectorAll('.product__wrapper--makeup');
const productWrappersSkincare = document.querySelectorAll('.product__wrapper--skincare');

makeupCategory.addEventListener("click", function(){
    productWrappersMakeup.forEach(function(productWrapper) {
        productWrapper.style.display = "block";
    });
    productWrappersSkincare.forEach(function(productWrapper) {
        productWrapper.style.display = "none";
    });

    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
});

skincareCategory.addEventListener("click", function(){
    productWrappersMakeup.forEach(function(productWrapper) {
        productWrapper.style.display = "none";
    });
    productWrappersSkincare.forEach(function(productWrapper) {
        productWrapper.style.display = "block";
    });

    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
});

const makeupMascara = document.querySelector('.product__wrapper--makeup#product__mascara');
const productPurchase = document.querySelector('.product__purchase#purchase__mascara');

makeupMascara.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    productPurchase.style.display = "block";
});

const makeupFoundation = document.querySelector('.product__wrapper--makeup#product__foundation');
const foundationPurchase = document.querySelector('.product__purchase#purchase__foundation');

makeupFoundation.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    foundationPurchase.style.display = "block";
});

const makeupEyeshadow = document.querySelector('.product__wrapper--makeup#product__shadow');
const eyeshadowPurchase = document.querySelector('.product__purchase#purchase__eyeshd');

makeupEyeshadow.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    eyeshadowPurchase.style.display = "block";
});

const makeupLipstick = document.querySelector('.product__wrapper--makeup#product__lipstick');
const lipstickPurchase = document.querySelector('.product__purchase#purchase__lipstick');

makeupLipstick.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    lipstickPurchase.style.display = "block";
});

const skincareCream = document.querySelector('.product__wrapper--skincare#product__cream');
const creamPurchase = document.querySelector('.product__purchase#purchase__cream');

skincareCream.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    creamPurchase.style.display = "block";
});

const skincareCreamHyd = document.querySelector('.product__wrapper--skincare#product__creamhyrd');
const creamHydPurchase = document.querySelector('.product__purchase#purchase__creamhyrd');

skincareCreamHyd.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    creamHydPurchase.style.display = "block";
});

const skincareToner = document.querySelector('.product__wrapper--skincare#product__toner');
const tonerPurchase = document.querySelector('.product__purchase#purchase__toner');

skincareToner.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    tonerPurchase.style.display = "block";
});

const skincareSerum = document.querySelector('.product__wrapper--skincare#product__serum');
const serumPurchase = document.querySelector('.product__purchase#purchase__serum');

skincareSerum.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    serumPurchase.style.display = "block";
});

const purchaseButtons = document.querySelectorAll("#btn_purchase");

purchaseButtons.forEach(function(purchaseButton) {
    purchaseButton.addEventListener("click", function(){
      productWrappersMakeup.forEach(function(productWrapper) {
        productWrapper.style.display = "none";
      });
      productWrappersSkincare.forEach(function(productWrapper) {
        productWrapper.style.display = "none";
      });
      let purchases = document.querySelectorAll('.product__purchase');
      for (let purchase of purchases) {
        purchase.style.display = "none";
      }
      return alert("The product has been purchased. Thank you.");
    });
  });
