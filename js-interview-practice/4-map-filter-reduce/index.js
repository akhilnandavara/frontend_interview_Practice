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