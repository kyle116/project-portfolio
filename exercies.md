# Personal Portfolio Website Project

## Project Overview

In this project, you will build a personal portfolio website from scratch using HTML, CSS, and JavaScript.

By the end, your site should clearly show:

- Who you are
- Your skills
- Your projects
- How people can contact you

Each exercise builds on the previous one, so complete them in order.

---

## Final Website Features

Your completed website should include:

- A navigation bar
- A hero/introduction section
- An about section
- A skills section
- A projects section
- A contact section
- Interactive JavaScript features:
  - Mobile menu toggle
  - Smooth scrolling
  - Contact form validation
- Clean visual styling
- Responsive behavior as a stretch goal

---

## Suggested Project Structure

Create the following files:

```text
portfolio-site/
|
|-- index.html
|-- styles.css
|-- script.js
|
|-- images/
|
|-- assets/ (files or media you want to share)
```

---

## How To Use These Exercises

For each exercise:

1. Read the goal.
2. Follow the instructions.
3. Type the example code yourself (do not only copy/paste).
4. Test in the browser before moving on.

---

# Exercise 1 - Create the Basic HTML Page

## Goal

Create a HTML5 starter page and connect your CSS and JavaScript files.

## Instructions

1. Create `index.html`.
2. Add `<!DOCTYPE html>` at the top.
3. Add `<html lang="en">`.
4. In `<head>`, include charset, viewport, title, and CSS link.
5. In `<body>`, add a placeholder heading for now.
6. Add your `<script src="script.js"></script>` before `</body>`.

<details>
  <summary>Code Example</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My Portfolio</h1>

  <script src="script.js"></script>
</body>
</html>
```
</details>

## Checkpoint

- The page opens in a browser with no errors.
- Your CSS and JS files are linked.

---

# Exercise 2 - Create the Navigation Bar

## Goal

Add a navigation bar so users can jump to each section.

## Instructions

1. Add a `<header>` and `<nav>` near the top of `<body>`.
2. Add your name/logo on the left.
3. Add a menu toggle button with `id="menu-toggle"`.
4. Add a list of links with `id="nav-links"`.
5. Point links to section IDs you will build next (`#home`, `#about`, `#skills`, `#projects`, `#contact`).

<details>
  <summary>Code Example</summary>

```html
<header class="site-header">
  <nav class="nav container">
    <a class="logo" href="#home">Your Name</a>

    <button id="menu-toggle" aria-label="Toggle menu">Menu</button>

    <ul id="nav-links" class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```
</details>

## Checkpoint

- All five links appear in the nav.
- IDs `menu-toggle` and `nav-links` are present.

---

# Exercise 3 - Hero Section

## Goal

Create a strong first section introducing who you are.

## Instructions

1. Add a `<section id="home">` under the nav.
2. Add your name in an `<h1>`.
3. Add a short title line.
4. Add one short paragraph about what you do.
5. Add a button or link that goes to `#projects`.

<details>
  <summary>Code Example</summary>

```html
<section id="home" class="hero section">
  <div class="container">
    <h1>Hi, I am Your Name</h1>
    <p class="hero-role">Aspiring Web Developer</p>
    <p>I build simple and useful web pages while learning frontend development.</p>
    <a class="btn" href="#projects">View My Work</a>
  </div>
</section>
```
</details>

## Checkpoint

- Hero content is visible and readable.
- The "View My Work" button links to projects.

---

# Exercise 4 - About Me Section

## Goal

Introduce yourself with text and an image.

## Instructions

1. Add `<section id="about">`.
2. Add a heading like "About Me".
3. Write a short paragraph (3 to 5 sentences).
4. Add an image using `<img>`.
5. Add useful `alt` text for accessibility.

<details>
  <summary>Code Example</summary>

```html
<section id="about" class="section">
  <div class="container about-content">
    <img src="images/profile.jpg" alt="Portrait of Your Name">
    <div>
      <h2>About Me</h2>
      <p>
        I am a student learning web development.
        I enjoy creating clean layouts and interactive user interfaces.
      </p>
    </div>
  </div>
</section>
```
</details>

## Checkpoint

- About section has text and image.
- Image includes a descriptive `alt` attribute.

---

# Exercise 5 - Skills Section

## Goal

List your technical and personal skills.

## Instructions

1. Add `<section id="skills">`.
2. Add a section heading.
3. Add a list of at least 5 skills.
4. Wrap each skill in a class you can style (`skill-card`).

<details>
  <summary>Code Example</summary>

```html
<section id="skills" class="section">
  <div class="container">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">Excel</div>
      <div class="skill-card">CSS</div>
      <div class="skill-card">JavaScript</div>
      <div class="skill-card">Film</div>
      <div class="skill-card">Git</div>
    </div>
  </div>
</section>
```
</details>

## Checkpoint

- You have at least 5 skill items.
- Skills are easy to scan visually.

---

# Exercise 6 - Projects Section

