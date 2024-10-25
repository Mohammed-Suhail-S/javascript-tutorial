// 2D MATRICES 

let a = [[1,2,3],[4,5,6],[7,8,9]];
console.log(a);

let a1 = [1,2,[4,5,6,['a','b','c',['e','f'],2],5,[78,23,["suhail","asif",[88,99,[3654],11],"hanif"],56],6,7,[8,7,9,[2,7,8,5,["apple"],8],9],3,4],70];
// TAKE THE 11 
console.log(a1[2][5][2][2][3]); 
// TAKE THE SUHAIL 
console.log(a1[2][5][2][0]); 
// TAKE THE APPLE 
console.log(a1[2][8][3][4]);

// PUSH AND POP

let b = ['a','b','c','d'];
b.push('e');
console.log(b);

b.pop();
console.log(b);

// SHIFT AND UNSHIFT 

let c = ['a','b','c','d'];
c.shift();
console.log(c);

c.unshift('a');
console.log(c);

// DELETE AND SPLICE 

let d = ['a','b','c','d'];
delete d[2];
console.log(d); 

d.splice(2,1,'c');
console.log(d); 
