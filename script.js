document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement-button");
  const incrementButton = document.getElementById("increment-button");
  const quantityInput = document.getElementById("quantity-input");

  decrementButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value) || 0;
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1;
    }
  });

  incrementButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value) || 0;
    quantityInput.value = currentValue + 1;
  });
});