## Goal

Show project work with links and screenshots.

## Instructions

1. Add `<section id="projects">`.
2. Create at least 2 project cards.
3. Each card should include title, description, image, and links.
4. Keep project information short and clear.

<details>
  <summary>Code Example</summary>

```html
<section id="projects" class="section">
  <div class="container">
    <h2>Projects</h2>

    <div class="projects-list">
      <article class="project-card">
        <img src="images/project-1.png" alt="Screenshot of project one">
        <div class="project-body">
          <h3>To-Do List App</h3>
          <p>A simple app for adding and managing tasks.</p>
          <div class="project-links">
            <a href="https://github.com/yourname/todo-app">GitHub</a>
            <a href="https://example.com/todo-app">Live Demo</a>
          </div>
        </div>
      </article>

      <article class="project-card">
        <img src="images/project-2.png" alt="Screenshot of project two">
        <div class="project-body">
          <h3>Weather Dashboard</h3>
          <p>Shows current weather for a selected city.</p>
          <div class="project-links">
            <a href="https://github.com/yourname/weather-dashboard">GitHub</a>
            <a href="https://example.com/weather-dashboard">Live Demo</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```
</details>

## Checkpoint

- There are at least 2 project cards.
- Every card has image + links.

---

# Exercise 7 - Contact Section

## Goal

Let users contact you through a form.

## Instructions

1. Add `<section id="contact">`.
2. Add a `<form>` with `id="contact-form"`.
3. Add fields for name, email, and message.
4. Add IDs exactly as listed.
5. Add a feedback paragraph with `id="form-message"`.

## Required IDs

- Form: `id="contact-form"`
- Name field: `id="name"`
- Email field: `id="email"`
- Message field: `id="message"`
- Feedback area: `id="form-message"`

<details>
  <summary>Code Example</summary>

```html
<section id="contact" class="section">
  <div class="container">
    <h2>Contact</h2>
    <form id="contact-form" novalidate>
      <label for="name">Name</label>
      <input id="name" type="text" name="name" required>

      <label for="email">Email</label>
      <input id="email" type="email" name="email" required>

      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button class="btn" type="submit">Submit</button>
      <p id="form-message"></p>
    </form>
  </div>
</section>
```
</details>

## Checkpoint

- Form fields are visible and labeled.
- Required IDs exactly match the list.

---

# Exercise 8 - Basic Styling (CSS)

## Goal

Apply foundational styles for typography, color, and spacing.

## Instructions

1. Add global reset styles (`box-sizing`, margin, padding).
2. Style `body` with a readable font and background color.
3. Add reusable button styles with `.btn`.
4. Add section spacing with a reusable class.
5. Keep this step simple before advanced layout.

## Suggested Color Palette

- Primary: `#2563EB`
- Secondary: `#1E293B`
- Background: `#F8FAFC`

<details>
  <summary>Code Example (`styles.css`)</summary>

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
  line-height: 1.6;
}

.section {
  padding: 40px 0;
}

.btn {
  display: inline-block;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 700;
}
```
</details>

## Checkpoint

- Fonts and colors are consistent across sections.
- Buttons look like clickable elements.

---

# Exercise 9 - Basic CSS Layout

## Goal

Create a clean page layout using containers, spacing, and simple display rules.

## Instructions

1. Wrap section content in `.container`.
2. Use one `max-width` value for consistency.
3. Center with `margin: 0 auto`.
4. Keep nav links in one row using `inline-block`.
5. Keep project cards stacked vertically for now.

<details>
  <summary>Code Example (`styles.css`)</summary>

```css
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
  display: inline-block;
  margin-left: 12px;
}

.project-card {
  border: 1px solid #dbe4f0;
  border-radius: 10px;
  margin-bottom: 1rem;
}
```
</details>

## Checkpoint

- Content does not stretch too wide on desktop.
- Nav links stay in a neat row.

---

# Exercise 10 - Add JavaScript Interactivity (Specific Tasks)

## Goal

Add beginner-friendly interactivity in `script.js`.

## Task 1 - Mobile Menu Toggle

### Steps

1. Select `#menu-toggle` and `#nav-links`.
2. Add a click event listener.
3. Toggle class `open` on `#nav-links`.

<details>
  <summary>Code Example</summary>

```javascript
// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}
```
</details>

## Task 2 - Smooth Scrolling

### Steps

1. Select all in-page links with `a[href^="#"]`.
2. Prevent default jump behavior.
3. Use `scrollIntoView({ behavior: "smooth" })`.

<details>
  <summary>Code Example</summary>

```javascript
// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
```
</details>

## Task 3 - Contact Form Validation

### Steps

1. Listen for the form `submit` event.
2. Prevent reload with `event.preventDefault()`.
3. Validate all fields are filled.
4. Validate email format.
5. Show success/error message in `#form-message`.

<details>
  <summary>Code Example</summary>

