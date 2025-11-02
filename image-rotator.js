// Product Image Rotator
class ImageRotator {
    constructor(containerId, interval = 2500) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.images = this.container.querySelectorAll('.rotating-image');
        this.currentIndex = 0;
        this.interval = interval;
        this.intervalId = null;
        
        this.init();
    }
    
    init() {
        if (this.images.length <= 1) return;
        
        // Start the rotation
        this.start();
        
        // Pause on hover, resume on mouse leave
        this.container.addEventListener('mouseenter', () => this.pause());
        this.container.addEventListener('mouseleave', () => this.resume());
    }
    
    start() {
        this.intervalId = setInterval(() => {
            this.nextImage();
        }, this.interval);
    }
    
    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    resume() {
        if (!this.intervalId) {
            this.start();
        }
    }
    
    nextImage() {
        // Remove active class from current image
        this.images[this.currentIndex].classList.remove('active');
        
        // Move to next image
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        
        // Add active class to new image
        this.images[this.currentIndex].classList.add('active');
    }
    
    prevImage() {
        // Remove active class from current image
        this.images[this.currentIndex].classList.remove('active');
        
        // Move to previous image
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        
        // Add active class to new image
        this.images[this.currentIndex].classList.add('active');
    }
    
    manualNavigate(direction) {
        // Pause automatic rotation
        this.pause();
        
        // Navigate based on direction
        if (direction === 'next') {
            this.nextImage();
        } else if (direction === 'prev') {
            this.prevImage();
        }
        
        // Resume automatic rotation after a delay
        setTimeout(() => {
            this.resume();
        }, 5000); // Resume after 5 seconds
    }
    
    destroy() {
        this.pause();
    }
}

// Initialize rotators when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create rotators for both cards with different timing
    const leftRotator = new ImageRotator('left-rotator', 4000);   // 4 seconds
    const rightRotator = new ImageRotator('right-rotator', 4500); // 4.5 seconds
    
    // Store references for potential cleanup
    window.imageRotators = {
        left: leftRotator,
        right: rightRotator
    };
    
    // Add event listeners for navigation arrows
    document.querySelectorAll('.nav-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const rotatorId = this.getAttribute('data-rotator');
            const direction = this.getAttribute('data-direction');
            
            // Find the corresponding rotator
            let rotator = null;
            if (rotatorId === 'left-rotator') {
                rotator = leftRotator;
            } else if (rotatorId === 'right-rotator') {
                rotator = rightRotator;
            }
            
            // Navigate if rotator exists
            if (rotator) {
                rotator.manualNavigate(direction);
            }
        });
    });
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (window.imageRotators) {
        Object.values(window.imageRotators).forEach(rotator => {
            if (rotator && rotator.destroy) {
                rotator.destroy();
            }
        });
    }
});