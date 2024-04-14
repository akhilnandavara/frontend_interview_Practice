// CALL, APPLY & BIND Interview Question


// Question 1 : What is Call?

function sayHello() {
    return "Hello " + this.name;
}

var obj = { name: "Akhil" };
sayHello.call(obj);


// Question 2 : What is Apply?

function sayHelloOne(day) {
    return "Hello " + this.name + " today is " + day;
}

var obj = { name: "Akhil" };
// console.log( sayHelloOne.apply(obj, ['Monday']))


// Question 3 : What is Bind?

function sayHello() {
    return "Hello " + this.name;
}

var obj = { name: "Akhil" };
const helloFn = sayHello.bind(obj);
// console.log(helloFn())


// Question 4 : Output

const personOne = { name: 'Akhil' };

function sayHi(age) {
    return `${this.name} is ${age}`;
}

// console.log(sayHi.call(personOne, 24));
// console.log(sayHi.bind(personOne, 24));


// Question 5 : Call with function inside object

const age = 10;
var person = {
    name: "Akhil",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person2 = { age: 24 };
// console.log(person.getAge.call(person2))

// Question 6 : Output

var status = '😎';

setTimeout(() => {
    const status = '😍';

    const data = {
        status: '🥑',
        getStatus() {
            return this.status;
        },
    };

    //   console.log(data.getStatus());
    //   console.log(data.getStatus.call(this));  // this inside arrow function is window or parent normal function
}, 0);


// Question 7 : Call printAnimals such that it prints all animals in object

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species
            + ': ' + this.name);
    }
    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}


// Question 8 : apply to append an array to another
const array = ["a", "b", "c"];
const num = [1, 2, 3];

// array.push(...num); //method 1
array.push.apply(array, num); //method 2
console.log(array)


// Question 9 - Using apply to enhane built-in functions

// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7]
console.log(Math.max.apply(null, numbers))

// Question 11 : Bind Chaining?

function f() {
    alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f();


// Question 12 : Fix the code

function checkPassword(success, failed) {
    let password = prompt("Password?", '');
    if (password == "xyz") success();
    else failed();
}

let user = {
    name: 'Akhil',

    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },

    loginFailed() {
        console.log(`${this.name} failed to log in`);
    },

};

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// Question 13 : Partial application for login

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "xyz" || "XYZ") ok();
    else fail();
}

let userDetails = {
    name: 'Akhil',

    login(result) {
        console.log(this.name + (result ? ' login successful' : ' login failed'));
    }
};

// askPassword(userDetails.login.bind(userDetails,true),userDetails.login.bind(userDetails,false))

// Question 14 :  Explicit Binding with Arrow Function

const ageTwo = 10;
// console.log(this.ageTwo);

var person = {
    name: "Akhil",
    ageTwo: 20,
    getAgeArrow: () => console.log(this.ageTwo),
    getAge: function () {
        console.log(this.ageTwo);
    }
}

var person2 = { ageTwo: 24 };
person.getAgeArrow.call(person2);  // undefined
person.getAge.call(person2);// 24




// Question 15 : Output -polyfill for call

const userData = {
    name: "Akhil",
    age: 24
}

function printData(city) {
    console.log(this.name + " " + this.age + " from " + city)
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new TypeError(this + " is not a function")
    }
    context.fn= this
    context.fn(...args)
    // delete context.fn // this will remove the function from the context object
}

// printData.myCall(userData, ["Delhi", "India"])


// Question 16 : Output -polyfill for apply
Function.prototype.myApply = function (context = {}, args) {
    if(typeof this !== 'function') throw new TypeError(this + ' is not a function');
    if(!Array.isArray(args))  throw new TypeError('Second argument should be an array')
    context.fn = this;
    context.fn(args)
}

// printData.myApply(userData,[ "Delhi", "India"])


// Question 17 : Output -polyfill for bind

Function.prototype.myBind=function (context,...args){
    if(typeof this!== "function") throw new TypeError(this + 'is not  callable function')

    context.fn=this
    return function(...nextArgs){
        return context.fn(...args, ...nextArgs)
    }
}

const printUserData=printData.myBind(userData)
// console.log(printUserData)
printUserData("Delhi", "India")