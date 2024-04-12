// OBJECT Interview Questions


// Question 1 : Delete keyword in Object

const func = (function(a){
    delete a;
    return a;
  })(5);
  
// console.log(func);

// Computed Properties

let property = "firstName"
let nameOne = "AKhil Nandavar"

let person = {
  [property]: nameOne,
};

// Accessing
// alert( person.firstName );
// alert( person[property] );

// Looping in Object

let user1 = {
    name: "Akhil",
    age: 24,
  };
  
  for (let key in user1) {
    // console.log( key );  // name, age
    // console.log( user1[key] ); // Piyush, 24
}


// Question 2 : Output

const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);


// Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};
  
multiplyNumeric(nums);

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}

// console.log(nums);

// Question 4 : Output (Important)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

// console.log(a[b]);


// Question 5 : JSON.Stringify and JSON.parse 

const userOne = {
    name : "AKhil",
    age : 87
};

const strObj = JSON.stringify(userOne);

// console.log(JSON.parse(strObj));


// Question 6 : Output

// console.log([...'Lydia']);


// Question 7 : Output

const userThree = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...userThree };

// console.log(admin);

// Question 8 : Output

const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);


// Question 9 : Output

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
console.log(shape.diameter());
console.log(shape.perimeter());


// Question 10 : Destructuring in object

let userFour = {
    name:"Akhil",
    age:24,
    fullName : {
        firstName : "Akhil",
        lastName : "Nandavar"
    }
};
  
const name = "Akki"    // to change name or renaming

const { name : myname } = userFour;
const { fullName : {firstName} } = userFour;

console.log(firstName);


// Question 11 : Output

// function getItems(fruitList, ...args, favoriteFruit) {//shows an error buz rest parameter should be last
//     return [...fruitList, ...args, favoriteFruit]
// }
  
// getItems(["banana", "apple"], "pear", "orange");


// Question 12 : Output

let C = { greeting: 'Hey!' };
let d;

d = C;
c.greeting = 'Hello';
console.log(d.greeting);


// Question 13 : Output

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});


// Question 14 : Output

let personData = { name: 'Lydia' };
const members = [personData];
personData = null;

console.log(members);


// Question 15 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);


// Question 16 : Output 

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ? 


// Question 17 : Shallow copy VS Deep copy

// Q - How to clone an object without referencing its keys to original object
const userFive = {
  name: 'Lydia',
  age: 21
}

const objOne= Object.assign({},userFive); 
// const objOne = {...userFive};
// const objOne = JSON.parse(JSON.stringify(userFive))
// objOne.name = 'Sarah';
console.log("Orginal Copy",userFive);
console.log(objOne);