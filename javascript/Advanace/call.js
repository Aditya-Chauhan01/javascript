function setUser(username){     //when this fun. done their works then there execution context out from the stack with their properties(variable, method), so need to hold the reference
    this.username = username;   // ye fun niche wale this ko use kr rha hai
}
function createUser(username, email, password){
    setUser.call(this, username)      // through call method, hold the reference of setUser

    this.email = email;
    this.password = password;
}

const print = new createUser("Aditya", "Adi@google.com", "132")
console.log(print);