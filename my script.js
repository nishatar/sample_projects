console.log("JavaScript connected");
 console.log("Hello from JavaScript!");
/*variable declaration*/
let name = "Nisha";
const age = 21;
console.log("Name:", name);
console.log("Age:", age);
let _age = 16;
/*if else condition practice*/
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
/* else if condition practice*/
let mark = 1000;
if(mark >= 1000)
{
    console.log(" PASS");

}
    else if(age>=900)
    {
        console.log("PASS");
    }
    else{
        console.log('fail');
    }
    /*switch statement  practice*/
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
let fruit = "Apple";

switch(fruit) {
  case "Banana":
    console.log("Yellow");
    break;

  case "Mango":
    console.log("Sweet");
    break;

  default:
    console.log("Unknown fruit");
}
/*add two numbers*/
let operator = "+,-,";
let a = 5;
let b = 3;
let add = a+b;
let sub= a-b;
console.log(add)
console.log(sub)
/*switch statement  practice add two numbers*/
let _operator = "+"; 
let _a = 5;
let _b = 3;
let result;

switch (operator) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  default:
    result = "Invalid operator";
}

console.log(result);
/*loop  practice*/
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
/* while loop  practice*/
let _i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);
/* even odd number print loop  practice*/
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " even");
  } else {
    console.log(i + " odd");
  }
}
/* funtion with return two number addition*/
// function $add(c,d){
//     return  c + d ; 
// }
// let _result = $add(5, 3);
// console.log(result); // 8
// let _newresult = $add(6,8);
// console.log(_newresult); // 8
