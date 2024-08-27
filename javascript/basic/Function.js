function addTwoNumbers(num1, num2){
// console.log(num1 + num2);
return num1 + num2;
}
// console.log(addTwoNumbers(5,4));
const result =  addTwoNumbers(3,"5");     // calling the function 
// console.log("Result: ", result);

function loginUserMessage(username) {
    if (!username) {
        return "please enter a valid name";
    } else {
        return `${username} just logged in`;
    }
}

// Example usage:
console.log(loginUserMessage("Alice")); // Output: "Alice just logged in"
console.log(loginUserMessage()); //    undefined as parameter     Output: "please enter a valid name" 


