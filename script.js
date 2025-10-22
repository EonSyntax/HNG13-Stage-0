console.log("✅ script.js loaded");
// Mobile Hamburger Menu
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileMenuToggle || !mobileMenu) return;

  mobileMenuToggle.addEventListener("click", () => {
    const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true";
    
    mobileMenuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("active");
    
    // Update aria-label
    mobileMenuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open menu" : "Close menu"
    );
  });

  // Close menu when clicking outside
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenuToggle.click();
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      mobileMenuToggle.click();
    }
  });
}


// Update timestamp with current time in milliseconds
function updateTimestamp() {
  const timestampElement = document.getElementById("timestamp");
  if (timestampElement) {
    timestampElement.textContent = `${Date.now()}`;
  }
}

// Dark mode toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";

  // Apply saved theme
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    htmlElement.classList.remove("dark");
    themeToggle.setAttribute("aria-pressed", "false");
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    const isDark = htmlElement.classList.toggle("dark");
    // Save preference
    const currentTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    // Update aria-pressed for accessibility
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");

    console.log(`Theme switched to: ${currentTheme}`);
  });

  // Keyboard accessibility - toggle on Enter or Space
  themeToggle.addEventListener("keydown", (e) => {
    // Support modern ' ' and legacy 'Spacebar' key values
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      themeToggle.click();
    }
  });
}

// Avatar Upload
function initAvatarUpload() {
  const uploadBtn = document.getElementById("uploadBtn");
  const avatarUpload = document.getElementById("avatarUpload");
  const userAvatar = document.getElementById("userAvatar");

  if (!uploadBtn || !avatarUpload || !userAvatar) return;

  uploadBtn.addEventListener("click", () => {
    avatarUpload.click();
  });

  avatarUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      userAvatar.src = imageURL;

      // Revoke object URL after image loads to free memory
      userAvatar.onload = () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  });
}


// Contact Form
function initContactForm() {
  const form = document.getElementById("contactForm");
  
  if (!form) return;

  const fields = {
    name: document.getElementById("contact-name"),
    email: document.getElementById("contact-email"),
    subject: document.getElementById("contact-subject"),
    message: document.getElementById("contact-message"),
  };

  const errors = {
    name: document.getElementById("name-error"),
    email: document.getElementById("email-error"),
    subject: document.getElementById("subject-error"),
    message: document.getElementById("message-error"),
  };

  const successMessage = document.getElementById("successMessage");

  // Validation functions
  function validateName(value) {
    if (!value || value.trim() === "") {
      return "Full name is required";
    }
    return null;
  }

  function validateEmail(value) {
    if (!value || value.trim() === "") {
      return "Email address is required";
    }
    
    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address";
    }
    
    return null;
  }

  function validateSubject(value) {
    if (!value || value.trim() === "") {
      return "Subject is required";
    }
    return null;
  }

  function validateMessage(value) {
    if (!value || value.trim() === "") {
      return "Message is required";
    }
    if (value.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    return null;
  }

  // Show error function
  function showError(fieldName, errorMessage) {
    const field = fields[fieldName];
    const errorElement = errors[fieldName];
    
    if (field && errorElement) {
      field.classList.add("error");
      field.setAttribute("aria-invalid", "true");
      errorElement.classList.add("visible");
      errorElement.querySelector(".error-message").textContent = errorMessage;
    }
  }

  // Clear error function
  function clearError(fieldName) {
    const field = fields[fieldName];
    const errorElement = errors[fieldName];
    
    if (field && errorElement) {
      field.classList.remove("error");
      field.setAttribute("aria-invalid", "false");
      errorElement.classList.remove("visible");
      errorElement.querySelector(".error-message").textContent = "";
    }
  }

  // Validate field function
  function validateField(fieldName) {
    const value = fields[fieldName]?.value || "";
    let errorMessage = null;

    switch (fieldName) {
      case "name":
        errorMessage = validateName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "subject":
        errorMessage = validateSubject(value);
        break;
      case "message":
        errorMessage = validateMessage(value);
        break;
    }

    if (errorMessage) {
      showError(fieldName, errorMessage);
      return false;
    } else {
      clearError(fieldName);
      return true;
    }
  }

  // Real-time validation on blur
  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName];
    if (field) {
      field.addEventListener("blur", () => {
        validateField(fieldName);
      });

      // Clear error on input
      field.addEventListener("input", () => {
        if (field.classList.contains("error")) {
          clearError(fieldName);
        }
      });
    }
  });

  // Form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Hide success message
    if (successMessage) {
      successMessage.classList.remove("visible");
    }

    // Validate all fields
    const isNameValid = validateField("name");
    const isEmailValid = validateField("email");
    const isSubjectValid = validateField("subject");
    const isMessageValid = validateField("message");

    const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    if (!isFormValid) {
      // Focus first error field
      const firstErrorField = Object.keys(fields).find(
        (fieldName) => fields[fieldName].classList.contains("error")
      );
      if (firstErrorField) {
        fields[firstErrorField].focus();
      }
      return;
    }

    // Prepare form data
    const formData = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim(),
    };

    // Disable submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
  
  await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay

  // Show success message
  if (successMessage) {
    successMessage.classList.add("visible");
  }

  // Reset form
  form.reset();

  // Clear all errors
  Object.keys(fields).forEach(clearError);

  // Scroll to top to show success message
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide success message after 8 seconds
  setTimeout(() => {
    if (successMessage) {
      successMessage.classList.remove("visible");
    }
  }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection and try again.");
    } finally {
      // Re-enable submit button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}


// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTimestamp();
  initThemeToggle();
  initMobileMenu();
  initContactForm();
  initAvatarUpload();

  console.log("Emmanuel Adebanji Profile Card initialized successfully");
});

// Update timestamp every second to show it's dynamic
setInterval(updateTimestamp, 1000);
