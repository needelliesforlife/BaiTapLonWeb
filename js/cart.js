/**
 * Shopping Cart Management for Functional Medicine E-commerce
 * Handles adding, removing, updating cart items, and checkout.
 */

/**
 * Cart object structure
 */
const cart = {
    items: [],
    total: 0
};

/**
 * Load cart from localStorage
 */
function loadCart() {
    const savedCart = localStorage.getItem('funcMedCart');
    if (savedCart) {
        // Parse the saved cart and update the cart object
        const parsedCart = JSON.parse(savedCart);
        cart.items = parsedCart.items || [];
        cart.total = parsedCart.total || 0;
    }
}

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem('funcMedCart', JSON.stringify(cart));
    updateCartCount();
}

/**
 * Update cart item count in navigation
 */
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = itemCount;
    });
}

/**
 * Calculate cart total
 */
function calculateCartTotal() {
    cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Add product to cart
 * @param {number} productId - Product ID
 * @param {number} quantity - Quantity to add
 * @param {Event} event - Optional event object to prevent default behavior
 */
function addToCart(productId, quantity = 1, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Get all products
    const products = getProducts();
    
    // Find the product by ID
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    loadCart();
    
    // Check if product is already in cart
    const existingItemIndex = cart.items.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Update quantity if already in cart
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Recalculate total
    calculateCartTotal();
    
    // Save cart to localStorage
    saveCart();
    
    // Show success message
    showCartNotification(product.name, quantity);
}

/**
 * Show notification when product is added to cart
 * @param {string} productName - Name of product added
 * @param {number} quantity - Quantity added
 */
function showCartNotification(productName, quantity) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'toast align-items-center text-white bg-primary border-0 position-fixed';
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
                Added ${quantity} x ${productName} to your cart!
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
}

/**
 * Update cart item quantity
 * @param {number} productId - Product ID to update
 * @param {number} quantity - New quantity
 */
function updateCartItem(productId, quantity) {
    loadCart();
    
    const itemIndex = cart.items.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) {
        return;
    }
    
    if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        removeCartItem(productId);
    } else {
        // Update quantity
        cart.items[itemIndex].quantity = quantity;
        
        // Recalculate total
        calculateCartTotal();
        
        // Save cart
        saveCart();
        
        // Refresh cart display if on cart page
        if (document.getElementById('cart-items-container')) {
            displayCart();
        }
    }
}

/**
 * Remove item from cart
 * @param {number} productId - Product ID to remove
 */
function removeCartItem(productId) {
    loadCart();
    
    // Filter out the item to be removed
    cart.items = cart.items.filter(item => item.id !== productId);
    
    // Recalculate total
    calculateCartTotal();
    
    // Save cart
    saveCart();
    
    // Refresh cart display if on cart page
    if (document.getElementById('cart-items-container')) {
        displayCart();
    }
}

/**
 * Clear entire cart
 */
function clearCart() {
    cart.items = [];
    cart.total = 0;
    saveCart();
    
    // Refresh cart display if on cart page
    if (document.getElementById('cart-items-container')) {
        displayCart();
    }
}

/**
 * Display cart items on cart page
 */
