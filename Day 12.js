// OBJECT 

let Identity = {
    name : "Suhail",
    major : "BCA",
    age : 20
  }

console.log(Identity); 
console.log(typeof(Identity)); 

// ANOTHER METHOD OF CREATING OBJECTS 

let Id = new Object();
console.log(Id);
 
Id.name = "Mohammed Suhail";
Id.major = "BCA";
Id.age = 20;
console.log(Id);
console.log("Calling one property in the object: " + Id.name);
Id.cgpa = 80; 
console.log(Id); 

// ANOTHER WAY TO GET THE PROPERTIES 

console.log(Id['major']);
Id.active = true;
console.log(Id); 

// NEW PROBLEM WITh OBJECT 

let Material = new Object();

let property = "price";
Material[property] = "70000";
console.log(Material);

Material.ans = 80000;
console.log(Material);

console.log(Material.price);

console.log(Material[property]);

Material.ans = 90000;
console.log(Material);  

// CREATING ARRAY IN THE OBJECT AND CREATING OBJECT WITHIN OBJECT 

let Material1 = {
    name : "Laptop",
    price : 90000,
    quantity:1,
    Types : ['mobiles','laptops'],
    dimensions : {
    length : 15,
    breadth : 25 }
}
 
 console.log(Material1);
 console.log(Material1.Types[0]);
 console.log(Material1.dimensions.length);
 console.log(Material1.dimensions['length']);

 // HOW TO USE METHODS IN OBJECT 

let Material2 = {
    Brand : "Lenovo",
    Price : 50000,
    Quantity : 1,
    buynow(){
     console.log("Item purchased Successfully")
    },
    AddToCart : function(){
     console.log("Item added to cart Successfully")
    }
}

console.log(Material2);
Material2.buynow();
Material2.AddToCart();
