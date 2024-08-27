const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();          // resolve then se connected hota hai
    }, 1000);
})
promiseOne.then(function(){     // in .then values are returned from the promise
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aditya", email: "aditya@java.com"})
    },1000)
}).then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
         let error = true;
         if(!error){
            resolve({username: "Aditya", email: "aditya@java.com"})
         } else{
            reject('ERROR: SOMETHING WENT WRONG')
         }
    },1000)
})

PromiseFour.then((user) => {
    return user.username;       // return value then mein aati hai
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("The Promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
         if(!error){
            resolve({username: "javascript", password: "@1344"})
         } else{
            reject('ERROR: JS WENT WRONG')
         }
    }, 1000);
})
async function cosumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
cosumedPromiseFive()

// async function getAllusers(){
//     try {
//         const response  = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E', error);
//     }
// }
// getAllusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    // console.log(typeof response);
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})