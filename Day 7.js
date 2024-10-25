// PADSTART AND PADEND 

let names = "suhail";
console.log(names.length);

let a = names.padStart(11,"5");
console.log(a);

a = names.padEnd(11,"5");
console.log(a);

// STRING OBJECTS 

let str = "fruits";
a = str[0];
console.log("0 Index: " + a); 

a = str.charAt(3);
console.log("3 Index: " + a); 

a = str.charCodeAt(3);
console.log("Code of 3 Index Letter: " + a); 

let str2 = "banana";

a = str2.indexOf('a');
console.log("First 'a' Index is: " + a); 

a = str2.lastIndexOf('a');
console.log("Last 'a' Index is: " + a); 

a = str.search('s');
console.log("'s' Index is: " + a); 

a = str.includes('n');
console.log(a);

a = str.startsWith('f');
console.log(a);

a = str.endsWith('s');
console.log(a);

// TEMPLATE LITERAL (BACKTIK) 

let fname = "mohammed";
let lname = "suhail";
let movie = "raayan";
let theatre = "PVR";

let msg = `${fname} ${lname} is going to ${movie} movie at ${theatre} theatre`;
console.log(msg);

// ADDING DOUBLE QUOTES IN STRING 

let c = 'Using Single Quote - Welcome to "Javascript".';
console.log(c);

c = `Using Backtik - Welcome to "Javascript".`;
console.log(c);

//ARRAY 

// HOMOGENEOUS ARRAY

let d = [1,2,3,4,5];
console.log(d);
console.log(d.length);
console.log(typeof(d));

// HETEROGENEOUS ARRAY 

d = [1,"apple",true,'s'];
console.log(d);
console.log(d.length);
console.log(typeof(d));

console.log(d[1]);
console.log(d[d.length-1]);

// DIMENSIONAL ARRAY 

let e = [1,2,3,["apple","orange","mango"],4];
console.log(e);
console.log(e[3]);
console.log(e[3][2]); 
