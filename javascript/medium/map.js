let mynumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mynumers = mynumers.map( (num) =>  num + 10 )
// console.log(mynumers);

// chaining of maps
const newNums = mynumers
            .map( (num) => num * 10 )   //get an array throgh this result become new array for next map operation
            .map( (num) => num + 1 )    // i think map is used for operation and if we check condition through map then it will return in form of true and false
            .filter( (num) => num > 40 );    // and filter is used for printing condition
console.log(newNums);