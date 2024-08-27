let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2024, 0, 23) //months starts in js with 0
// let myCreatedDate = new Date(2024, 13, 23, 7,30) 
// let myCreatedDate = new Date("01-14-2004") 
// console.log(myCreatedDate.toLocaleString());   

  // let myTimeStamp = Date.now()  //get miliseconds up to
  // console.log(myTimeStamp);  
  // console.log(myCreatedDate.getTime());    
  // console.log(Math.floor(Date.now()/1000));    //converts in seconds

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.setDate(20)
// console.log(newDate.toLocaleString());


// newDate.toLocaleString('default', {
//     weekday: "long",
//     dateStyle: "full"
// })


// let a = settimeout(function() {

// // }, timeout)

// let a = setInterval(() => {
//   console.log("dhiho");
// }, 2000);
// a