const makeupCategory = document.querySelector('.category__item#makeup');
const productWrappers = document.querySelectorAll('.product__wrapper');

makeupCategory.addEventListener("click", function(){
    productWrappers.forEach(function(productWrapper) {
        if (productWrapper.style.display === "none") {
            productWrapper.style.display = "block";
        } else {
            productWrapper.style.display = "none";
        }
    });

    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
});

const makeupMascara = document.querySelector('.product__wrapper#product__mascara');
const productPurchase = document.querySelector('.product__purchase#purchase__mascara');

makeupMascara.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    productPurchase.style.display = "block";
});

const makeupFoundation = document.querySelector('.product__wrapper#product__foundation');
const foundationPurchase = document.querySelector('.product__purchase#purchase__foundation');

makeupFoundation.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    foundationPurchase.style.display = "block";
});

const makeupEyeshadow = document.querySelector('.product__wrapper#product__shadow');
const eyeshadowPurchase = document.querySelector('.product__purchase#purchase__eyeshd');

makeupEyeshadow.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    eyeshadowPurchase.style.display = "block";
});

const makeupLipstick = document.querySelector('.product__wrapper#product__lipstick');
const lipstickPurchase = document.querySelector('.product__purchase#purchase__lipstick');

makeupLipstick.addEventListener("click", function(){
    let purchases = document.querySelectorAll('.product__purchase');
    for (let purchase of purchases) {
        purchase.style.display = "none";
    }
    lipstickPurchase.style.display = "block";
});

const purchaseButtons = document.querySelectorAll("#btn_purchase");

function buyProduct() {
    purchaseButtons.forEach(function(purchaseButton) {
        purchaseButton.addEventListener("click", function(){
            return alert("The product has been purchased. Thank you.");
        });
    });
};

buyProduct();


