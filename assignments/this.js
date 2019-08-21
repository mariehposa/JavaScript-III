/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
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

// Principle 2

// code example for Implicit Binding
let myNameObject = {
    myName: "Mariam",
    myNameFunction: function () {
        console.log(`My name is ${this.myName}`)
        return this;
    },
}

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding