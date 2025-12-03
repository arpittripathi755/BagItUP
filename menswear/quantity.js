// Get all product cards
var productCards = document.querySelectorAll('.product-card');

// Loop through each product card
for (var i = 0; i < productCards.length; i++) {
    var card = productCards[i];
    
    var decreaseBtn = card.querySelector('.quantity-decrease');
    var increaseBtn = card.querySelector('.quantity-increase');
    var display = card.querySelector('.quantity-display');
    
    // Decrease button
    decreaseBtn.onclick = function() {
        var display = this.parentElement.querySelector('.quantity-display');
        var number = parseInt(display.textContent);
        number = Math.max(1, number - 1);
        display.textContent = number;
    };
    
    // Increase button
    increaseBtn.onclick = function() {
        var display = this.parentElement.querySelector('.quantity-display');
        var number = parseInt(display.textContent);
        number = Math.min(99, number + 1);
        display.textContent = number;
    };
}

// Add to cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    
    button.onclick = function() {
        var card = this.parentElement;
        var quantityDisplay = card.querySelector('.quantity-display');
        var quantity = parseInt(quantityDisplay.textContent);
        
        alert('Added ' + quantity + ' item(s) to cart');
    };
}
