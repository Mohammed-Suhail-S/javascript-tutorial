// USING STATIC KEYWORD 
// Static keyword is used to find how many objects are there in class. It is used with only classname, because i find how many objects are there. 
class User { 
    static numberOfUsers = 0;
    constructor(name,age) {
        this.name = name;
        this.age = age; 
        User.numberOfUsers++;  
    } 

    login(){
        console.log('Hi',this.name);
        console.log('You are logged in.');
    }
    logout(){
        console.log('Hi',this.name);
        console.log('You are logged out.');
    }
    static displayTotalUsers(){
        console.log('Total number of Users is: '+ User.numberOfUsers++)
    }
} 

let userOne = new User('Asif',20);
let userTwo = new User('Ajeem',23);
let userThree = new User('Salim',22);
userOne.login();
userTwo.logout();
userThree.login(); 
User.displayTotalUsers(); 

// INHERITANCE is used to give one class properties and methods to another class that is called as inheritance. 
console.log("");

class User1 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    login() {
        console.log('Hi',this.name);
        console.log('You are logged in');   
    }
    logout() {
        console.log('Hi',this.name);
        console.log('You are logged out');
    }
}

class Paiduser extends User1 {
    constructor(name,age) {
        super(name,age); // super keyword is used to i have a two constructors in parent class and child class, but i have only one argument for 
        // passing the values to the constructors, now use the super keyword its requirement is give access for two constructors. 
        this.name = name;
        this.age = age;
    }
    message() {
        console.log('You have 100GB free storage');
    }
    // OVERRIDING - is used to i have "login" method already in parent class, then i used again the "login" method in child class that is called as 
    // overriding. 
    login() {
        console.log(this.name)
        console.log('Thank you for your support');
        // return this
    }
}

let paidUser1 = new Paiduser('Dhanavel',22);
paidUser1.login();
paidUser1.logout();
paidUser1.message();

// METHOD CHAINING - is used to calling two methods with one object name. 
// paidUser1.login().message()
