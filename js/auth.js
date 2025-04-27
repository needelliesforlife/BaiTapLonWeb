/**
 * User Authentication Management
 * Handles user registration, login, and account management.
 */

/**
 * User object structure
 */
class User {
  constructor(email, password, firstName, lastName, phone = "") {
    this.email = email;
    this.password = password; // In a real app, this would be hashed
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    };
    this.dateJoined = new Date();
    this.orders = [];
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

/**
 * Get users from localStorage
 * @returns {Array} Array of user objects
 */
function getUsers() {
  const users = localStorage.getItem("funcMedUsers");
  return users ? JSON.parse(users) : [];
}

/**
 * Save users to localStorage
 * @param {Array} users - Array of user objects
 */
function saveUsers(users) {
  localStorage.setItem("funcMedUsers", JSON.stringify(users));
}

/**
 * Get current logged in user
 * @returns {Object|null} User object or null if not logged in
 */
function getCurrentUser() {
  const currentUser = localStorage.getItem("funcMedCurrentUser");
  return currentUser ? JSON.parse(currentUser) : null;
}

/**
 * Set current user in localStorage
 * @param {Object|null} user - User object or null to logout
 */
function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("funcMedCurrentUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("funcMedCurrentUser");
  }
}

/**
 * Check if email already exists
 * @param {string} email - Email to check
 * @returns {boolean} True if email exists, false otherwise
 */
function emailExists(email) {
  const users = getUsers();
  return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
}

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Object} Result object with success flag and message
 */
function registerUser(userData) {
  // Check if email already exists
  if (emailExists(userData.email)) {
    return {
      success: false,
      message:
        "Email already registered. Please use a different email or login.",
    };
  }

  // Create new user
  const newUser = new User(
    userData.email,
    userData.password,
    userData.firstName,
    userData.lastName,
    userData.phone
  );

  // Get existing users and add new user
  const users = getUsers();
  users.push(newUser);

  // Save updated users
  saveUsers(users);

  // Set as current user
  setCurrentUser(newUser);

  return {
    success: true,
    message: "Registration successful. You are now logged in.",
  };
}

/**
 * Login a user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} Result object with success flag and message
 */
function loginUser(email, password) {
  const users = getUsers();

  // Find user with matching email and password
  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password. Please try again.",
    };
  }

  // Set as current user
  setCurrentUser(user);

  return {
    success: true,
    message: "Login successful. Welcome back!",
  };
}

/**
 * Logout current user
 */
function logoutUser() {
  setCurrentUser(null);
}

/**
 * Update user profile
 * @param {Object} userData - Updated user data
 * @returns {Object} Result object with success flag and message
 */
function updateUserProfile(userData) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "You must be logged in to update your profile.",
    };
  }

  // Get all users
  const users = getUsers();

  // Find current user in the users array
  const userIndex = users.findIndex((u) => u.email === currentUser.email);

  if (userIndex === -1) {
    return {
      success: false,
      message: "User not found. Please try again.",
    };
  }

  // Update user data (keeping the email the same)
  const updatedUser = {
    ...users[userIndex],
    firstName: userData.firstName || users[userIndex].firstName,
    lastName: userData.lastName || users[userIndex].lastName,
    phone: userData.phone || users[userIndex].phone,
    address: userData.address || users[userIndex].address,
  };

  // Update in users array
  users[userIndex] = updatedUser;

  // Save updated users
  saveUsers(users);

  // Update current user
  setCurrentUser(updatedUser);

  return {
    success: true,
    message: "Profile updated successfully.",
  };
}

/**
 * Change user password
 * @param {string} currentPassword - Current password
 * @param {string} newPassword - New password
 * @returns {Object} Result object with success flag and message
 */
