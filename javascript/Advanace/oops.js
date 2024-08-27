function user(username, LoginCount, isloggedIn){    // constructor function
    this.username = username;
    this.LoginCount = LoginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`welcome to ${this.username}`);
    }
    return this;  // can write or not
}
const userOne = new user("Aditya", 3, true);    // when new keyword is create, empty object is crate
const userTwo = new user("chauhan", 6, false);
console.log(userOne.greeting());
console.log(userTwo);