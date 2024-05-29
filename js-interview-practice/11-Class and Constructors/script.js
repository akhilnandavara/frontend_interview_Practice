// Class and Constructors

// Creating your first class
class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
  }

  intro() {
    return `Hey, Its ${this.name}! Welcome to ${this.channel}`;
  }

  like() {
    this.videoLikes++;
    return `Liked this video! Current likes: ${this.videoLikes}`;
  }
}

// const codingClub1 = new Teacher("Akhil", "Coding Club");

// // Converting to Function Constructors

// function Teacher(name, channel, likes = 0) {
//   this.name = name;
//   this.channel = channel;
//   this.videoLikes = likes;
// }

// Teacher.prototype.intro = function () {
//   return `Hey, Its ${this.name}! Welcome to ${this.channel}`;
// };

// Teacher.prototype.like = function () {
//   this.videoLikes++;
//   return `Liked this video! Current likes: ${this.videoLikes}`;
// };

const codingClub1 = new Teacher("Akhil", "Coding Club");

Inheritance
class YouTubeTeacher extends Teacher {
  constructor(name, channel, likes, subscribers) {
    super(name, channel, likes);
    this.subscribers = subscribers;
  }

  static paidCourse() {
    return new YouTubeTeacher("Akhil", "CodinClub", 69, "60k");
  }

  subscribersCount() {
    return `${this.channel} has ${this.subscribers} subscribers.`;
  }
}

const ytTeacher = YouTubeTeacher.paidCourse();

// ----------- Interview Questions on Class and Constructors -----------

// Question 1 - Explain the difference between a class and an object in JavaScript.
// Answer: A class is a blueprint that defines the structure and behavior of objects.
// Objects are instances of classes that possess properties and methods defined by the class.

// Question 2 - What’s the Output?
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// const square = new Rectangle(5, 5);
// const rect = new Rectangle(4, 6);

// console.log(square.area()); // 25
// console.log(rect.area()); // 24

// Question 3 - How does inheritance work in JavaScript classes?
// Answer: Inheritance in JavaScript classes is achieved using the extends keyword.
// It allows a sub class(child class) to inherit properties and methods from a
// super class (parent class).

// Question 4 - What’s the Output?
// class Employee {
//    constructor() {
//      this.name = "John";
//    }
//    constructor() {
//      this.age = 30;
//    }
//  }

//  var employeeObject = new Employee();

// console.log(employeeObject.name);

// Solution - Uncaught SyntaxError: A class may only have one constructor

// Question 5 - Which approach is better and why?

const jamesbond = {
  firstName: "Akhil",
  lastName: "Nandavar",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`.trim();
  },
};

jamesbond.getFullName();

// or

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`.trim();
};

const jamesBond = new Person("Akhil", "Nandavar");
jamesBond.getFullName();

// Solution -
// Second approach is better since in the first approach, a closure is maintained
// for each copy of the object containing getFullName method.While in the second approach,
// the method is registered in the prototype rather than in every object.
// Thus, it is a more memory efficient approach.

// Question 6 - Implement this -

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    if (num != 0) {
      this.result /= num;
    } else {
      console.log("Cannot divite by 0");
    }
    return this;
  }

  getResult() {
    return this.result;
  }
}

const calc = new Calculator();
const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
// console.log(result); // 2.5
