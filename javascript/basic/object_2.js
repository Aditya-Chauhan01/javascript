// const obj = new Object()    //singleton object hota hai
const obj = {}

obj.id = "123abc"
obj.name = "Aadi"
obj.isLoggedIn = false

// console.log(obj);

const regularUser = {
    Organization: "RSS",
    fullDetails: {
        username: "Aditya Chauhan",
        IdCards: {
            pancard: "IDHF43",
            voterId: "hih43"
        }
    }
}
// console.log(regularUser.fullDetails.IdCards.pancard);

//merging two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4)  //target, source
// console.log(obj3);

const printobj = {...obj1, ...obj2, ...obj4}
console.log(printobj);

//when we take values from data base we get in the form of array of objects
const users = [
    {
        id: 1,
        email: "ifie.com"
    },
    {

    },
    {

    }
]

// console.log(users[0].email);      //this way we can access the values

console.log(Object.keys(obj));      //return in the form of array
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty('isLoggedIn'));  //for checking that property present or not