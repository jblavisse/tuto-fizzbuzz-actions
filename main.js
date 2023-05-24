import fizzbuzz from "./fizzbuzz";

let btn = document.getElementById("btn");
let title = document.getElementById("title");
let nb = document.getElementById("nb");

function handleClick() {
  title.textContent = fizzbuzz(nb.value);
}

btn.addEventListener("click", handleClick);
