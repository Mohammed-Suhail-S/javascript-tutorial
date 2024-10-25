// COLOR FLIPPER 

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function change() {
    let random = Math.floor(Math.random()*16);
    console.log(hex[random]);
    return hex[random];
}

function action() {
    let hex_code = "#";
    for(i=1;i<=6;i++) {
        hex_code = hex_code + change();
        console.log(hex_code);
    }

    let colortext = document.getElementById('color_id');
    colortext.innerHTML = hex_code;

    let colorflip = document.getElementById('flip');
    colorflip.style.backgroundColor = hex_code;
    
}

// let random1 = Math.floor(Math.random()*16);
// console.log(random1); 