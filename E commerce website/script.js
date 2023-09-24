// Initialize an empty shopping cart and total cost
let shoppingCart = [];
let totalCost = 0;

// Function to add a product to the shopping cart
function addToCart(productName, productPrice) {
    shoppingCart.push({ name: productName, price: productPrice });
    totalCost += productPrice;
    updateCartUI();
}

// Function to update the cart's user interface
function updateCartUI() {
    const cartList = document.getElementById("cart-list");
    const totalCostElement = document.getElementById("total-cost");

    // Clear the existing cart content
    cartList.innerHTML = "";

    // Update the cart list with the current items
    shoppingCart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name}: $${item.price}`;
        cartList.appendChild(listItem);
    });

    // Update the total cost
    totalCostElement.textContent = `Total: $${totalCost.toFixed(2)}`;
}

// Event listener for adding items to the cart
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector("h2").textContent;
            const productPrice = parseFloat(productElement.querySelector(".price").textContent.slice(1));
            
            addToCart(productName, productPrice);
        });
    });
});

// You can call addToCart(productName, productPrice) to add items to the cart.
// Make sure you have appropriate HTML elements with class names "add-to-cart", "cart-list", and "total-cost" for this code to work.
