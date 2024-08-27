// immediately invoked function Expressions (IIFE)

(function fun1(){       //named IIFE
    console.log(`DB CONNECTED`);
}) ();

(() => {    // unnamed IIFE
    console.log(`DB CONNECTED 2nd`);
}) ();

((name) => {
    console.log(`DB CONNECTED ${name}`);
}) ("chauhan")

