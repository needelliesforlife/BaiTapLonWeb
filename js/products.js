/**
 * Product Management for Functional Medicine E-commerce
 * Handles displaying products, filtering, and product details.
 */

/**
 * Get products from localStorage
 * @returns {Array} Array of product objects
 */
function getProducts() {
    return getProductsFromLocalStorage();
}

/**
 * Get a product by ID
 * @param {number} id - Product ID
 * @returns {Object|null} Product object or null if not found
 */
function getProductById(id) {
    const products = getProducts();
    return products.find(product => product.id === parseInt(id)) || null;
}

/**
 * Get products by category
 * @param {string} category - Product category
 * @returns {Array} Filtered array of products
 */
function getProductsByCategory(category) {
    const products = getProducts();
    return products.filter(product => product.category === category);
}

/**
 * Get featured products
 * @param {number} limit - Max number of products to return
 * @returns {Array} Array of featured products
 */
function getFeaturedProducts(limit = 8) {
    const products = getProducts();
    return products
        .filter(product => product.isFeatured)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Get bestselling products
 * @param {number} limit - Max number of products to return
 * @returns {Array} Array of bestselling products
 */
function getBestsellerProducts(limit = 8) {
    const products = getProducts();
    return products
        .filter(product => product.isBestseller)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Get new arrival products
 * @param {number} limit - Max number of products to return
 * @returns {Array} Array of new products
 */
function getNewProducts(limit = 8) {
    const products = getProducts();
    return products
        .filter(product => product.isNew)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Search products by keyword
 * @param {string} keyword - Search term
 * @returns {Array} Array of matching products
 */
function searchProducts(keyword) {
    const products = getProducts();
    const searchTerm = keyword.toLowerCase().trim();
    
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

/**
 * Create HTML for product card
 * @param {Object} product - Product object
 * @param {boolean} isInProductPage - Whether this card is displayed inside a product page
 * @returns {string} HTML string for product card
 */
function createProductCard(product, isInProductPage = false) {
    const discountBadge = product.discount ? 
        `<div class="discount-badge">-${product.discount}%</div>` : '';
    
    // Determine the correct path to product detail page based on context
    const productDetailPath = isInProductPage ? 
        `product-detail.html?id=${product.id}` : 
        `pages/product-detail.html?id=${product.id}`;
    
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card">
                ${discountBadge}
                <a href="${productDetailPath}" class="text-decoration-none">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </a>
                <div class="product-body">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">
                        <a href="${productDetailPath}" class="text-decoration-none text-dark">${product.name}</a>
                    </h3>
                    <div class="product-rating">
                        ${createRatingStars(product.rating)}
                        <span class="rating-count">(${product.reviewCount})</span>
                    </div>
                    <div class="product-price">
                        $${product.price.toFixed(2)}
                        ${product.regularPrice ? `<span class="regular-price">$${product.regularPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-to-cart" onclick="addToCart(${product.id}, 1, event)">
                            <i class="fas fa-shopping-cart me-1"></i> Add to Cart
                        </button>
                        <a href="${productDetailPath}" class="btn-view-product">
                            <i class="fas fa-eye"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate star rating HTML
 * @param {number} rating - Product rating (0-5)
 * @returns {string} HTML for star rating
 */
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

/**
 * Display products in a container
 * @param {Array} products - Array of products to display
 * @param {string} containerId - ID of container element
 */
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    if (products.length === 0) {
        html = '<div class="col-12 text-center py-5"><p>No products found.</p></div>';
    } else {
        products.forEach(product => {
            html += createProductCard(product);
        });
    }
    
    container.innerHTML = html;
}

/**
 * Display product details on product detail page
 * @param {number} productId - ID of product to display
 * @param {string} containerId - ID of container element
 */
function displayProductDetail(productId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const product = getProductById(productId);
    
    if (!product) {
        container.innerHTML = '<div class="alert alert-danger">Product not found!</div>';
        return;
    }
    
    const discountBadge = product.discount ? 
        `<div class="badge bg-danger">-${product.discount}%</div>` : '';
    
    const html = `
        <div class="row">
            <div class="col-lg-5">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <div class="product-detail-category">Category: ${product.category}</div>
                    <div class="product-rating">
                        ${createRatingStars(product.rating)}
                        <span class="rating-count">(${product.reviewCount} reviews)</span>
                    </div>
                    <div class="product-detail-price">
                        $${product.price.toFixed(2)}
                        ${product.regularPrice ? `<span class="regular-price">$${product.regularPrice.toFixed(2)}</span>` : ''}
                        ${discountBadge}
                    </div>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-features mb-4">
                        <h5>Key Benefits:</h5>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-detail-stock mb-3">
                        <span class="badge bg-${product.stock > 0 ? 'success' : 'danger'}">
                            ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                        ${product.stock > 0 && product.stock < 20 ? 
                            `<span class="text-danger ms-2">Only ${product.stock} left!</span>` : ''}
                    </div>
                    <div class="product-detail-quantity">
                        <div class="input-group" style="width: 130px;">
                            <button class="btn btn-outline-secondary" type="button" id="quantity-minus">-</button>
                            <input type="number" class="form-control text-center" id="product-quantity" value="1" min="1" max="${product.stock}">
                            <button class="btn btn-outline-secondary" type="button" id="quantity-plus">+</button>
                        </div>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn btn-primary btn-lg" id="add-to-cart-btn">
                            <i class="fas fa-shopping-cart me-2"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-secondary btn-lg" id="add-to-wishlist-btn">
                            <i class="far fa-heart me-2"></i> Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <ul class="nav nav-tabs product-detail-tab-nav" id="productTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">Description</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="dosage-tab" data-bs-toggle="tab" data-bs-target="#dosage" type="button" role="tab">Dosage & Usage</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients" type="button" role="tab">Ingredients</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab">Reviews</button>
                    </li>
                </ul>
                <div class="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
                    <div class="tab-pane fade show active" id="description" role="tabpanel">
                        <p>${product.description}</p>
                        <h5>Key Benefits:</h5>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="dosage" role="tabpanel">
                        <h5>Recommended Dosage:</h5>
                        <p>${product.dosage}</p>
                    </div>
                    <div class="tab-pane fade" id="ingredients" role="tabpanel">
                        <h5>Ingredients:</h5>
                        <p>${product.ingredients}</p>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5>Customer Reviews</h5>
                            <button class="btn btn-primary" id="write-review-btn">Write a Review</button>
                        </div>
                        <div class="reviews-summary mb-4">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <div class="display-4 fw-bold">${product.rating.toFixed(1)}</div>
                                    <div>${createRatingStars(product.rating)}</div>
                                    <div class="mt-2">${product.reviewCount} reviews</div>
                                </div>
                                <div class="col-md-9">
                                    <p>Review data would be shown here in a real implementation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Add event listeners for the product detail page
    document.getElementById('quantity-minus').addEventListener('click', function() {
        const quantityInput = document.getElementById('product-quantity');
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    document.getElementById('quantity-plus').addEventListener('click', function() {
        const quantityInput = document.getElementById('product-quantity');
        let value = parseInt(quantityInput.value);
        if (value < product.stock) {
            quantityInput.value = value + 1;
        }
    });
    
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('product-quantity').value);
        addToCart(product.id, quantity);
    });
    
    document.getElementById('add-to-wishlist-btn').addEventListener('click', function() {
        alert('Wishlist functionality would be implemented in a complete version.');
    });
    
    document.getElementById('write-review-btn').addEventListener('click', function() {
        alert('Review submission would be implemented in a complete version.');
    });
}

/**
 * Display related products
 * @param {number} productId - Current product ID
 * @param {string} containerId - Container element ID
 * @param {number} limit - Maximum number of related products
 */
function displayRelatedProducts(productId, containerId, limit = 4) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const currentProduct = getProductById(productId);
    if (!currentProduct) return;
    
    const products = getProducts();
    
    // Get products in the same category, excluding current product
    let relatedProducts = products
        .filter(product => product.category === currentProduct.category && product.id !== productId)
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, limit);
    
    // If not enough products in the same category, add some bestsellers
    if (relatedProducts.length < limit) {
        const additionalProducts = products
            .filter(product => product.isBestseller && product.id !== productId && !relatedProducts.some(p => p.id === product.id))
            .slice(0, limit - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...additionalProducts];
    }
    
    let html = '<h3 class="mb-4">Related Products</h3><div class="row">';
    
    relatedProducts.forEach(product => {
        html += createProductCard(product, true); // true indicates we're in a product page
    });
    
    html += '</div>';
    container.innerHTML = html;
}

/**
 * Initialize products on the home page
 */
function initHomePageProducts() {
    // Display featured products
    displayProducts(getFeaturedProducts(8), 'featured-products-container');
    
    // Display bestseller products
    displayProducts(getBestsellerProducts(4), 'bestseller-products-container');
    
    // Display new arrival products
    displayProducts(getNewProducts(8), 'new-arrivals-container');
}

/**
 * Initialize product detail page
 */
function initProductDetailPage() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        document.getElementById('product-detail-container').innerHTML = 
            '<div class="alert alert-danger">Product ID is missing!</div>';
        return;
    }
    
    // Display product details
    displayProductDetail(productId, 'product-detail-container');
    
    // Display related products
    displayRelatedProducts(productId, 'related-products-container', 4);
}

