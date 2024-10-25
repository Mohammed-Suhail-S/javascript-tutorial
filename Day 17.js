// FUNCTION DECLARATION AND FUNCTION CALLING WITH PARAMETERS AND ARGUMENTS
// WITH RETURN STATEMENT 

function add(a,b) {
    return a + b;
}

console.log(add(2,3));

// WITHOUT RETURN STATEMENT 

function add1(a,b) {
    console.log(a + b);
}

add1(6,4); 

// WITHOUT PARAMETERS AND ARGUMENTS 

function title() {
    console.log("Welcome");
}

title();

// HOISTING -> It is only working in function declaration, not working in function expression. 

title1("Hello");

function title1(val) {
    console.log(val);
} 

// DEFAULT PARAMETERS 

function identity(name = "Suhail", role = "Developer") {
    console.log("Hello Mr." + name + " " + role);
}

identity(); 

// FUNCTION EXPRESSION WITH PARAMETERS AND ARGUMENTS

let oddeven = function(num) {
    return num%2==0;
}

console.log(oddeven(14)); 
