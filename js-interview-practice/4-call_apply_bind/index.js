// CALL, APPLY & BIND Interview Question


// Question 1 : What is Call?

function sayHello(){
    return "Hello " + this.name;
}
          
var obj = {name: "Piyush"};        
sayHello.call(obj);


// Question 2 : What is Apply?

function sayHelloOne(day){
    return "Hello " + this.name + " today is " + day ;
}
          
var obj = {name: "Piyush"};        
console.log( sayHelloOne.apply(obj, ['Monday']))


// Question 3 : What is Bind?

function sayHello(){
    return "Hello " + this.name;
}
          
var obj = {name: "Piyush"};          
const helloFn = sayHello.bind(obj);
// console.log(helloFn())


// Question 4 : Output

const personOne = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

// console.log(sayHi.call(personOne, 24));
// console.log(sayHi.bind(personOne, 24));


// Question 5 : Call with function inside object

const age = 10;
var person = {
	name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
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

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));  // this inside arrow function is window or parent normal function
}, 0);


// Question 7 : Call printAnimals such that it prints all animals in object

const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];
  
function printAnimals(i) {
     this.print=function () {
        console.log(this)
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
     this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i); 
}

