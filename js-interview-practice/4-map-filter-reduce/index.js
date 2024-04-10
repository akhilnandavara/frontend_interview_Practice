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

// Question 4 : polyfils for map, filter and reduce

const nums5 = [1, 2, 3, 4];
const sqr=(num,i,arr)=>num*num;
const cube=(num)=>num*num*num;
const greaterthanTwo=(num)=>num > 2;
const sumFunc=(acc,curr)=>acc+curr;
const multiply=(acc,curr)=>acc*curr;

Array.prototype.Map=function(logic){
  const result=[];
  for(let i=0;i<this.length;i++){
    result.push(logic(this[i],i,this))
  }
  return result;
}

Array.prototype.Filter=function(logic){
  const result=[];
  for(let i=0;i<this.length;i++){
    logic(this[i]) && result.push(this[i])
  }
  return result;
}

Array.prototype.Reduce=function(logic,acc){
  for(let i=0;i<this.length;i++){
    acc=logic(acc,this[i])
  }
  return acc;
}

console.log(nums5.Map(sqr));
console.log(nums5.Map(cube));
console.log(nums5.Filter(greaterthanTwo));
console.log(nums5.Reduce(multiply,1));



// question 2- filter the users whose age is less than 30 and show their first name

const user=[
  {firstName:"John",lastName:"Doe",age:30},
  {firstName:"Akhil",lastName:"N",age:26},
  {firstName:"Bavu",lastName:"bam",age:14},
  {firstName:"hari",lastName:"goyal",age:66},
  {firstName:"tom",lastName:"c",age:37},
]

// approach 1
const output1= user.filter((user)=>user.age<30).map((user)=>user.firstName)
console.log(output1);

// approach 2
const output2=user.reduce((acc,curr)=>{
  if(curr.age<30){
      acc.push(curr.firstName)
    }
    return acc;
    },[])

console.log(output2);


