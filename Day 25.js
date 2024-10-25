function Time() {

    let correctTime = new Date();
    let hr = correctTime.getHours();
    let min = correctTime.getMinutes();
    let sec = correctTime.getSeconds();
    let ampm = document.getElementById('ampm');

    if(hr > 12) {
        ampm.innerHTML = 'PM';
        hr = hr - 12;
    }
    else {
        ampm.innerHTML = 'AM';
    } 

    function addZero(num) {
        if(num < 10) {
            return "0" + num;
        }
        else {
            return num;
        }
    } 

    document.getElementById('hr').innerHTML = addZero(hr);
    document.getElementById('min').innerHTML = addZero(min);
    document.getElementById('sec').innerHTML = addZero(sec);

}

setInterval(Time,1000); 
