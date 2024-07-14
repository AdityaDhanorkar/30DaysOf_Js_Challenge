//Activity 1

let first = 25;
let second =50;

let sum = first+second;
let sub = first-second;
let mult = first*second;
let div = first/second;
let rem = first%second;

console.log(`Your quetions Ans Is ${sum}`);
console.log(`Your quetions Ans Is ${sub}`);
console.log(`Your quetions Ans Is ${mult}`);
console.log(`Your quetions Ans Is ${div}`);
console.log(`Your quetions Ans Is ${rem}`);
console.log(first**second) // POwer Of

//Activity 2

let a = 12
a+=15;

let b = 50;
b -=12.5;
console.log(a)
console.log(b)

//Activity 3  Comparison
let c = 25
let d = 50

if(c<d){
    console.log("C is Less Than D");
}else if(c>d){
    console.log("C is GreaterThan D")
}else{
    console.log("Equall")
}

if(c>=d){
    console.log("C is Less Than Or Equal To D")
}else if(c<=d){
    console.log("C is Greater Than Or Equal to D")
}else{
    console.log("Equal")
}

// let g = 50;
// let f =50;
// console.log(g==f)

// let h =100;
// var i =100;
// console.log(h===i)

console.log(5=='5');
console.log(5==='5');

//Activity 4 
let w = 12;
let x = 24 ;
let y = 36;
let z =48;
if(w < x && y < z){
    console.log("AND");
}

if(w>x || y<z){
    console.log("OR")
}

if(w<x && z <y){
    console.log("AND")
}

if(x<w || y>z){
    console.log("OR")
}

let v =12;
let u =11;
if(v!=u){
    console.log("Not Operator");
}

//Activity 5 Ternary 
let age = 21;
const Election = age >=18 ? "Eligible" : "Not Eligible";
console.log(Election);

let number = -1
const NegOrPos = number>=0 ? "Possitive" : "Negative";
console.log(NegOrPos) 