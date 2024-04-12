// OBJECT Interview Questions


// Question 1 : Delete keyword in Object

const func = (function(a){
    delete a;
    return a;
  })(5);
  
console.log(func);

// Computed Properties

let property = "firstName"
let name = "Piyush Agarwal"

let person = {
  [property]: name,
};

// Accessing
alert( bag.firstName );
alert( bag[property] );

// Looping in Object

let user1 = {
    name: "Piyush",
    age: 24,
  };
  
  for (let key in user1) {
    alert( key );  // name, age
    alert( user[key] ); // Piyush, 24
}


// Question 2 : Output

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);


// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};
  
multiplyNumeric(menu);

function multiplyByTwo(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}


// Question 4 : Output (Important)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);


// Question 5 : JSON.Stringify and JSON.parse 

const userOne = {
    name : "piyush",
    age : 87
};

const strObj = JSON.stringify(userOne);

console.log(JSON.parse(strObj));


// Question 6 : Output

console.log([...'Lydia']);


// Question 7 : Output

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
