// Activity 1

//Task 01
let Number = -2;

if(Number<0){
    console.log("Number Is Negative");
}else if(Number==0){
    console.log("Number Is Zero");
}else{
    console.log("Number is Possitive")
}

// Task 02

let age = 22;

if(age>18){
    console.log("Eligible For Vote");
}else{
    console.log("Not Eligible For Vote");
}


//Activity 02
// Task 03
let num1 = 20;
let num2 = 40;
let num3 = 600;

if(num1>num2){
    if(num1>num3){console.log(`${num1} is Greater `);}
    else{console.log(`${num3} Is greater`)}
}else{
    if(num2>num3){console.log(`${num2} IS greater`)}
    else{console.log(`${num3} IS Greater `)}
}

//Activity 03
// Task 04
let day = 7;

switch(day){
    case 1: console.log("Monday");
    break;

    case 2 : console.log("Tuesday")
    break;

    case 3 : console.log("Wednesday");
    break;

    case 4 : console.log("Thursday")
    break;

    case 5 : console.log("Friday");
    break;

    case 6 : console.log("saturday");
    break;

    case 7 :console.log("Sunday");
    break;

    default : console.log("please Enter valid Input")
}
 //Task 05
 
 let grade = 'F'
 switch (grade) {
    case 'A':
        console.log("Fisrt Class With Distinction");
        break;
    case 'B':
        console.log("Fisrt Class");
        break;
    case 'C':
        console.log("Second Class");
        break;
    case 'D':
        console.log("Pass");
        break;
    case 'F':
        console.log("Fail");
        break;
 
    default:
        console.log("Please Enter Valid Input");
        break;
 }

 //Activity 04
 //Task 06

 let value = 31;
 
 const ans =value%2==0 ? "Even Number" : "Odd Number";
 console.log(ans);

 //Activity 05
 //Task 07

 let year =2028;

 if((year % 4 ===0 && year % 100 !==0 )||( year % 400===0)){
    console.log(`${year} IS Leap Year`);
 }else console.log(`${year} Is NOT Year`);