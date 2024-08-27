const myNums = [1, 2, 3]
const initialValue = 0;
// const myTotal = myNums.reduce( function (accumulator, currentValue){
//         console.log(`accumulator: ${accumulator} and currentvalue: ${currentValue}`);
//         return accumulator + currentValue
// }, initialValue )

// can aslo used with arrow function
const myTotal = myNums.reduce( (acc, currtval) => (acc + currtval),0 )
console.log(myTotal);

//for example
const ShoppingCard = [
    {
        course: 'web dev',
        price: 999
    },
    {
        course: 'android dev',
        price: 1999
    },
    {
        course: 'data analytics',
        price: 2999
    },
    {
        course: 'DSA',
        price: 4999
    },
];

const pay = ShoppingCard.reduce( (acc, item) => acc+item.price, 0 )
console.log(pay);