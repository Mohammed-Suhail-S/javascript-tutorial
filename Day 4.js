function inches(){
    const a = document.getElementById('input').value
    console.log(a)
    const b = a * 2.54
    console.log(b)
    const c = document.getElementById('result')
    c.innerHTML = b +'cm'
    console.log(c)
} 