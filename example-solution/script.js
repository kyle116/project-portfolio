// Mobile menu toggle (Exercise 10 - Task 1)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Smooth scrolling (Exercise 10 - Task 2)
const inPageLinks = document.querySelectorAll('a[href^="#"]');

inPageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }

    const targetSection = document.querySelector(targetId);
    if (!targetSection) {
      return;
    }

    event.preventDefault();
    targetSection.scrollIntoView({ behavior: "smooth" });

    if (navLinks && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Contact form validation (Exercise 10 - Task 3)
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

if (contactForm && formMessage && nameInput && emailInput && messageInput) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields before submitting.";
      formMessage.className = "form-message error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = "Thanks for your message! Your form passed validation.";
    formMessage.className = "form-message success";
    contactForm.reset();
  });
}
