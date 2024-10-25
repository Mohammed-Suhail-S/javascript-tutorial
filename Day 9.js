// SPLICE 

let a1 = ['a','b','c','d','e'];
console.log(a1);

a1.splice(2,1,'s');
console.log(a1);

a1.splice(2,2,'t');
console.log(a1);

a1.splice(2,2,'s','t');
console.log(a1);

a1.splice(2,1,'o','u');
console.log(a1);

a1.splice(7,1,'s');
console.log(a1);

// SLICE 

a = [1,2,3,4,5];
console.log(a);
console.log(a.slice(1,4));
console.log(a.slice(-4,-1));
console.log(a.slice(-4,-3));

// REVERSE AND JOIN 

b = [1,2,3,4,5];
b.reverse();
console.log(b);

b1 = [1,2,3,4,5,6];
let c = b1.join();
console.log(c); // It will be convert from array to string
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);

// SPLIT 

let d = "html"
console.log(d);
let d1 = d.split('m');
console.log(d1); // It will be convert from string to array 

let d2 = '1,2,3,4,5'
console.log(d2);
d1 = d2.split(',');
console.log(d1);

// MERGE ARRAY

let e = [1,2,3];
console.log(e);
let f = [4,5,6];
console.log(f);
console.log(e.concat(f));   

// SPREAD OPERATOR ( ANOTHER OPTION FOR MERGE ARRAY )

let g = [...e,...f];
console.log(g); 
