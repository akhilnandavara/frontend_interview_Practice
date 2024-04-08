// CLOSURE Interview Question

// Question 1 : Lexical Scope

// global scope
// function local(){
//     // local scope
//     var username = 'Hello_Coder'
//     console.log(username)
// }
// local()


// Question 2 : Closure

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();


// Question 3 : Closure scope chain 

// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // log 20


// Question 4 : Output

// let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1;
//         console.log(count); //1
//     }
//     console.log(count);// 0
// })();


// Question 5 : Write function for this addSix()

// function createBase(num){
//     return function (innerNum) {
//         console.log(innerNum + num);
//     };
// }
// var addSix = createBase(6);
// addSix(10);
// addSix(21);


// Question 6 : Time Optimization
// without closure
function find(index) {
    let a = [];
    for (let i =0;i<1000000;i++){
        a[i]= i*i;
    }

    console.log(a[index]);    
}
console.time("without closure 6");
find(6);
console.timeEnd("without closure 6");
console.time("without closure 50");
find(50);
console.timeEnd("without closure 50");

// with closure 
function find1() {
    let a = [];
    for (let i =0;i<1000000;i++){
        a[i]= i*i;
    }
    return function(index){
        console.log(a[index]);    
    }
    
}
const closure = find1();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");
