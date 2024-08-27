class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){                   
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
        console.log(this._email+" d");
    }
}
const obj = new user("aa@gmail", "a23T");
console.log(obj.email);     // gatter call

obj._email = "fieewfw"
console.log(obj.email);         // gatter call

obj.email = "@giljrtr"          // setter method present so set this email by setter
console.log(obj.email);     // gatter call


/* Notes: (1): the name of getter and setter should be same.
(2): if the return properties in getter is present in contructor(i.e it is define) so this is what return which is define in constructor. in this case setter will not call and no need to make setter method
setter will call when if it is not define in construtor then we has to be made setter method which set that properties(which is return from getter and not degine in constructor). 
in this case both calls run together but setter runs first and constuctor and setter assigned together  
*/