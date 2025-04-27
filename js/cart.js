/**
 * Quản lý giỏ hàng cho Cửa hàng Y học Chức năng
 * Xử lý thêm, xóa, cập nhật các mặt hàng trong giỏ hàng và thanh toán.
 */

/**
 * Cấu trúc đối tượng giỏ hàng
 */
const cart = {
  items: [],
  total: 0,
};

/**
 * Tải giỏ hàng từ localStorage
 */
function loadCart() {
  const savedCart = localStorage.getItem("funcMedCart");
  if (savedCart) {
    // Phân tích giỏ hàng đã lưu và cập nhật đối tượng giỏ hàng
    const parsedCart = JSON.parse(savedCart);
    cart.items = parsedCart.items || [];
    cart.total = parsedCart.total || 0;
  }
}

/**
 * Lưu giỏ hàng vào localStorage
 */
function saveCart() {
  localStorage.setItem("funcMedCart", JSON.stringify(cart));
  updateCartCount();
}

/**
 * Cập nhật số lượng mặt hàng trong giỏ hàng trên thanh điều hướng
 */
function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cart-count");
  const itemCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCountElements.forEach((element) => {
    element.textContent = itemCount;
  });
}

/**
 * Tính tổng giỏ hàng
 */
function calculateCartTotal() {
  cart.total = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

/**
 * Thêm sản phẩm vào giỏ hàng
 * @param {number} productId - ID sản phẩm
 * @param {number} quantity - Số lượng cần thêm
 * @param {Event} event - Sự kiện tùy chọn để ngăn hành vi mặc định
 */
function addToCart(productId, quantity = 1, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Lấy tất cả sản phẩm
  const products = getProducts();

  // Tìm sản phẩm theo ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  loadCart();

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const existingItemIndex = cart.items.findIndex(
    (item) => item.id === productId
  );

  if (existingItemIndex !== -1) {
    // Cập nhật số lượng nếu đã có trong giỏ hàng
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Thêm mặt hàng mới vào giỏ hàng
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }

  // Tính lại tổng
  calculateCartTotal();

  // Lưu giỏ hàng vào localStorage
  saveCart();

  // Hiển thị thông báo thành công
  showNotification("Đã thêm sản phẩm vào giỏ hàng!", "success");
}

/**
 * Hiển thị thông báo
 * @param {string} message - Tin nhắn hiển thị
 * @param {string} type - Loại thông báo (success, error, warning)
 */
function showNotification(message, type = "success") {
  // Tạo phần tử thông báo
  const notification = document.createElement("div");
  notification.className = `toast align-items-center text-white border-0 position-fixed`;
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.zIndex = "9999";

  // Đặt màu nền dựa trên loại
  if (type === "success") {
    notification.classList.add("bg-success");
  } else if (type === "error") {
    notification.classList.add("bg-danger");
  } else if (type === "warning") {
    notification.classList.add("bg-warning");
  }

  notification.setAttribute("role", "alert");
  notification.setAttribute("aria-live", "assertive");
  notification.setAttribute("aria-atomic", "true");

  // Tạo nội dung thông báo
  notification.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

  // Thêm vào tài liệu
  document.body.appendChild(notification);

  // Khởi tạo và hiển thị thông báo
  const toast = new bootstrap.Toast(notification, {
    delay: 3000,
  });
  toast.show();

  // Xóa khỏi DOM sau khi ẩn
  notification.addEventListener("hidden.bs.toast", function () {
    notification.remove();
  });
}

/**
 * Cập nhật số lượng mặt hàng trong giỏ hàng
 * @param {number} productId - ID sản phẩm cần cập nhật
 * @param {number} quantity - Số lượng mới
 */
function updateCartItem(productId, quantity) {
  loadCart();

  const itemIndex = cart.items.findIndex((item) => item.id === productId);

  if (itemIndex === -1) {
    return;
  }

  if (quantity <= 0) {
    // Xóa mặt hàng nếu số lượng là 0 hoặc âm
    removeCartItem(productId);
  } else {
    // Cập nhật số lượng
    cart.items[itemIndex].quantity = quantity;

    // Tính lại tổng
    calculateCartTotal();

    // Lưu giỏ hàng
    saveCart();

    // Làm mới hiển thị giỏ hàng nếu đang ở trang giỏ hàng
    if (document.getElementById("cart-items-container")) {
      displayCart();
    }
  }
}

/**
 * Xóa mặt hàng khỏi giỏ hàng
 * @param {number} productId - ID sản phẩm cần xóa
 */
function removeCartItem(productId) {
  loadCart();

  // Lọc ra mặt hàng cần xóa
  cart.items = cart.items.filter((item) => item.id !== productId);

  // Tính lại tổng
  calculateCartTotal();

  // Lưu giỏ hàng
  saveCart();

  // Làm mới hiển thị giỏ hàng nếu đang ở trang giỏ hàng
  if (document.getElementById("cart-items-container")) {
    displayCart();
  }
}

/**
 * Xóa toàn bộ giỏ hàng
 */
function clearCart() {
  cart.items = [];
  cart.total = 0;
  saveCart();

  // Làm mới hiển thị giỏ hàng nếu đang ở trang giỏ hàng
  if (document.getElementById("cart-items-container")) {
    displayCart();
  }
}

/**
 * Hiển thị các mặt hàng trong giỏ trên trang giỏ hàng
 */
function displayCart() {
  const cartContainer = document.getElementById("cart-items-container");
  const cartSummaryContainer = document.getElementById(
    "cart-summary-container"
  );

  if (!cartContainer || !cartSummaryContainer) {
    return;
  }

  loadCart();

  // Hiển thị các mặt hàng trong giỏ
  if (cart.items.length === 0) {
    cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                <h4>Your cart is empty</h4>
                <p>Looks like you haven't added any products to your cart yet.</p>
                <a href="../index.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
    cartSummaryContainer.innerHTML = "";
  } else {
    let itemsHtml = "";

    cart.items.forEach((item) => {
      itemsHtml += `
                <div class="cart-item">
                    <div class="row align-items-center">
                        <div class="col-md-2 col-4">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${
        item.name
      }" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-md-4 col-8">
                            <h5 class="cart-item-title">${item.name}</h5>
                            <a href="#" class="text-danger remove-item" data-id="${
                              item.id
                            }">
                                <i class="fas fa-trash me-1"></i> Remove
                            </a>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0">
                            <div class="cart-item-price">$${item.price.toFixed(
                              2
                            )}</div>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0">
                            <div class="d-flex cart-item-quantity">
                                <button class="btn btn-sm btn-outline-secondary quantity-btn minus" data-id="${
                                  item.id
                                }">-</button>
                                <input type="number" class="form-control form-control-sm text-center cart-quantity-input" value="${
                                  item.quantity
                                }" data-id="${item.id}" min="1">
                                <button class="btn btn-sm btn-outline-secondary quantity-btn plus" data-id="${
                                  item.id
                                }">+</button>
                            </div>
                        </div>
                        <div class="col-md-2 col-4 mt-3 mt-md-0 text-end">
                            <div class="cart-item-total">$${(
                              item.price * item.quantity
                            ).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            `;
    });

    cartContainer.innerHTML = itemsHtml;

    // Hiển thị tổng kết giỏ hàng
    const subtotal = cart.total;
    const shippingFee = subtotal >= 50 ? 0 : 5.99;
    const tax = subtotal * 0.08; // Giả sử thuế 8%
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
                    <span>${
                      shippingFee === 0 ? "Free" : "$" + shippingFee.toFixed(2)
                    }</span>
                </div>
                <div class="cart-summary-row">
                    <span>Estimated tax:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <hr>
                <div class="cart-summary-row">
                    <span>Total:</span>
                    <span class="cart-summary-total">$${total.toFixed(2)}</span>
                </div>
                ${
                  shippingFee > 0
                    ? '<div class="text-muted small mt-2">Free shipping for orders over $50</div>'
                    : ""
                }
                <a href="checkout.html" class="btn btn-primary w-100 mt-3">Proceed to Checkout</a>
                <button class="btn btn-outline-secondary w-100 mt-2" id="clear-cart-btn">Clear Cart</button>
            </div>
        `;

    // Thêm các trình nghe sự kiện cho tương tác giỏ hàng
    addCartEventListeners();
  }
}

/**
 * Thêm các trình nghe sự kiện cho tương tác trang giỏ hàng
 */
function addCartEventListeners() {
  // Các nút xóa mặt hàng
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const productId = parseInt(this.getAttribute("data-id"));
      removeCartItem(productId);
    });
  });

  // Các nút giảm số lượng
  const minusButtons = document.querySelectorAll(".quantity-btn.minus");
  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const quantityInput = document.querySelector(
        `.cart-quantity-input[data-id="${productId}"]`
      );
      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateCartItem(productId, quantity);
      }
    });
  });

  // Các nút tăng số lượng
  const plusButtons = document.querySelectorAll(".quantity-btn.plus");
  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const quantityInput = document.querySelector(
        `.cart-quantity-input[data-id="${productId}"]`
      );
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
      updateCartItem(productId, quantity);
    });
  });

  // Thay đổi đầu vào số lượng
  const quantityInputs = document.querySelectorAll(".cart-quantity-input");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      const quantity = parseInt(this.value);
      if (quantity > 0) {
        updateCartItem(productId, quantity);
      } else {
        this.value = 1;
        updateCartItem(productId, 1);
      }
    });
  });

  // Nút xóa giỏ hàng
  const clearCartButton = document.getElementById("clear-cart-btn");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to clear your cart?")) {
        clearCart();
      }
    });
  }
}

/**
 * Khởi tạo trang thanh toán
 */
function initCheckoutPage() {
  const checkoutSummaryContainer = document.getElementById(
    "checkout-order-summary"
  );
  if (!checkoutSummaryContainer) return;

  loadCart();

  if (cart.items.length === 0) {
    // Chuyển hướng đến giỏ hàng nếu giỏ trống
    window.location.href = "cart.html";
    return;
  }

  // Hiển thị tổng kết đơn hàng
  let itemsHtml = "";
  cart.items.forEach((item) => {
    itemsHtml += `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
  });

  const subtotal = cart.total;
  const shippingFee = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // Giả sử thuế 8%
  const total = subtotal + shippingFee + tax;

  checkoutSummaryContainer.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Tổng Kết Đơn Hàng</h5>
            </div>
            <div class="card-body">
                ${itemsHtml}
                <hr>
                <div class="d-flex justify-content-between mb-2">
                    <span>Tổng phụ:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Phí vận chuyển:</span>
                    <span>${
                      shippingFee === 0
                        ? "Miễn phí"
                        : "$" + shippingFee.toFixed(2)
                    }</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span>Thuế ước tính:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between fw-bold">
                    <span>Tổng cộng:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;

  // Thêm trình nghe sự kiện cho việc gửi biểu mẫu thanh toán
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Xác thực biểu mẫu
      if (this.checkValidity()) {
        // Xử lý thanh toán
        processCheckout();
      } else {
        // Kích hoạt xác thực biểu mẫu trình duyệt
        e.stopPropagation();
      }

      this.classList.add("was-validated");
    });
  }
}

