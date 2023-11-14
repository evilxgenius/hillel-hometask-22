// Мережа фастфудів пропонує кілька видів гамбургерів:
// - маленький (50 тугриків, 20 калорій);
// - великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:
// - сиром (+ 10 тугриків, + 20 калорій);
// - салатом (+ 20 тугриків, + 5 калорій);
// - картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:
// - посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
// Приклад роботи коду:
// // маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//
// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
//
// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());
//
// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());
//
// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);
//
// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 }
    static SIZE_BIG = { price: 100, calories: 40 }
    static STUFFING_CHEESE = { price_plus: 10, calories_plus: 20 }
    static STUFFING_SALAD = { price_plus: 20, calories_plus: 5 }
    static STUFFING_POTATO = { price_plus: 15, calories_plus: 10 }
    static TOPPING_SAUCE = { price_plus: 15, calories_plus: 0 }
    static TOPPING_MAYO = { price_plus: 20, calories_plus: 5 }

    _stuff = [];

    constructor(size = Hamburger.SIZE_SMALL, stuffing = {}) {
        this._base_price = size['price'];
        this._base_calories = size['calories'];
        this._addStuff(stuffing);
    }

    addTopping(topping) {
        this._addStuff(topping)
    }

    calculateCalories() {
        const calories = this._stuff.reduce((memo, s) => memo + s['calories_plus'], 0);
        return calories + this._base_calories;
    }

    calculatePrice() {
        const calories = this._stuff.reduce((memo, s) => memo + s['price_plus'], 0);
        return calories + this._base_price;
    }
    _addStuff(stuff) {
        if (stuff.length && !stuff.all(k => k.endsWith('plus'))) return false;

        this._stuff.push(stuff);

        return true;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

console.log('+-------------+');
console.log('Base price: ' + hamburger.calculatePrice());
console.log('Base calories: ' + hamburger.calculateCalories());

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('+-------------+');
console.log('Mayo is added: ', Hamburger.TOPPING_MAYO);
console.log('Price: ' + hamburger.calculatePrice());
console.log(`Calories: ` + hamburger.calculateCalories());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('+-------------+');
console.log('Sauce is added: ', Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());

console.log('+-------------+');
