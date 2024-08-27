let myHero = ["thor", "ironman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is : ${this.spiderman}`);
    }
}

Object.prototype.me = function(){   //we created prototype of Object(which is present in top of the hierachy)
    console.log(this);
    console.log(`i am present in all objects`);
}

Array.prototype.onlyforArray = function(){
    console.log(`Only for array`);
}
heroPower.me()
myHero.me()
// heroPower.onlyforArray() // not work bcz of object
myHero.onlyforArray()

//  Inheritance
const Hero = {
    first: "thor",
    second: "ironman"
}
const Power = {
    thor: "Hammer",
    ironman: "electricity",
    // __proto__: Hero  // __proto__: jisko bhi inherit krna hai  // old syntax
}
// console.log(Power.second);


// modern syntax
Object.setPrototypeOf(Power, Hero)      // hero has inherited

String.prototype.cut = function(){      // this prototype is particular for String object
    console.log(`actual length is: ${this.trim().length}`);
}
"aditya    ".cut()