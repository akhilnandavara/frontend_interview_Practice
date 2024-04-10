// MAP, FILTER & REDUCE Interview Questions

// Question 1 : Array.map()

const nums1 = [1, 2, 3, 4];

const multiplyThree = nums1.map((num, i, arr) => num * 3); // cb can take num, index and array
console.log(multiplyThree);



// Question 2 : Array.filter()

const nums2 = [1, 2, 3, 4];

const moreThanTwo = nums2.filter((num, i, arr) => num > 2 === 0);
console.log(moreThanTwo);



// Question 3 : Array.reduce()

const nums3 = [1, 2, 3, 4];

const sum = nums3.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10



// Question 4 : Map Polyfill

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};



// Ques 5 : Filter Polyfill

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }

  return result;
};



// Question 6 : Reduce Polyfill

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};



// Question 7 : map vs foreach

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1 - Return only the names of students in capital

// Solution 1 : Traditional for() loop
let namesArr1 = [];
for (let index = 0; index < students.length; index++){
  namesArr1.push(students[index].name.toUpperCase());
}

console.log(namesArr1);

// Solution 2 : forEach()
let namesArr2 = []
students.forEach( student => {
     namesArr2.push(student.name.toUpperCase());
})

console.log(namesArr2);

// Solution 3 : map() 
let namesArr3 = students.map( stu => stu.name.toUpperCase());
console.log(namesArr3);


// Q2 - we want to get the details of students who scored more than 60 marks.

let namesArr4 = students.filter(stu => stu.marks > 60);
console.log(namesArr4);


// Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.

let namesArr5 = students.filter(stu => stu.marks > 60 && stu.rollNumber > 20)
console.log(namesArr5);


// Q4 - Sum total of the marks of the students

let totalMarks1 = students.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks1);


// Q5 - Get only the names of the students who scored more than 60 marks

let names = students.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names);


// Q6 -print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

let totalMarks = students.map(stu=>{
  if(stu.marks<60){
    stu.marks+=20
  }
  return stu
}).filter((stu)=>stu.marks>60).reduce((acc,stu)=>acc+stu.marks,0)

console.log("totalMarks",totalMarks);