```javascript
// Contact form validation
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "form-message error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = "Message sent successfully.";
    formMessage.className = "form-message success";
    form.reset();
  });
}
```
</details>

## Required Script Organization

Use these exact comment headings:

- `// Mobile menu toggle`
- `// Smooth scrolling`
- `// Contact form validation`

## Checkpoint

- Mobile menu opens/closes.
- In-page links scroll smoothly.
- Form shows clear validation messages.

---

# Exercise 11 - Add Hover Effects

## Goal

Improve user experience with simple hover states.

## Instructions

1. Add a hover style for `.btn`.
2. Add a hover style for nav links.
3. Add a hover style for `.project-card`.
4. Keep effects subtle and consistent.

<details>
  <summary>Code Example</summary>

```css
.btn:hover {
  background-color: #1d4ed8;
}

.nav-links a:hover {
  background-color: #2563eb;
  color: #ffffff;
}

.project-card:hover {
  border-color: #2563eb;
}
```
</details>


## Checkpoint

- Hover states make links/buttons feel interactive.
- Colors remain readable.

---

# Exercise 12 - Add a Footer

## Goal

Finish the page with a simple, professional footer.

## Instructions

1. Add a `<footer>` after `</main>`.
2. Add copyright text.
3. Add GitHub and LinkedIn links.
4. Style with top border and spacing.

<details>
  <summary>Code Example (HTML)</summary>

```html
<footer class="site-footer">
  <div class="container footer-content">
    <p>&copy; 2026 Your Name</p>
    <div class="social-links">
      <a href="https://github.com/yourname">GitHub</a>
      <a href="https://linkedin.com/in/yourname">LinkedIn</a>
    </div>
  </div>
</footer>
```
</details>

<details>
  <summary>Code Example (CSS)</summary>

```css
.site-footer {
  margin-top: 2rem;
  padding: 1.25rem 0;
  border-top: 1px solid #dbe4f0;
}

.social-links a {
  margin-right: 1rem;
  color: #2563eb;
}
```
</details>

## Checkpoint

- Footer appears at the bottom of the page.
- Social links are visible and clickable.

---

# Exercise 13 - Code Cleanup

## Goal

Improve code readability and remove unnecessary code.

## Instructions

1. Group HTML by section and keep indentation consistent.
2. Use clear class names (example: `.project-card`, not `.box2`).
3. Remove unused CSS selectors.
4. Remove unused JavaScript variables.
5. Add short comments only where helpful.

<details>
  <summary>Code Example (CSS Organization)</summary>

```css
/* 1. Base styles */
body { font-family: Arial, sans-serif; }

/* 2. Layout */
.container { max-width: 900px; margin: 0 auto; }

/* 3. Sections */
.hero { text-align: center; }
.project-card { border: 1px solid #dbe4f0; }
```
</details>

## Checkpoint

- File structure is clean and easy to scan.
- No obvious duplicate or dead code remains.

---

# Exercise 14 - Final Polish

## Goal

Refine spacing, typography, and consistency.

## Instructions

1. Check spacing between every section.
2. Make heading sizes consistent.
3. Make button and link styles consistent.
4. Check color contrast and readability.
5. Test desktop and mobile manually.

<details>
  <summary>Code Example</summary>

```css
h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}

.section {
  padding: 48px 0;
}
```
</details>

## Checkpoint

- Site looks consistent from top to bottom.
- Typography and spacing feel intentional.

---

# Exercise 15 - Stretch Goal: Responsive Design

## Goal

Make the site easy to use on tablet and mobile.

## Instructions

1. Add a media query with `max-width: 768px`.
2. Show the menu button on small screens.
3. Hide nav links by default on mobile.
4. Show nav links when `.open` is added.
5. Stack content where needed (about section, cards).

<details>
  <summary>Code Example</summary>

```css
@media (max-width: 768px) {
  .menu-toggle {
    display: inline-block;
  }

  .nav-links {
    display: none;
  }

  .nav-links.open {
    display: block;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .project-card {
    width: 100%;
  }
}
```
</details>

## Checkpoint

- Menu is usable on mobile.
- Text and buttons remain readable and tappable.

---

# Bonus Challenges (Optional)

If you finish early, try one or more:

## 1. Dark Mode Toggle

Add a button that switches the page between light and dark theme.

```javascript
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

## 2. Animated Skill Bars

Replace text-only skills with progress bars.

```html
<div class="skill-bar">
  <div class="skill-fill" style="width: 80%;">CSS - 80%</div>
</div>
```

## 3. Project Filter

Add buttons that filter project cards by category.

```javascript
const filters = document.querySelectorAll(".filter-btn");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Show/hide cards by category here
  });
});
```

## 4. Deploy the Website

Publish your portfolio using:

- GitHub Pages
- Netlify
- Vercel

---

## Final Goal

Your final portfolio should be:

- Clean
- Easy to navigate
- Visually appealing
- Professional enough to share with employers

Take your time, test often, and improve one small step at a time.
