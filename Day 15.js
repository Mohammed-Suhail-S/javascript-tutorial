// INNER LOOP AND OUTER LOOP 

let a = []; 
for(i=1; i<5; i++) {
    a.push(i);
    for(j=1; j<5; j++) {
        a.push(j);
    }
}  
console.log(a); 

// PATTERN 
console.log(" ");

for(l = 0; l < 3; l++){
    let pattern = "";
    for(m = 0; m < 3-l; m++) {
        pattern = pattern + "* ";
    }
    console.log(pattern);
}

// TASK OF PATTERN 
console.log(" ");

for(l = 0; l < 3; l++){
    let pattern = "";
    for(m = 0; m < 1+l; m++) {
        pattern = pattern + "* ";
    }
    console.log(pattern);
} 

// FOR OFF 
console.log(" ");

let nam = ["suhail","praveen","arjun","ajeem","saravana"];
for(let print of nam) {
    console.log(print);
} 

//FOR IN 
console.log(" ");

let Id = {
    names: "Suhail",
    age: 21,
    regno: 214
}

for(let m in Id) {
    console.log(Id[m]);
}

// TASK OF PATTERN 2 
console.log(" ");

let rows = 3; 
    for (let i = 1; i <= rows; i++) {       
        let output = '';
        for (let j = 1; j <= rows - i; j++) {
            output += '   '; 
        }
        for (let k = 1; k <= i; k++) {
            output += '*';

            if (k <= i) {
                output += '     '; 
            }
        }
        console.log(output);
    }
