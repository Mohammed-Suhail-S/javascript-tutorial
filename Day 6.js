// STRING OBJECT

// CONCATENATION 

let a = "Javascript is a Scripting Language.";
let b = "Javascript is a main piller of the website.";
console.log(a+" "+b);

// ANOTHER METHOD 

let a1 = "Javascript is a Scripting Language.";
let b1 = "Javascript is a main piller of the website.";
let c = a1.concat(" ",b1);
console.log(c); 

// FOR SPLITTING

let d = c.slice(4,10);
console.log(d); 

let d1 = c.substring(4,10);
console.log(d1); 

let d2 = c.slice(4);
console.log(d2); 

let d3 = c.slice(-5,-1);
console.log(d3); 

// FOR REPLACING 

let e = c.replace("Javascript","React JS");
console.log(e);

let e1 = c.replaceAll("Javascript","React JS");
console.log(e1); 

// FOR UPPERCASE AND LOWERCASE 

let f = c.toUpperCase();
console.log(f); 

let f1 = c.toLowerCase();
console.log(f1); 

// FOR LENGTH OF STRING

let g = c.length;
console.log("Length of String is: " + g); 

// FOR TRIM THE SPACES 

let h = "     remove the spaces      "; 
console.log(h);

let h1 = h.trim();
console.log(h1);

let h2 = h.trimStart();
console.log(h2);

let h3 = h.trimEnd();
console.log(h3); 