// CONDITIONAL STATEMENTS 
// IF ELSE 

let age = 20;
if(age>=18) {
    console.log("You're Eligible To Vote.");
}
else {
    console.log("You're not Eligible To Vote."); 
}

// ELSE IF 

let number = 10;
if(number>0) {
    console.log("It is a Positive Number.");
}
else if(number==0) {
    console.log("It is a Zero.");
}
else {
    console.log("It is a Negative Number.");
} 

// ELSE IF WITH LOGICAL OPERATOR 

let mark = 93;
if(mark>=75) {
    console.log("Welldone");
}
else if(mark>=50 && mark<=74) {
    console.log("Good");
}
else if(mark>=30 && mark<=49) {
    console.log("Poor");
}
else {
    console.log("You Failed!");
} 
