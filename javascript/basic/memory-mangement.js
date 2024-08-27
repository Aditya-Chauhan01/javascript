// Two types of memory
// Stack(primitive), Heap(non-primitive)

let Name = "aditya"
let anothername = Name

anothername = "don"
console.log(Name);
console.log(anothername);

let one = {
    age: 22
}
let two = one
two.age = 20
console.log(one);
console.log(two);