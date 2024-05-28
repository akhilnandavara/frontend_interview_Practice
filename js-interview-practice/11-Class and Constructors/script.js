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
