// for of loop
const arr = [1, 3, 4,]

for (const idx of arr) {
    // console.log(idx);
}

const greetings = "Hello world!"        // use in string
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//map : it is known for its uniqueness

const map = new Map()   
map.set('In', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('In', 'India')  //it not allow duplicate(keys)
map.set('In', 'Australia')  //last assign as first
// console.log(map);

for (const [keys, value] of map) {

    // console.log(keys, ':', value);
}

const myobj = {     // forof loop is not work in object for iteration
    js: "javascript",
    cpp: "c++",
    rb: "Ruby"
}
// myobj.forEach( (i) =>{
//     console.log(i);
// })
// for (const [key, value] of myobj) {
//     console.log(key, ":", value);
// }

for (const key in myobj) {      //for in loop 
    // console.log(key);    //prints only keys
    // console.log(myobj[key]);    // print value
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp", 5]      //array
for (const key in programming) {
    // console.log(key);    // print only index
    // console.log(programming[key]);  //print values
}
for (const key of programming) {
    // console.log(programming[key]);   //undefined
    // console.log(key);   
}

//Mostly we will use foreach loop in array
programming.forEach( function (val) {
    // console.log(val);
})

programming.forEach( (item) => {
    // console.log(item);
})

function printme(item){
    // console.log(item);
}
programming.forEach(printme)

// Note: forEach loop knows all the things about array(contains values,idx as well as an array in this order) 
programming.forEach((value, index, arr) => {
    console.log(index, value,arr);
})

// arr = [ {}, {}, {}]
const myarr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myarr.forEach( (item) => {
    // console.log(item.languageName);
})