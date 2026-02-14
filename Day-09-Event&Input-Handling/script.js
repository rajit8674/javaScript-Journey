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
let input = document.querySelector("#username");
let output = document.querySelector("#output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload rokta hai

  output.textContent = "Welcome " + input.value;
});

