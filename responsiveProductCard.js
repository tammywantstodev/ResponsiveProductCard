let quantity = 1; 
const quantityDisplay = document.getElementById("quantity");
const confirmationMessage = document.getElementById("confirmationMessage");
const addToCartButton = document.getElementById("add-to-cart");


function addedToCartColor() {
    addToCartButton.style.backgroundColor = "darkseagreen";
}


function addedToCartMessage() {
    addToCartButton.addEventListener("click", function () {
      
        confirmationMessage.textContent = `${quantity} item(s) successfully added to your cart!`;
        confirmationMessage.style.display = "block";

        addedToCartColor();

        quantity = 1;
        quantityDisplay.textContent = quantity;

       
        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 3000);
    });
}

document.getElementById("increase").addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
});

document.getElementById("decrease").addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

addedToCartMessage();