function changePassword(currentPassword, newPassword) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "You must be logged in to change your password.",
    };
  }

  // Verify current password
  if (currentUser.password !== currentPassword) {
    return {
      success: false,
      message: "Current password is incorrect. Please try again.",
    };
  }

  // Get all users
  const users = getUsers();

  // Find current user in the users array
  const userIndex = users.findIndex((u) => u.email === currentUser.email);

  // Update password
  users[userIndex].password = newPassword;

  // Save updated users
  saveUsers(users);

  // Update current user
  currentUser.password = newPassword;
  setCurrentUser(currentUser);

  return {
    success: true,
    message: "Password changed successfully.",
  };
}

/**
 * Initialize registration form
 */
function initRegisterForm() {
  const registerForm = document.getElementById("register-form");

  if (!registerForm) return;

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    if (this.checkValidity()) {
      // Get form data
      const userData = {
        email: document.getElementById("register-email").value,
        password: document.getElementById("register-password").value,
        firstName: document.getElementById("register-first-name").value,
        lastName: document.getElementById("register-last-name").value,
        phone: document.getElementById("register-phone").value,
      };

      // Register user
      const result = registerUser(userData);

      if (result.success) {
        // Show success message
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-success";
        alertElement.textContent = result.message;

        const formElement = document.getElementById("register-form");
        formElement.prepend(alertElement);

        // Redirect to home page after delay
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 2000);
      } else {
        // Show error message
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-danger";
        alertElement.textContent = result.message;

        const formElement = document.getElementById("register-form");
        formElement.prepend(alertElement);
      }
    }

    this.classList.add("was-validated");
  });
}

/**
 * Initialize login form
 */
function initLoginForm() {
  const loginForm = document.getElementById("login-form");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    if (this.checkValidity()) {
      // Get form data
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      // Login user
      const result = loginUser(email, password);

      if (result.success) {
        // Show success message
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-success";
        alertElement.textContent = result.message;

        const formElement = document.getElementById("login-form");
        formElement.prepend(alertElement);

        // Redirect to home page after delay
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 2000);
      } else {
        // Show error message
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-danger";
        alertElement.textContent = result.message;

        const formElement = document.getElementById("login-form");
        formElement.prepend(alertElement);
      }
    }

    this.classList.add("was-validated");
  });
}

/**
 * Initialize profile form
 */
function initProfileForm() {
  const profileForm = document.getElementById("profile-form");

  if (!profileForm) return;

  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  // Fill form with current user data
  document.getElementById("profile-email").value = currentUser.email;
  document.getElementById("profile-first-name").value = currentUser.firstName;
  document.getElementById("profile-last-name").value = currentUser.lastName;
  document.getElementById("profile-phone").value = currentUser.phone || "";

  // Address fields
  if (currentUser.address) {
    document.getElementById("profile-street").value =
      currentUser.address.street || "";
    document.getElementById("profile-city").value =
      currentUser.address.city || "";
    document.getElementById("profile-state").value =
      currentUser.address.state || "";
    document.getElementById("profile-zip").value =
      currentUser.address.zipCode || "";
    document.getElementById("profile-country").value =
      currentUser.address.country || "";
  }

  // Handle form submission
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    if (this.checkValidity()) {
      // Get form data
      const userData = {
        firstName: document.getElementById("profile-first-name").value,
        lastName: document.getElementById("profile-last-name").value,
        phone: document.getElementById("profile-phone").value,
        address: {
          street: document.getElementById("profile-street").value,
          city: document.getElementById("profile-city").value,
          state: document.getElementById("profile-state").value,
          zipCode: document.getElementById("profile-zip").value,
          country: document.getElementById("profile-country").value,
        },
      };

      // Update profile
      const result = updateUserProfile(userData);

      // Show result message
      const alertElement = document.createElement("div");
      alertElement.className = `alert alert-${
        result.success ? "success" : "danger"
      }`;
      alertElement.textContent = result.message;

      const alertContainer = document.getElementById("profile-alert-container");
      alertContainer.innerHTML = "";
      alertContainer.appendChild(alertElement);

      // Scroll to alert
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    this.classList.add("was-validated");
  });
}

/**
 * Initialize password change form
 */
