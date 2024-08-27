function user(email, password){
    this.email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value;
            console.log("setter called");
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },

        // set: function(value){
        //     this._password = value;
        //     console.log("setter called");
        // }
    })
}
const code = new user("adi@google", "giogo1")
code.email = "hgewoi"
console.log(code.email);