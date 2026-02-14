//Element select 
let input = document.querySelector("#username");
let button = document.querySelector("#btn");
let output = document.querySelector("#output");


//button cliclk event
button.addEventListener("click", function () {
  let name = input.value;

  output.textContent = "Hello " + name + " 👋";
});


//form 
let form = document.querySelector("#myForm");
let username = document.querySelector("#username");
let result = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload rokta hai

  result.textContent = "Welcome " + input.value;
});


//
