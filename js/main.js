/**
 * Main JavaScript for FuncMed E-commerce
 * Handles general website functionality
 */

// Initialize back to top button
function initBackToTopButton() {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton) return;

  // Hiển thị/ẩn nút dựa trên vị trí cuộn
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });

  // Cuộn lên đầu trang khi được nhấp
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Xử lý gửi biểu mẫu tìm kiếm
function initSearchForm() {
  const searchForms = document.querySelectorAll("form");
  searchForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const searchInput = form.querySelector('input[type="search"]');
      if (!searchInput) return;

      const query = searchInput.value.trim();

      if (query) {
        window.location.href = `${
          window.location.pathname.includes("/pages/") ? "" : "pages/"
        }search-results.html?q=${encodeURIComponent(query)}`;
      }
    });
  });
}

// Khởi tạo hiệu ứng phóng to hình ảnh sản phẩm
function initProductImageZoom() {
  const productImage = document.querySelector(".product-detail-image img");
  if (!productImage) return;

  productImage.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease";
  });

  productImage.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
}

// Khởi tạo đánh dấu menu danh mục
function initCategoryMenuHighlight() {
  // Kiểm tra xem chúng ta có đang ở trang danh mục không
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category) {
    // Tìm và đánh dấu liên kết danh mục tương ứng
    const categoryLinks = document.querySelectorAll(
      `.dropdown-item[href*="category.html?category=${category}"]`
    );
    categoryLinks.forEach((link) => {
      link.classList.add("active");
    });
  }
}

// Khởi tạo biểu mẫu đăng ký nhận bản tin
function initNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (email) {
      // Trong một ứng dụng thực, điều này sẽ gửi email đến máy chủ
      // Đối với bản demo này, chỉ hiển thị thông báo thành công

      // Tạo phần tử thông báo
      const notification = document.createElement("div");
      notification.className =
        "toast align-items-center text-white bg-success border-0 position-fixed";
      notification.style.top = "20px";
      notification.style.right = "20px";
      notification.style.zIndex = "9999";
      notification.setAttribute("role", "alert");
      notification.setAttribute("aria-live", "assertive");
      notification.setAttribute("aria-atomic", "true");

      // Tạo nội dung thông báo
      notification.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="fas fa-check-circle me-2"></i>
                        Cảm ơn bạn đã đăng ký nhận bản tin của chúng tôi!
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Đóng"></button>
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

      // Xóa đầu vào
      emailInput.value = "";
    }
  });
}

// Thêm bộ đếm ngược cho khuyến mãi đặc biệt
function initSpecialOfferCountdown() {
  const countdownElement = document.getElementById("special-offer-countdown");
  if (!countdownElement) return;

  // Đặt thời gian kết thúc đếm ngược (24 giờ từ bây giờ)
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 24);

  // Cập nhật đếm ngược mỗi giây
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endTime - now;

    // Tính thời gian còn lại
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị đếm ngược
    countdownElement.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Nếu đếm ngược kết thúc, xóa khoảng thời gian
    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "ĐÃ HẾT HẠN";
    }
  }, 1000);
}

// Khởi tạo menu danh mục di động
function initMobileCategoryMenu() {
  const mobileToggle = document.getElementById("mobile-category-toggle");
  if (!mobileToggle) return;

  mobileToggle.addEventListener("click", function (e) {
    e.preventDefault();
    const mobileMenu = document.getElementById("mobile-category-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("show");
    }
  });
}

// Thêm mã này để tùy chỉnh tất cả các hình ảnh sản phẩm giữ chỗ
document.addEventListener("DOMContentLoaded", function () {
  // Cập nhật tất cả hình ảnh giữ chỗ với màu tùy chỉnh (nền hồng, văn bản tối)
  updateProductImages("ff9eea", "333333");

  // Phần còn lại của mã khởi tạo của bạn
  // ... mã hiện có ...
});

// Kiểm tra chức năng tải hình ảnh (để gỡ lỗi)
function testImageLoad(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ success: true, url: imageUrl });
    img.onerror = () => reject({ success: false, url: imageUrl });
    img.src = imageUrl;
  });
}

