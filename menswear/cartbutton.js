// Get all add to cart buttons
var cartButtons = document.querySelectorAll('.add-to-cart-btn');

// Loop through each button
for (var i = 0; i < cartButtons.length; i++) {
    var button = cartButtons[i];
    
    button.onclick = function() {
        // Check current text
        var buttonText = this.querySelector('.button-text');
        
        if (buttonText.textContent === 'Add to Cart') {
            // Change to Remove from Cart
            buttonText.textContent = 'Remove from Cart';
            this.style.background = '#e74c3c';
        } else {
            // Change back to Add to Cart
            buttonText.textContent = 'Add to Cart';
            this.style.background = '#1a1a1a';
        }
    };
}