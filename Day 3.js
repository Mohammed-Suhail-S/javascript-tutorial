// PRE INCREMENT 

let a = 10;
console.log(++a);

// POST INCREMENT

let b = 15;
console.log(b++);
console.log(b);

// COMPARISON OPERATOR 

let c = 10;
console.log(c==20);

let c1 = 10;
console.log(c1!=20);

let d = 20;
console.log(d>20);

let d1 = 20;
console.log(d1>=20);

let e = '5';
let f = 5;
console.log(e===f); // "===" -->  IT CHECKS THE DATATYPE. SO, IT WILL BE FALSE 

let e1 = '5';
let f1 = 5;
console.log(e1==f1);

let A = 20;
let B = 10;
let C = 30;

console.log(a>b && a<b && a<c);
console.log(a>c || a>c || a<b);
console.log(a>b && a<b || a<c); 
console.log(!(a>b && a<b && a<c));

function abc() {
    let a = document.getElementById('fir')
    a.innerHTML = "Function";
    var b = document.getElementById('sec')
    b.innerHTML = "For Javascript";
} 