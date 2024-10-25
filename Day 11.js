// QUERY SELECTOR ( USED FOR CALLING CLASS, ID, ELEMENT )
// USED "ONCLICK" METHOD IN JAVASCRIPT 

let but = document.querySelector('button');
but.addEventListener('click',result);

function result() {
    let a = "Mohammed Suhail";
    console.log(a);
} 

// HOW TO GET SELECT OPTIONS IN JAVASCRIPT STEP BY STEP 

let bike = document.querySelector('#opt');
console.log(bike);
console.log(bike.options);
console.log(bike.options[opt.selectedIndex]);
console.log(bike.options[opt.selectedIndex].value); 

// SWITCH STATEMENT 

let num = 7;
switch(num) {
    case 1: 
    console.log("Sunday");
    break;

    case 3: 
    console.log("Tuesday");
    break;

    case 5: 
    console.log("Thursday");
    break;

    case 7:
    console.log( "Saturday");
    break;

    default: 
    console.log("Not Available");
    break;
}
