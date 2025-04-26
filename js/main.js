/**
 * Main JavaScript for FuncMed E-commerce
 * Handles general website functionality
 */

// Initialize back to top button
function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Handle search form submission
function initSearchForm() {
    const searchForms = document.querySelectorAll('form');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchInput = form.querySelector('input[type="search"]');
            if (!searchInput) return;
            
            const query = searchInput.value.trim();
            
            if (query) {
                window.location.href = `${window.location.pathname.includes('/pages/') ? '' : 'pages/'}search-results.html?q=${encodeURIComponent(query)}`;
            }
        });
    });
}

// Initialize product image zoom effect
function initProductImageZoom() {
    const productImage = document.querySelector('.product-detail-image img');
    if (!productImage) return;

    productImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    productImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}

// Initialize category menu highlighting
function initCategoryMenuHighlight() {
    // Check if we're on a category page
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        // Find and highlight the corresponding category link
        const categoryLinks = document.querySelectorAll(`.dropdown-item[href*="category.html?category=${category}"]`);
        categoryLinks.forEach(link => {
            link.classList.add('active');
        });
    }
}

// Initialize newsletter form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        if (!emailInput) return;
        
        const email = emailInput.value.trim();
        
        if (email) {
            // In a real application, this would send the email to a server
            // For this demo, just show a success message
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'toast align-items-center text-white bg-success border-0 position-fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.zIndex = '9999';
            notification.setAttribute('role', 'alert');
            notification.setAttribute('aria-live', 'assertive');
            notification.setAttribute('aria-atomic', 'true');
            
            // Create notification content
            notification.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="fas fa-check-circle me-2"></i>
                        Thank you for subscribing to our newsletter!
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            `;
            
            // Add to document
            document.body.appendChild(notification);
            
            // Initialize and show toast
            const toast = new bootstrap.Toast(notification, {
                delay: 3000
            });
            toast.show();
            
            // Remove from DOM after hiding
            notification.addEventListener('hidden.bs.toast', function() {
                notification.remove();
            });
            
            // Clear input
            emailInput.value = '';
        }
    });
}

// Add count down timer for special offers
function initSpecialOfferCountdown() {
    const countdownElement = document.getElementById('special-offer-countdown');
    if (!countdownElement) return;

    // Set the countdown end time (24 hours from now)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;

        // Calculate time remaining
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Initialize mobile category menu
function initMobileCategoryMenu() {
    const mobileToggle = document.getElementById('mobile-category-toggle');
    if (!mobileToggle) return;

    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const mobileMenu = document.getElementById('mobile-category-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('show');
        }
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize back to top button
    initBackToTopButton();
    
    // Initialize search form
    initSearchForm();
    
    // Initialize product image zoom effect
    initProductImageZoom();
    
    // Initialize category menu highlighting
    initCategoryMenuHighlight();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize special offer countdown
    initSpecialOfferCountdown();
    
    // Initialize mobile category menu
    initMobileCategoryMenu();
});
