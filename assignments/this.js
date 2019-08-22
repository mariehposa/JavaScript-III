/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of *this* will be the window or console object when it is in the global scope. This is known as window binding.
* 2. When a function is called by a preceding dot, the object before the dot is *this*. This is known as implicit binding.
* 3. *this* refers to the specific instance of the object that is created and returned by the constructor function when constructor function is used. This is known as new binding.
* 4. *this* is explicitly defined whenever javascript call or apply method is used. This is known as explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var windowBindingName = "I am here to test window binding";

function windowCall(){
    console.log(this.windowBindingName)
    return this;
}
windowCall();
// Principle 2

// code example for Implicit Binding
let myNameObject = {
    myName: "Mariam",
    myNameFunction: function () {
        console.log(`My name is ${this.myName}`)
        return this;
    },
}

myNameObject.aa = function (){return this;}
// Principle 3

// code example for New Binding
function Food(name, type, price){
    this.name = name;
    this.type = type;
    this.price = price;
    this.isHot = true;
}

var Ricey = new  Food('Rice', 'Cereal', 'N500');

var beans =  new Food('Beans', 'Legume', 'N150')
// Principle 4
var name = 'Kiyani'
// code example for Explicit Binding
function explicitExample(){
    console.log(this)
    return (`I am ${this.name}`);
}
explicitExample()
explicitExample.call(beans)

var clone = explicitExample.bind(rice);