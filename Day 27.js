// ERROR HANDLING - TRY, CATCH, THROW AND FINALLY 
// Try - is used for if i know any errors will come to the code, then used this try concept. 
// Catch - is used for if any errors are come to the try, then try will send to the catch concept, then it will print the error statement of the code. 
// Throw - is like a "console.log", if any errors are come to the try, then which type of error will come, that error should be enter on that throw. 
// Finally - is used for if errors are come or not come it will be print on that console. 

try {
    let num = prompt("Enter the Number: ");

    if(isNaN(num)) {
        throw "Enter a Valid Number.";
    }

    if(num=="") {
        throw "Cannot be Empty.";
    }

    console.log("The Square of " + num + " is: " + num**2); 
}

catch(error) {
    console.log(error);
} 

finally {
    console.log("Hence Proved!"); 
}

// ERROR HANDLING WITH TWO VARIABLES 

try{
    num = prompt("Enter a number1");
    num1= prompt("Enter a number2");
    if(num == '' | num1 == '')
        throw 'Cannot be empty'
    else if(isNaN(num) | isNaN(num1))
        throw "Enter a valid Number"
    console.log(num + num1)
}

catch(error){
    console.log(error)
}

finally{
    console.log('program completed')
}

// json (JavaScript Object Notation)

let json5 = `{
    "Stock":"TCS",
    "Price":3500
}`
console.log(json5) // It is printing the complete json file to string. 
console.log(typeof(json5))
let aparsed = JSON.parse(json5) // It is converting from json file to object file. 
console.log(aparsed) // Print the converted file. 
console.log(aparsed['Stock'])
let c = JSON.stringify(aparsed) // It is converting from json file to string file. 
console.log(c) 

// Let's try to more json object. 

let json6 = `[{
    "Stock":"TCS",
    "Price":3500
},{
    "Stock":"HUL",
    "Price":2500
},{
    "Stock":"SBI",
    "Price":550 
}]`

let parsed = JSON.parse(json6)
console.log(parsed)
console.log(parsed[1].Price)
// It is used to convert string format. 
c = JSON.stringify(parsed)
console.log(c)
