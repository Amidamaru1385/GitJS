"use strict";
class basket {
    constructor(price, name, id) {
        this.price = price;
        this.name = name;
        this.id = id;
        this.cost = 0;
        this.value = 0;
    }
    addItem() {
        this.value += 1;
        this.cost += this.price;
    }
    basketClear() {
        this.value = 0;
        this.cost = 0;
    }
    showBasket(){
        if (this.value != 0){
            htmlBasket.innerHTML += this.value + " " + this.name + " " + this.cost + "<br>";
        }
    }
    showBasketClear(){
        htmlBasket.innerText = "";
    }
}



window.addEventListener("load", function () {
    let items = [];
    let buttons = document.querySelectorAll(".addButton");
    let clear = document.querySelector(".clearButton");
    let fullPrice = 0;
    buttons.forEach(function (item, i) {
        items[i] = new basket(+item.getAttribute("data-price"), item.getAttribute("data-name"), +item.getAttribute("data-id"));
        item.addEventListener("click", function () {
            items[i].addItem();
            items[i].showBasketClear();
            for(let i = 0; i <items.length; i++){
                items[i].showBasket();
            }
            fullPrice += items[i].price;
            basketFullPrice.innerText = fullPrice;
        })
    })
    clear.addEventListener("click", function(){
        for(let i = 0; i<items.length; i++){
            items[i].basketClear();
        }
        basketFullPrice.innerText = fullPrice = 0;
        items[0].showBasketClear();
    })
})