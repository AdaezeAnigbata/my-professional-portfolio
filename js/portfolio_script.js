document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      // Toggle the 'active' class on the menu
      navMenu.classList.toggle("active");

      // Optional: Change button text/state
      if (navMenu.classList.contains("active")) {
        navToggle.textContent = "CLOSE";
        navToggle.setAttribute("aria-expanded", "true");
      } else {
        navToggle.textContent = "MENU";
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close the menu when a link is clicked (for better mobile UX)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          navToggle.textContent = "MENU";
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Ensures smooth scrolling works on all browsers when clicking nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Stop the instant jump
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // --- 4. Projects Slider (Horizontal Scroll) ---
  const slider = document.getElementById("projects-container");
  const leftBtn = document.getElementById("scroll-left");
  const rightBtn = document.getElementById("scroll-right");

  if (slider && leftBtn && rightBtn) {
    // Scroll Right Button
    rightBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: 340, // Scroll width of one card + gap
        behavior: "smooth",
      });
    });

    // Scroll Left Button
    leftBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -340, // Negative value scrolls backwards
        behavior: "smooth",
      });
    });
  }
});
