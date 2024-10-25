// PRIVATE KEY is used to put a lock for methods and variables, the key is a get and set method to unlock the private key. 
class Temperature {
    constructor(temp) {
        this._temp = temp;
    }

    get temperature() {
        return this._temp + " deg celcius.";
    }

    set temperature(setTemp) {
        if(setTemp > 100)
            setTemp = 100;
        this._temp = setTemp;
    }
}

let obj = new Temperature(150);
console.log(obj.temperature);
obj.temperature = 2000;
console.log(obj.temperature); 

// FUNCTION CLOSURE - means a normal function variable access with another function is called as function closure. 
let a = 10;
function abc() {
    console.log("The value of 'a' is: " + a);
}
a = 20; // This one is a final output of the 'a' variable. 
abc(); 

// ANOTHER METHOD OF FUNCTION CLOSURE 
function outer() {
    let a = "Hi Bro";
    
    function inner() {
        let b = "Hello Bro";
        console.log(a);
        console.log(b);
    }
    inner();

}
outer(); 
