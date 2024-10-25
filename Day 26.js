// PROMISE - is used for API and it is a advanced concept of if else. 

let ticket =  new Promise((resolve,reject) => {
        let bookingSuccess = true;
        if (bookingSuccess)
            resolve();
        else   
            reject(); 
    }) 

ticket.then(() => console.log("Thanks buddy! I have trasferred amount"))
.catch(() => console.log("Thanks for trying! I will book a bus")); 

// PROMISE WITH RETURN 

function tickets() {
    return new Promise((resolve,reject) => {
        let bookingSuccess = true;
        if (bookingSuccess)
            resolve(800);
        else   
            reject(); 
    })
}

tickets().then((amount) => console.log(`Thanks buddy! I have trasferred Rs. ${amount}`))
.catch(() => console.log("Thanks for trying! I will book a bus")); 

// HEAD AND TAIL WITH PROMISE CONCEPT 

function tossCoin() {
    return new Promise((resolve,reject) => {
        const rand = Math.floor(Math.random()*2);
        console.log(rand);
        if(rand == 0)
            resolve();
        else
            reject();
    })
}
tossCoin().then(() => console.log("Congrats! Its Head! You Won"))
.catch(() => console.log("Sorry! Its Tail! You Loss")); 

// PROMISE WITH SET TIMEOUT 

let reachA = new Promise((resolve,reject) => {
    const reached = true;
    if(reached)
        setTimeout(resolve,3000,"Suhail reached");
    else
        reject("Suhail not reached");
})

let reachB = new Promise((resolve,reject) => {
    const reached = true;
    if(reached)
        setTimeout(resolve,1000,"Ajeem reached");
    else
        reject("Ajeem not reached");
})

let reachC = new Promise((resolve,reject) => {
    const reached = false;
    if(reached)
        setTimeout(resolve,2000,"Latha reached");
    else
        reject("Latha not reached");
})

// PROMISE ALL - is used to get the all promise objects, if any one object is false then it print the false object statement only, if all objects 
// are true then it will print all true object statements. 
Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message));  

// PROMISE ALL SETTLED - is used to get all the promise objects, if it is true or false, not consider that, it will print all the object statements 
// with status and reason. 
Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message));  
