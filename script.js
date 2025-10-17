// Update timestamp with current time in milliseconds
function updateTimestamp() {
  const timestampElement = document.getElementById('timestamp');
  if (timestampElement) {
    const currentTime = Date.now();
    timestampElement.textContent = currentTime.toString();
  }
}

// Dark mode toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // Save preference
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    
    console.log(`Theme switched to: ${currentTheme}`);
  });
  
  // Keyboard accessibility - toggle on Enter or Space
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeToggle.click();
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update timestamp immediately
  updateTimestamp();
  
  // Initialize theme toggle
  initThemeToggle();
  
  console.log('Emmanuel Adebanji Profile Card initialized successfully');
});

// Update timestamp every second to show it's dynamic
setInterval(updateTimestamp, 1000);
