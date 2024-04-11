// CURRYING Interview Question

// Question 1 : Currying

function f(a) {
    return (b) => {
         return "works"
    }
}
console.log(f(1)(2));

// Question 2 : sum(2)(6)(1)
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3)) // 6



// Question 4 : Write a currying fn 
//       evaluate("sum")(4)(2)
//       evaluate("multiply")(4)(2)
//       evaluate("divide")(4)(2)
//       evaluate("substract")(4)(2);

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if(operation === "sum") return a+b;
            else if(operation ==="multiply") return a*b;
            else if(operation ==="divide") return a/b;
            else if(operation ==="substract") return a-b;
            else return "Invalid Operation!"
        }
    }
}
console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
console.log(evaluate("substr")(4)(2));


// Question 5 : Infinite Currying -> sum(1)(2)(3)....(n)

function add(a) {
    return function (b) {
        if(b) return add(a+b);
        return a;
    };
}
console.log(add(5)(2)(4)(8)())


// Question 6 : currying vs partial application

function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}

let x = sum(10);
x(3,12);
x(20,12);
x(20,13);
// OR
sum(10)(3,12);
sum(10)(20,12);
sum(10)(20,13);




// Question 7 : real world example of currying => Maniplating DOM

const updateElemText = id => content => document.querySelector(`#${id}`).textContent= content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Manipulated Dom!');


// question 8 : currying - bind
 const multiply=(a,b)=>a*b;

 const curriedMultiply=multiply.bind(this,2);
 console.log(curriedMultiply(4))

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}


// Question 9 : converting normal function to curried function sum(a,b,c) => sum(a)(b)(c

const curry = (fn) => {
    return function curriedSum(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        }
        return function (...next) {
            return curriedSum(...args, ...next);
        };
    }
}

const sumFunc = (a, b, c) => a + b + c;

const courriedSum = curry(sumFunc);
console.log(courriedSum(1)(2)(3))