/**
 * Xử lý thanh toán
 */
function processCheckout() {
  // Trong ứng dụng thực, cái này sẽ gửi đơn hàng đến máy chủ
  // Đối với bản demo này, chúng ta sẽ chỉ hiển thị thông báo thành công và xóa giỏ hàng

  // Hiển thị trạng thái đang tải
  const checkoutButton = document.querySelector(
    '#checkout-form button[type="submit"]'
  );
  const originalText = checkoutButton.innerHTML;
  checkoutButton.disabled = true;
  checkoutButton.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Đang xử lý...';

  // Mô phỏng độ trễ máy chủ
  setTimeout(function () {
    // Xóa giỏ hàng
    clearCart();

    // Hiển thị thông báo thành công
    const checkoutContainer = document.querySelector(".checkout-container");
    checkoutContainer.innerHTML = `
            <div class="text-center py-5">
                <div class="mb-4">
                    <i class="fas fa-check-circle fa-5x text-success"></i>
                </div>
                <h2>Đặt Hàng Thành Công!</h2>
                <p class="lead">Cảm ơn bạn đã mua hàng.</p>
                <p>Mã đơn hàng của bạn là: ORD-${Math.floor(
                  Math.random() * 10000000
                )}</p>
                <p>Bạn sẽ nhận được email xác nhận trong thời gian ngắn.</p>
                <a href="../index.html" class="btn btn-primary mt-3">Tiếp tục mua sắm</a>
            </div>
        `;
  }, 1500);
}

/**
 * Khởi tạo các nút thêm vào giỏ hàng
 */
function initAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const productId = parseInt(this.dataset.productId);
      const quantityInput = document.getElementById("quantity");
      const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

      addToCart(productId, quantity);

      // Hiển thị thông báo thành công
      showNotification("Đã thêm sản phẩm vào giỏ hàng!", "success");
    });
  });

  // Khởi tạo các nút "Mua ngay" nếu chúng tồn tại
  const buyNowButtons = document.querySelectorAll(".buy-now");

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const productId = parseInt(this.dataset.productId);
      const quantityInput = document.getElementById("quantity");
      const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

      addToCart(productId, quantity);

      // Chuyển hướng đến thanh toán
      window.location.href = "checkout.html";
    });
  });
}

// Khởi tạo giỏ hàng khi trang tải
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  updateCartCount();

  // Khởi tạo trang giỏ hàng nếu có thể áp dụng
  if (document.getElementById("cart-items-container")) {
    displayCart();
  }

  // Khởi tạo trang thanh toán nếu có thể áp dụng
  if (document.getElementById("checkout-form")) {
    initCheckoutPage();
  }

  // Khởi tạo các nút thêm vào giỏ hàng
  initAddToCartButtons();
});
