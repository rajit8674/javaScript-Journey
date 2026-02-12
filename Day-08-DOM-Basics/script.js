// element select
let heading = document.getElementById("title");
let button = document.getElementById("btn");


//text change krna 
heading.textContent = "JavaScript DOM Started 🔥";

//button click event
button.addEventListener("click", function () {
  heading.textContent = "Button Clicked 🚀";
});


//alternative method
document.body.style.backgroundColor = "lightblue";