// Khởi tạo hình ảnh với xử lý lỗi thích hợp
function initProductImages() {
  // Lấy các phần tử sản phẩm trên trang
  const productElements = document.querySelectorAll("[data-product-id]");

  productElements.forEach((element) => {
    const productId = parseInt(element.dataset.productId);
    const imgElement = element.querySelector("img");

    if (imgElement) {
      // Thêm xử lý lỗi cho hình ảnh
      imgElement.onerror = function () {
        console.log(
          `Không thể tải hình ảnh cho sản phẩm ${productId}, sử dụng hình ảnh dự phòng`
        );
        // Đặt hình ảnh dự phòng nếu hình ảnh gốc không tải được
        this.src = `https://placehold.co/300x300/ff9eea/333333?text=Product+${productId}`;
      };
    }
  });
}

// Cập nhật trang chi tiết sản phẩm với các bản dịch thích hợp
function translateProductPageElements() {
  // Dịch các nút và tab trang sản phẩm
  const addToCartBtn = document.querySelector(
    'button[data-action="add-to-cart"]'
  );
  if (addToCartBtn) {
    addToCartBtn.innerHTML =
      '<i class="fas fa-shopping-cart"></i> Thêm vào giỏ hàng';
  }

  const addToWishlistBtn = document.querySelector(
    'button[data-action="add-to-wishlist"]'
  );
  if (addToWishlistBtn) {
    addToWishlistBtn.innerHTML =
      '<i class="fas fa-heart"></i> Thêm vào danh sách yêu thích';
  }

  // Dịch các tab
  const descriptionTab = document.querySelector('a[href="#description"]');
  if (descriptionTab) {
    descriptionTab.textContent = "Mô tả";
  }

  const dosageTab = document.querySelector('a[href="#dosage"]');
  if (dosageTab) {
    dosageTab.textContent = "Liều lượng & Cách dùng";
  }

  const ingredientsTab = document.querySelector('a[href="#ingredients"]');
  if (ingredientsTab) {
    ingredientsTab.textContent = "Thành phần";
  }

  const reviewsTab = document.querySelector('a[href="#reviews"]');
  if (reviewsTab) {
    reviewsTab.textContent = "Đánh giá";
  }

  // Dịch trạng thái tồn kho
  const inStockLabel = document.querySelector(".stock-status");
  if (inStockLabel && inStockLabel.textContent.includes("In Stock")) {
    inStockLabel.textContent = "Còn hàng";
  } else if (
    inStockLabel &&
    inStockLabel.textContent.includes("Out of Stock")
  ) {
    inStockLabel.textContent = "Hết hàng";
  }

  // Dịch phần sản phẩm liên quan
  const relatedProductsHeading = document.querySelector(
    "h2.related-products-title"
  );
  if (relatedProductsHeading) {
    relatedProductsHeading.textContent = "Sản phẩm liên quan";
  }

  // Dịch tiêu đề lợi ích chính
  const keyBenefitsHeading = document.querySelector("h3.key-benefits-title");
  if (keyBenefitsHeading) {
    keyBenefitsHeading.textContent = "Lợi ích chính:";
  }
}

// Cập nhật sự kiện DOMContentLoaded với xử lý lỗi thích hợp
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Lấy sản phẩm từ local storage hoặc khởi tạo chúng
    const currentProducts = getProductsFromLocalStorage();

    // Cập nhật hình ảnh sản phẩm cụ thể nếu cần
    // Ví dụ: setProductImage(3, "images/products/turmeric.jpg");

    // Cập nhật hình ảnh giữ chỗ với màu tùy chỉnh
    updateProductImages("ff9eea", "333333");

    // Khởi tạo xử lý lỗi hình ảnh
    initProductImages();

    // Khởi tạo các thành phần trang web
    initBackToTopButton();
    initSearchForm();
    initProductImageZoom();
    initCategoryMenuHighlight();
    initNewsletterForm();
    initSpecialOfferCountdown();
    initMobileCategoryMenu();

    // Dịch các phần tử trang sản phẩm nếu chúng ta đang ở trang sản phẩm
    translateProductPageElements();
  } catch (error) {
    console.error("Lỗi khởi tạo trang web:", error);
  }
});
