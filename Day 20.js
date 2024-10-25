// MAP, FILTER, REDUCE

// MAP 
// It's multiplying the both values of an array. 

let a = [12,13,14];
let b = a.map(x => x*3); 
console.log(b);

// FILTER 
// It only print the true condition of values, but i use "map" and give the condition then it will be take the values of boolean. 

let c = [15,20,25];
let d = c.filter(x => x<=20); 
console.log(d); 

// REDUCE 
// It just adding the values, but the process is the "value1" parameter is getting the first value only and store itself. Then coming next values are
// stored at "value2" parameter and the final process is add one by one to the "value1" parameter. 

let e = [43,65,96,22,74];
let f = e.reduce((value1,value2) => value1 + value2);
console.log(f); 

// ARRAY OF OBJECT 

const input = [{name: 'Suhail', age: 21}, {name: 'Asif', age: 20}]; 
const output = input.map(x => x.age + 5);
console.log(output); 
