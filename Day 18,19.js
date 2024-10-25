// FUNCTION EXPRESSION WITH ARRAY 

let arr = [1,2,3,4,5,6,7,8,9,10];
function knowsum(arr) {
    let sum = 0;
    for(let val of arr) {
        sum = sum + val;
    }
    return sum; 
}

console.log(knowsum(arr)); 

// VOLUME EQUATION WITH FUNCTION EXPRESSION 

let vol = function(l,b,h) {
    return l*b*h;
}

console.log(vol(2,3,4)); 

// ARROW FUNCTION (SIMPLE FUNCTION) -> It is a shortand method 

let a = () => {
    return "Simple Function";
} 

console.log(a());

// SAME VOLUME EQUATION WITH ARROW FUNCTION, BUT WITHOUT PARANTHESIS AND RETURN STATEMENT 

let volume = (l,b,h) => l*b*h;
console.log(volume(5,6,7)); 

// AREA OF CIRCLE WITH ARROW FUNCTION

let circle = (r) => Math.PI*r*r;
console.log(circle(5)); 

// USES OF "ARGUMENTS.LENGTH" KEYWORD 

function multiple() {
    let result = 1;
    for(i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }
    return result;
}
    
console.log(multiple(2,3,4,5)); 

// CALLBACK FUNCTION 
// PASSING FUNCTIONS FOR ARGUMENTS 

function first(name1) {
    console.log("Hello " + name1);
}

function second(name2) {
    console.log("Hello " + name2);
} 

function third(name3) {
    first("Suhail");
    second("Ajeem");
    console.log("Hello " + name3);
}

third("Arjun"); 

// FOR EACH 
// PRINT IS CALLBACK FUNCTION 

let arr1 = ["Developer","Tester","Designer"];
arr1.forEach(display);

function display(res) {
    console.log(res);
}

// DAY 51
// RECURSION METHOD 

function fact(n) {
    if(n==1) {
        return n;
    }
        return n*fact(n-1);
}

console.log(fact(6)); 

// MY METHOD FOR RECURSION 

function call(str) {
    console.log(str);
    if(str.length == 0) {
        return str;
    }
    return call(str.slice(0,-1));
}

console.log(call("Mohammed Suhail")); 