// Math.PI = 7
// console.log((Math.PI)); // we can't overwrite const property

const descriptors = Object.getOwnPropertyDescriptors(Math)  // all the properties or methods of Math library or object to unke hidden or extra properties(attributes) show hogi
console.log(descriptors);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")  // this method koi bhi ek object ya module ke properties par lgta hai
// console.log(descriptor);

const myobj = {
  name: "javascriptCourse",
  price: 300,
  isAvailable: true,

  order: function(){
    console.log(`you paid ${300}$`);
  }
}

console.log(Object.getOwnPropertyDescriptor(myobj, 'price'));
// console.log(Object.getOwnPropertyDescriptors(myobj));

Object.defineProperty(myobj, "price", {
  writable : true,
  enumerable: false,  // this property(price) is not iterable i.e. for loop does't access this property(price)
  configurable: true  // The property can be deleted, and its attributes (like enumerable, configurable, and writable) can be modified. 
})
myobj.price = 600
console.log(Object.getOwnPropertyDescriptor(myobj, 'price')); 

// Loop in object
for(let [key, value] of Object.entries(myobj)){
  if(typeof value != 'function'){
    console.log(`${key} : ${value}`);
  }
}

delete myobj.price; // bcz of configural property is true
console.log(Object.getOwnPropertyDescriptors(myobj)); 