/**
 * Initialize category page
 */
function initCategoryPage() {
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (!category) {
        document.getElementById('category-products-container').innerHTML = 
            '<div class="alert alert-danger">Category is missing!</div>';
        return;
    }
    
    // Set category title
    const categoryTitleElement = document.getElementById('category-title');
    if (categoryTitleElement) {
        categoryTitleElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    // Display category products
    const categoryProducts = getProductsByCategory(category);
    displayProducts(categoryProducts, 'category-products-container');
}

/**
 * Initialize search results page
 */
function initSearchResultsPage() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (!query) {
        document.getElementById('search-results-container').innerHTML = 
            '<div class="alert alert-danger">Search query is missing!</div>';
        return;
    }
    
    // Set search query in header
    const searchQueryElement = document.getElementById('search-query-display');
    if (searchQueryElement) {
        searchQueryElement.textContent = query;
    }
    
    // Display search results
    const searchResults = searchProducts(query);
    displayProducts(searchResults, 'search-results-container');
}

/**
 * Handle search form submission
 * @param {Event} event - Form submission event
 */
function handleSearch(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('search-input') || document.getElementById('mobile-search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        window.location.href = `pages/search-results.html?q=${encodeURIComponent(query)}`;
    }
}

// Add event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search form
    const searchForms = document.querySelectorAll('form');
    searchForms.forEach(form => {
        form.addEventListener('submit', handleSearch);
    });
    
    // Initialize products based on current page
    if (document.getElementById('featured-products-container')) {
        initHomePageProducts();
    }
    
    if (document.getElementById('product-detail-container')) {
        initProductDetailPage();
    }
    
    if (document.getElementById('category-products-container')) {
        initCategoryPage();
    }
    
    if (document.getElementById('search-results-container')) {
        initSearchResultsPage();
    }
});