function initPasswordForm() {
  const passwordForm = document.getElementById("password-form");

  if (!passwordForm) return;

  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  // Handle form submission
  passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    if (this.checkValidity()) {
      // Get form data
      const currentPassword = document.getElementById("current-password").value;
      const newPassword = document.getElementById("new-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Check if new passwords match
      if (newPassword !== confirmPassword) {
        const alertElement = document.createElement("div");
        alertElement.className = "alert alert-danger";
        alertElement.textContent = "New passwords do not match.";

        const alertContainer = document.getElementById(
          "password-alert-container"
        );
        alertContainer.innerHTML = "";
        alertContainer.appendChild(alertElement);

        return;
      }

      // Change password
      const result = changePassword(currentPassword, newPassword);

      // Show result message
      const alertElement = document.createElement("div");
      alertElement.className = `alert alert-${
        result.success ? "success" : "danger"
      }`;
      alertElement.textContent = result.message;

      const alertContainer = document.getElementById(
        "password-alert-container"
      );
      alertContainer.innerHTML = "";
      alertContainer.appendChild(alertElement);

      // Clear form if success
      if (result.success) {
        this.reset();
      }

      // Scroll to alert
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    this.classList.add("was-validated");
  });
}

/**
 * Update UI based on authentication state
 */
function updateAuthUI() {
  const currentUser = getCurrentUser();

  const loginLinks = document.querySelectorAll(
    '.top-nav a[href*="login.html"]'
  );
  const registerLinks = document.querySelectorAll(
    '.top-nav a[href*="register.html"]'
  );
  const accountLinks = document.querySelectorAll("#account-link");
  const logoutButtons = document.querySelectorAll("#logout-btn");

  if (currentUser) {
    // User is logged in - show account and logout
    loginLinks.forEach((link) => link.classList.add("d-none"));
    registerLinks.forEach((link) => link.classList.add("d-none"));
    accountLinks.forEach((link) => {
      link.classList.remove("d-none");
      link.textContent = currentUser.firstName;
    });
    logoutButtons.forEach((button) => button.classList.remove("d-none"));
  } else {
    // User is not logged in - show login and register
    loginLinks.forEach((link) => link.classList.remove("d-none"));
    registerLinks.forEach((link) => link.classList.remove("d-none"));
    accountLinks.forEach((link) => link.classList.add("d-none"));
    logoutButtons.forEach((button) => button.classList.add("d-none"));
  }
}

/**
 * Initialize logout button
 */
function initLogoutButton() {
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Logout user
      logoutUser();

      // Check if already on index page
      if (
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/")
      ) {
        // If on index page, refresh the page to update UI
        window.location.reload();
      } else {
        // Otherwise redirect to home page
        window.location.href = "index.html";
      }
    });
  }
}

/**
 * Initialize account page
 */
function initAccountPage() {
  const currentUser = getCurrentUser();

  if (!currentUser && window.location.href.includes("account.html")) {
    window.location.href = "login.html";
    return;
  }

  // Fill account page with user data
  const accountNameElement = document.getElementById("account-name");
  const accountEmailElement = document.getElementById("account-email");
  const accountDateElement = document.getElementById("account-date");

  if (accountNameElement && currentUser) {
    accountNameElement.textContent = currentUser.getFullName();
  }

  if (accountEmailElement && currentUser) {
    accountEmailElement.textContent = currentUser.email;
  }

  if (accountDateElement && currentUser) {
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    accountDateElement.textContent = new Date(
      currentUser.dateJoined
    ).toLocaleDateString(undefined, dateOptions);
  }
}

// Add event listener for DOMContentLoaded to initialize auth functionality
document.addEventListener("DOMContentLoaded", function () {
  // Update UI based on authentication state
  updateAuthUI();

  // Initialize logout button
  initLogoutButton();

  // Initialize forms based on current page
  initRegisterForm();
  initLoginForm();
  initProfileForm();
  initPasswordForm();
  initAccountPage();
});
