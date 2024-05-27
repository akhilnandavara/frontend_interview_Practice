
// Debounce & Throttling Interview Question

// Question 1 :   Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const debouncedCount = _.debounce(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  debouncedCount();
});


// Question 2 : Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn1 = document.querySelector(".increment_btn");
const btnPress1 = document.querySelector(".increment_pressed");
const count1 = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start = new Date().getTime()

var throttled = _.throttle(()=>{
    triggerCount+=1
    count1.innerHTML=triggerCount
}, 1000);

btn1.addEventListener("click", () => {
    btnPress1.innerHTML=pressedCount++
    const now = new Date().getTime()
    const seconds = (now-start)/1000
    console.log(seconds.toFixed());
    throttled()
});


// Question 3 : Debounce Polyfill

const btn2 = document.querySelector(".increment_btn");
const btnPress2 = document.querySelector(".increment_pressed");
const count2 = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const myDebounce = function (cb, d) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
};

const debouncedCount2 = myDebounce(() => {
    triggerCount += 1;
    count2.innerHTML = triggerCount;
  }, 800);

btn2.addEventListener("click", () => {
  btnPress2.innerHTML = ++pressedCount;
  debouncedCount2();
});


// Question 4 : Throttle Polyfill

const btn3 = document.querySelector(".increment_btn");
const btnPress3 = document.querySelector(".increment_pressed");
const count3 = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start1 = new Date().getTime();

const myThrottle = function (cb, d) {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
};

var throttled = _.throttle(()=>{
    triggerCount+=1
    count3.innerHTML=triggerCount
}, 1000);

btn3.addEventListener("click", () => {
    btnPress3.innerHTML=pressedCount++
    const now = new Date().getTime()
    const seconds = (now-start)/1000
    console.log(seconds.toFixed());
    throttled()
});

// namste dev interview question 
// polfill for debounce 
let counter = 0
const getData = () => {
  console.log("Fetching Data", counter++)
}

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this, args = arguments;
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

const betterFunction = debounce(getData, 300)


// polfill for throttle

const throttle = (fn, delay) => { 
  let flag=true;

  return function(){
    let context=this, args=arguments;
    if(flag){
      fn.apply(context,args);
      flag=false;
      setTimeout(()=>{
        flag=true;
      
      },delay)
    }
  }
}

const betterFunction1 = throttle(getData, 1000)
window.addEventListener('resize',betterFunction1)