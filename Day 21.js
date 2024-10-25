//OOPS

let users = {
    name:'Fayas',
    age:20,
    login(){
        console.log('Hi',users.name);
        console.log('You are logged in.');
    },
    logout(){
        console.log('Hi',users.name);
        console.log('You are logged out.');
    }
} 

let users1 = {
    name:'Suhail',
    age:21,
    login(){
        console.log('Hi',users1.name);
        console.log('You are logged in.');
    },
    logout(){
        console.log('Hi',users1.name);
        console.log('You are logged out.');
    }
}

let users2 = {
    name:'Bukhari',
    age:24,
    login(){
        console.log('Hi',users2.name);
        console.log('You are logged in.');
    },
    logout(){
        console.log('Hi',users2.name);
        console.log('You are logged out.');
    }
}

// It just calling the method of the object with variable name. 
console.log("Using the objects seperately for seperate usernames: ");
console.log(""); 

users.login();
users1.login();
users2.logout(); 

// USING CLASS AND CONSTRUCTOR 
console.log("");

class User { 
    constructor(name,age) {
        this.name = name;
        this.age = age;   
    } 

    login(){
        console.log('Hi',this.name);
        console.log('You are logged in.');
    }
    logout(){
        console.log('Hi',this.name);
        console.log('You are logged out.');
    }
} 

// Create the object for the class and using constructor. In constructor, i used "this" keyword. "This" keyword means identifying the current object.
// And calling very easily. The main point is constructor parameters only access with "this" keyword. And it is another way to calling a method with 
// classname of the constructor. 
console.log("Using class and constructor for create more usernames with objects: ");
console.log("");

let userOne = new User('Asif',20);
let userTwo = new User('Ajeem',23);
let userThree = new User('Salim',22);
userOne.login();
userTwo.logout();
userThree.login(); 

console.log("");
console.log("Both are same, but second method is a easiest method. "); 
