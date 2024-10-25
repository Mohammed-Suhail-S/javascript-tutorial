// ACCESSING ANOTHER FILE'S PROPERTIES AND METHODS 

import Car, { fillGas, repair } from "./Day 24.js"

let method = new Car();
method.drive();
fillGas();
repair(); 

// SYNCHRONOUS - means one process is completed then next process is start to complete. 

console.log('Hello..'); // Action 1 

function sync(){
    console.log('step 1');
    console.log('step 2');
    console.log('step 3');
}

sync(); // Action 2 

setTimeout(()=>console.log('step1'),1000); // Action 4 
setTimeout(()=>console.log('step2'),2000); // Action 5 
setTimeout(()=>console.log('step3'),5000); // Action 6 

console.log('Bye'); // Action 3 

// "SET INTERVAL()" - means once the process is start then it will be running continuously like a loop. 
// setInterval( () => console.log("Hello buddy!.."), 2000); 

// TERNARY OPERATOR - is a shortand if concept. 

let x = 10;
let y = 20; 
let z = x < y ? "The Condition is True." : "The Condition is False."; 
console.log(z); 
