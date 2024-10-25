// MATH OBJECT

let a = Math.round(6.5);
console.log("Math.round of 6.5 = " + a);

let b = Math.floor(6.7);
console.log("Math.floor of 6.7 = " + b);

let c = Math.ceil(6.2);
console.log("Math.ceil of 6.2 = " + c); 

let d = Math.sqrt(25);
console.log("Math.sqrt of 25 = " + d);

let e = Math.abs(-4);
console.log("Math.abs of -4 = " + e);

let f = Math.pow(5,3);
console.log("Math.pow of (5,3) = " + f); 

let g = Math.max(5,12,7,6,3);
console.log("Math.max of (5,12,7,6,3) = " + g);

let h = Math.min(5,12,7,6,3);
console.log("Math.min of (5,12,7,6,3) = " + h); 

let i = Math.random();
console.log("Math.random of () = " + i); 

let i2 = Math.random()*6;
console.log("Math.random of ()*6 = " + i2); 

let j = Math.floor(Math.random()*10)+1;
console.log("Math.floor(Math.random()*10)+1 = " + j); 

// The "+1" is starting the number of value, if i give a "10" on that position, it will be start at "10" and take the random values above "10".
// The "*10" is ending the number of value, if i give a "+1" and "*10" to that position, then it will be generate a random values between "1 to 10". 