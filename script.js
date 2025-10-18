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
const uploadBtn = document.getElementById("uploadBtn");
const avatarUpload = document.getElementById("avatarUpload");
const userAvatar = document.getElementById("userAvatar");

uploadBtn.addEventListener("click", () => {
  avatarUpload.click();
});

avatarUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    userAvatar.src = imageURL;

    // Optional: revoke object URL after image loads to free memory
    userAvatar.onload = () => {
      URL.revokeObjectURL(imageURL);
    };
  }
});



// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Update timestamp immediately
  updateTimestamp();

  // Initialize theme toggle
  initThemeToggle();

  console.log("Emmanuel Adebanji Profile Card initialized successfully");
});

// Update timestamp every second to show it's dynamic
setInterval(updateTimestamp, 1000);


