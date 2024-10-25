// API - GET, POST, PUT AND DELETE 

// GET THE API FROM JSON 

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then(res => res.json())
.then(msg => console.log(msg,msg[0].setup,msg[0].punchline))
.catch(err => console.log(err)) 

// POST THE API FROM JSON 

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify ({
        userId:214,
        id:456,
        title:'student',
        completed:true
    })
})

.then(response => response.json())
.then(json => console.log(json)) 
