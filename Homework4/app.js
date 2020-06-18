'use strict';

function converted(units, tens, hundreds) {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

function converter(numberToConvert) {
    let convertedNumber = new converted();
    if (numberToConvert < 1000 && numberToConvert >= 0) {
        convertedNumber.units = numberToConvert % 10;
        convertedNumber.tens = (Math.floor(numberToConvert / 10)) % 10;
        convertedNumber.hundreds = Math.floor(numberToConvert / 100);
        return convertedNumber;
    }
    console.log("Введено что-то не то");
    return convertedNumber;
}

console.log(converter(432));

/* function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(){
    this.price = this.price * 0.75;
} */


class Product{
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price = this.price * 0.75;
    }
}

let prod = new Product("Alex", 100);
prod.make25PercentDiscount();
console.log(prod);


function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text){
        this.text = text;
    }


/* class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
} */

let post1 = new Post("Alex", "lorem", 25)
post1.edit("Test");
console.log(post1); 


/* function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}
AttachedPost.prototype = Post.prototype;
 */

class AttachedPost extends Post{
    constructor(author, text, date, highlighted){
        super(author, text, date)
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
}
}

let test = new AttachedPost("Nick", "Text", 25 );
test.makeTextHighlighted();
test.edit("dsdssddasdsadsd");
console.log(test);

