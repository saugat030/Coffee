var counterEl = document.getElementById("counter");
counterEl.textContent = 0;
var choose = document.getElementById("choose");
var decrementBtn = document.getElementById("decrement-btn");
var incrementBtn = document.getElementById("increment-btn");
var drop = document.getElementById("drop");
var rot = document.getElementById("rot"); //rotate garanuna dropdown icon lai
var pop = document.getElementById("pop");
var popup = document.getElementById("popup");
var mask = document.getElementById("mask");
var close = document.getElementById("close");
let count = 1;

decrementBtn.addEventListener("click", () => {
  if (count >= 1) {
    count--;
    counterEl.textContent = count;
  }
  if (count > 5) {
    choose.innerHTML = "Quantity must be less than 5";
    choose.classList.add("text-red-700");
  } else {
    choose.innerHTML = "Choose a quantity";
    choose.classList.remove("text-red-700");
  }
});

incrementBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
  if (count > 5) {
    choose.innerHTML = "Quantity must be less than 5";
    choose.classList.add("text-red-700");
  } else {
    choose.innerHTML = "Choose a quantity";
    choose.classList.remove("text-red-700");
  }
});
function dropdown() {
  drop.classList.toggle("hidden");
  rot.classList.toggle("rotate-180");
}
pop.addEventListener("click", function () {
  popup.classList.remove("hidden");
  mask.classList.remove("hidden");
});
close.addEventListener("click", function () {
  popup.classList.add("hidden");
  mask.classList.add("hidden");
});
