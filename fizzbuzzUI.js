import fizzbuzz from "./fizzbuzz";

export default function fizzbuzzUI() {
  let btn = document.getElementById("btn");
  let title = document.getElementById("title");
  let nb = document.getElementById("nb");

  function handleClick() {
    title.textContent = fizzbuzz(nb.value);
  }

  btn.addEventListener("click", handleClick);
}
