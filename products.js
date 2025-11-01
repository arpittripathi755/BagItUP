// Add click animation to cart buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 2000);
            }
        });
    });
});