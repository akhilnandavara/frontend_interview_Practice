// CLOSURE Interview Question

// Question 1 : Lexical Scope

// global scope
function local(){
    // local scope
    var username = 'Hello_Coder'
    console.log(username)
}
local()


// Question 2 : Closure

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();


// Question 3 : Closure scope chain 

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20


// Question 4 : Output

(function printCount(){
    let count = 0;
    if(count === 0){
        let count = 1;
        console.log(count); //1
    }
    console.log(count);// 0
})();


// Question 5 : Write function for this addSix()

function createBase(num){
    return function (innerNum) {
        console.log(innerNum + num);
    };
}
var addSix = createBase(6);
addSix(10);
addSix(21);


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


// Question 7 : how to create private counter in javascript

function counter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    function decrement(){
        count--;
        return count;
    }
    return {
        increment,
        decrement
    }
}
const count = counter();
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())

// Question 8 :what is modal pattern in javascript

var modal=(function outer(){
    function privateFunction(){
        console.log('private function')
    }
    return{
        publicFunction: function(){
            // privateFunction();
            console.log('public function')
        }
    }
})();


modal.publicFunction()
modal.privateFunction()

// Question 9 : once polyfill

function Once(fn) {
    let called = false;
    let result;
    return function (...arguments) {
        if (!called) {
            called = true
            result = fn.apply(this, arguments)
        }
        return result
    }
}
const hello= Once((a,b) => console.log("hello",a,b))
hello(1,2)
hello()

// Question 11 : Memoize Polyfill  

function myMemoize(fn,context) {
    
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){ 
            res[argsCache] = fn.call(context || this,...args);
        }
        return res[argsCache];    
    };
}

const clumsyProduct = (num1,num2) => {
    
    for (let i = 1; i <= 10000000; i++) {}
    return num1 * num2;    
}

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumsyProduct(10,5));
console.timeEnd("First call")

console.time("Second call");
console.log(MemoizeClumsyProduct(10,5));
console.timeEnd("Second call");


