/**
 * Image Updater Utility
 * This file provides utilities for managing product images.
 */

/**
 * Updates a specific product's image
 * @param {number} productId - ID of the product to update
 * @param {string} imageUrl - New image URL or path
 */
function updateProductImage(productId, imageUrl) {
  // Check if URL is valid
  testImageUrl(imageUrl)
    .then((result) => {
      if (result.valid) {
        // Update product image
        const updated = setProductImage(productId, imageUrl);

        if (updated) {
          console.log(`Successfully updated image for product ${productId}`);
          // Refresh the page if the product is currently displayed
          refreshProductDisplay(productId);
        } else {
          console.error(`Product with ID ${productId} not found`);
        }
      } else {
        console.error(`Image URL invalid: ${imageUrl}`);
      }
    })
    .catch((error) => {
      console.error("Error updating product image:", error);
    });
}

/**
 * Test if an image URL is valid and loadable
 * @param {string} url - Image URL to test
 * @returns {Promise<{valid: boolean, url: string}>} Result
 */
function testImageUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve({ valid: true, url });
    img.onerror = () => resolve({ valid: false, url });

    // Set a timeout in case the image takes too long to load
    setTimeout(() => resolve({ valid: false, url }), 5000);

    img.src = url;
  });
}

/**
 * Refresh product display if the product is currently visible
 * @param {number} productId - ID of the product to refresh
 */
function refreshProductDisplay(productId) {
  // Find product elements with matching ID
  const productElements = document.querySelectorAll(
    `[data-product-id="${productId}"]`
  );

  if (productElements.length > 0) {
    // Product is displayed on current page, refresh the images
    productElements.forEach((element) => {
      const img = element.querySelector("img");
      if (img) {
        // Get updated product data
        const products = getProductsFromLocalStorage();
        const product = products.find((p) => p.id === productId);

        if (product) {
          // Force image reload by adding a cache-busting parameter
          img.src = `${product.image}?t=${Date.now()}`;
        }
      }
    });
  }
}

// Example usage (uncomment to use):
// document.addEventListener("DOMContentLoaded", function() {
//   // Set a button click handler
//   const updateBtn = document.getElementById('update-image-btn');
//   if (updateBtn) {
//     updateBtn.addEventListener('click', function() {
//       // Update product 3 (Turmeric) with a new image
//       updateProductImage(3, "images/products/turmeric.jpg");
//     });
//   }
// });
