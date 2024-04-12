// THIS KEYWORD

// Question 1 : this keyword

let a = 5
// console.log(this.a);


// Question 2 : this inside Method

let userZero = {
    name: "Akhil",
    age: 24,
      getDetails() {
          console.log(this.name)
      }
};
  
// userZero.getDetails(); 


// Question 3 : nested object 

let userOne = {
    name: "Akhil",
    age: 24,
      childObj:{
          newName:"Web developer",
          getDetails() {
              console.log(this.newName, "and" ,this.name)
          }
      }
};
  
// userOne.childObj.getDetails(); 


// Question 4 : Class & Constructor

class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Akhil") 
// User.getName();


// Question 5 : Output

const userTwo = {
    firstName: 'Akhil!',
    getName() {
      const firstName = 'Akhil!';
      return this.firstName;
    }
};

// console.log(userTwo.getName());


// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let userThree = makeUser();
  
// alert( userThree.ref.name ); // What's the result?


// Question 7 : What logs to console the following code snippet:

const userFour = {
    name: 'Akhil !',
    logMessage() {
      console.log(this.name); 
    }
};
setTimeout(userFour.logMessage, 1000);


// Question 8 : Output

const userFive = {
    name: 'Akhil',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};
// console.log(userFive.greet());    
// console.log(userFive.farewell()); 


// Question 9 :

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// Question 10 : Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
// object.method(callback, 1, 2);


// Question 11 : Implement this Code


// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);
