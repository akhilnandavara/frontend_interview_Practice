// EVENT PROPAGATION

// Question 1 : Event Bubbling

const div = document.querySelector("#grandParent");
const form = document.querySelector("form");
const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//   alert("button");
// });


// Question 2 : event.target vs this.target vs event.currentTarget

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

function func(event) {
  alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this=" + this.tagName);
}

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);


// Question 3 : Event Capturing

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   alert("form");
// },{capture: true});

// button.addEventListener("click", function (event) {
//   alert("button");
// },{capture: true});


// Question 4 : Stop Propagation

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//     event.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//   alert("button");
// });


// Question 5 : Event Delegation

document.querySelector(".products").addEventListener("click", (event) => {
    
    if (event.target.closest("span")){
      window.location.href += event.target.closest("span").className;
    }
});


// Question 6 : What is the Output?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

div.addEventListener("click", function (event) {
  alert("div");
});

form.addEventListener("click", function (event) {
  alert("form");
}, {capture: true});

button.addEventListener("click", function (event) {
  alert("button");
});


// Question 7 : Create a Modal which closes by clicking on negative space

const container = document.querySelector(".modalContainer");
const modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(isVisble){
  container.style.display=isVisble ? "block" : "none";
}

container.addEventListener("click", (e) => {
  if (e.target === container) toggleModal(false);
})