function displayCart() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartSummaryContainer = document.getElementById('cart-summary-container');
    
    if (!cartContainer || !cartSummaryContainer) {
        return;
    }
    
    loadCart();
    
    // Display cart items
    if (cart.items.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                <h4>Your cart is empty</h4>
                <p>Looks like you haven't added any products to your cart yet.</p>
                <a href="../index.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        cartSummaryContainer.innerHTML = '';
    } else {
        let itemsHtml = '';
        
        cart.items.forEach(item => {
            itemsHtml += `
                <div class="cart-item">
                    <div class="row align-items-center">
                        <div class="col-md-2 col-4">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-md-4 col-8">
                            <h5 class="cart-item-title">${item.name}</h5>
                            <a href="#" class="text-danger remove-item" data-id="${item.id}">
                                <i class="fas fa-trash me-1"></i> Remove
                            </a>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0">
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0">
                            <div class="d-flex cart-item-quantity">
                                <button class="btn btn-sm btn-outline-secondary quantity-btn minus" data-id="${item.id}">-</button>
                                <input type="number" class="form-control form-control-sm text-center cart-quantity-input" value="${item.quantity}" data-id="${item.id}" min="1">
                                <button class="btn btn-sm btn-outline-secondary quantity-btn plus" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0 text-end">
                            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        cartContainer.innerHTML = itemsHtml;
        
        // Display cart summary
        const subtotal = cart.total;
        const shippingFee = subtotal >= 50 ? 0 : 5.99;
        const tax = subtotal * 0.08; // Assuming 8% tax
        const total = subtotal + shippingFee + tax;
        
        cartSummaryContainer.innerHTML = `
            <div class="cart-summary">
                <h4 class="cart-summary-title">Order Summary</h4>
                <div class="cart-summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="cart-summary-row">
                    <span>Shipping:</span>
                    <span>${shippingFee === 0 ? 'Free' : '$' + shippingFee.toFixed(2)}</span>
                </div>
                <div class="cart-summary-row">
                    <span>Estimated Tax:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <hr>
                <div class="cart-summary-row">
                    <span>Total:</span>
                    <span class="cart-summary-total">$${total.toFixed(2)}</span>
                </div>
                ${shippingFee > 0 ? '<div class="text-muted small mt-2">Free shipping on orders over $50</div>' : ''}
                <a href="checkout.html" class="btn btn-primary w-100 mt-3">Proceed to Checkout</a>
                <button class="btn btn-outline-secondary w-100 mt-2" id="clear-cart-btn">Clear Cart</button>
            </div>
        `;
        
        // Add event listeners for cart interaction
        addCartEventListeners();
    }
}

/**
 * Add event listeners for cart page interaction
 */
function addCartEventListeners() {
    // Remove item buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-id'));
            removeCartItem(productId);
        });
    });
    
    // Quantity minus buttons
    const minusButtons = document.querySelectorAll('.quantity-btn.minus');
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const quantityInput = document.querySelector(`.cart-quantity-input[data-id="${productId}"]`);
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateCartItem(productId, quantity);
            }
        });
    });
    
    // Quantity plus buttons
    const plusButtons = document.querySelectorAll('.quantity-btn.plus');
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const quantityInput = document.querySelector(`.cart-quantity-input[data-id="${productId}"]`);
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateCartItem(productId, quantity);
        });
    });
    
    // Quantity input change
    const quantityInputs = document.querySelectorAll('.cart-quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const quantity = parseInt(this.value);
            if (quantity > 0) {
                updateCartItem(productId, quantity);
            } else {
                this.value = 1;
                updateCartItem(productId, 1);
            }
        });
    });
    
    // Clear cart button
    const clearCartButton = document.getElementById('clear-cart-btn');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
    }
}

/**
 * Initialize checkout page
 */
function initCheckoutPage() {
    const checkoutSummaryContainer = document.getElementById('checkout-order-summary');
    if (!checkoutSummaryContainer) return;
    
    loadCart();
    
    if (cart.items.length === 0) {
        // Redirect to cart if cart is empty
        window.location.href = 'cart.html';
        return;
    }
    
    // Display order summary
    let itemsHtml = '';
    cart.items.forEach(item => {
        itemsHtml += `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });
    
    const subtotal = cart.total;
    const shippingFee = subtotal >= 50 ? 0 : 5.99;
    const tax = subtotal * 0.08; // Assuming 8% tax
    const total = subtotal + shippingFee + tax;
    
    checkoutSummaryContainer.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Order Summary</h5>
            </div>
            <div class="card-body">
                ${itemsHtml}
                <hr>
                <div class="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>${shippingFee === 0 ? 'Free' : '$' + shippingFee.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Estimated Tax:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between fw-bold">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add event listener for checkout form submission
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (this.checkValidity()) {
                // Process checkout
                processCheckout();
            } else {
                // Trigger browser form validation
                e.stopPropagation();
            }
            
            this.classList.add('was-validated');
        });
    }
}

/**
 * Process checkout
 */
function processCheckout() {
    // In a real application, this would send the order to a server
    // For this demo, we'll just show a success message and clear the cart
    
    // Show loading state
    const checkoutButton = document.querySelector('#checkout-form button[type="submit"]');
    const originalText = checkoutButton.innerHTML;
    checkoutButton.disabled = true;
    checkoutButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
    
    // Simulate server delay
    setTimeout(function() {
        // Clear cart
        clearCart();
        
        // Show success message
        const checkoutContainer = document.querySelector('.checkout-container');
        checkoutContainer.innerHTML = `
            <div class="text-center py-5">
                <div class="mb-4">
                    <i class="fas fa-check-circle fa-5x text-success"></i>
                </div>
                <h2>Order Placed Successfully!</h2>
                <p class="lead">Thank you for your purchase.</p>
                <p>Your order number is: ORD-${Math.floor(Math.random() * 10000000)}</p>
                <p>You will receive a confirmation email shortly.</p>
                <a href="../index.html" class="btn btn-primary mt-3">Continue Shopping</a>
            </div>
        `;
    }, 1500);
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    updateCartCount();
    
    // Initialize cart page if applicable
    if (document.getElementById('cart-items-container')) {
        displayCart();
    }
    
    // Initialize checkout page if applicable
    if (document.getElementById('checkout-form')) {
        initCheckoutPage();
    }
});
