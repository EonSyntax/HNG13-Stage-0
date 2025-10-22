# 🌟 HNG Frontend Internship — Stage 0 & Stage 1 Tasks

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)
![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
![Accessibility](https://img.shields.io/badge/Accessible-AA--WCAG-34A853)
![Responsive](https://img.shields.io/badge/Responsive-Design-1E90FF)
![License](https://img.shields.io/badge/License-MIT-green)

This repository contains my submissions for the **HNG Frontend Internship** — **Stage 0** and **Stage 1** tasks.  
It evolves from a **single Profile Card** into a **multi-page responsive web application** built entirely with **HTML, CSS, and Vanilla JavaScript**.

---

## Stage 0 — Testable Profile Card

A responsive, accessible **Profile Card** that displays real-time timestamps, supports light/dark themes, and includes all required `data-testid` attributes for HNG automated testing.

---

### Features

- Responsive across mobile, tablet, and desktop
- Dynamic timestamp updates every second
- Light/Dark mode with persistence via `localStorage`
- Accessible semantic HTML with keyboard navigation
- Complete `data-testid` support for automated testing

---

### Technologies Used

- **HTML5** (semantic elements)
- **CSS3** (Flexbox, Grid, CSS variables)
- **Vanilla JavaScript (ES6)**
- **LocalStorage** (for theme persistence)

---

### Test IDs Reference

| Test ID                     | Description                        |
| --------------------------- | ---------------------------------- |
| `test-profile-card`         | Root container of the profile card |
| `test-user-name`            | Displays your full name            |
| `test-user-bio`             | Biography paragraph                |
| `test-user-time`            | Current timestamp in milliseconds  |
| `test-user-avatar`          | Avatar image                       |
| `test-user-social-links`    | Container for all social links     |
| `test-user-social-twitter`  | Twitter link                       |
| `test-user-social-linkedin` | LinkedIn link                      |
| `test-user-hobbies`         | List of hobbies                    |
| `test-user-dislikes`        | List of dislikes                   |

---

### Notes

- Timestamp auto-updates every second using `Date.now()`.
- Theme preference is remembered between sessions.
- Avatar may be a local or remote image.
- Layout remains stable and fully responsive.

---

## Stage 1 — Multi-Page Extension (About Me + Contact Us)

Building on the Stage 0 foundation, Stage 1 expands the project into a **two-page application** with a **Contact Us form** and an **About Me page**, both fully accessible and testable.

---

### Contact Us Page

A simple, semantic contact form with real-time validation.

---

#### Required Fields (`data-testid`)

| Field           | Data Test ID                                                   |
| --------------- | -------------------------------------------------------------- |
| Full Name       | `test-contact-name`                                            |
| Email           | `test-contact-email`                                           |
| Subject         | `test-contact-subject`                                         |
| Message         | `test-contact-message`                                         |
| Submit Button   | `test-contact-submit`                                          |
| Error Messages  | `test-contact-error-<field>` (e.g. `test-contact-error-email`) |
| Success Message | `test-contact-success`                                         |

---

#### Validation Rules

- All fields are **required**
- Email must match pattern `name@example.com`
- Message must contain **at least 10 characters**
- Display success confirmation only after valid submission

---

#### Accessibility

- Every input has an associated `<label for="...">`
- Error messages linked using `aria-describedby`
- Entire form is keyboard-navigable

---

### About Me Page

A reflective, semantic page that shares insights and personal goals.

---

#### Required Sections (`data-testid`)

| Section                 | Data Test ID             |
| ----------------------- | ------------------------ |
| Bio                     | `test-about-bio`         |
| Goals in this program   | `test-about-goals`       |
| Areas of low confidence | `test-about-confidence`  |
| Note to future self     | `test-about-future-note` |
| Extra thoughts          | `test-about-extra`       |

---

#### Semantic Structure

- Entire content wrapped with `<main data-testid="test-about-page">`
- Each topic in a `<section>` with proper headings (`<h2>`, `<h3>`)
- Structured for clarity and screen-reader hierarchy

---

### Acceptance Criteria Summary

#### Contact Us

- All required fields exist with proper `data-testid`s
- Validation blocks invalid inputs
- Success message only appears on valid submission

#### About Me

- All required sections exist with correct test IDs
- Uses semantic and accessible HTML

#### General

- Semantic HTML throughout
- Accessible (labels, alt text, ARIA attributes)
- Responsive on all devices
- Fully keyboard navigable
- Clean, modular, and readable code

---

## How to Run Locally

1. **Clone this repository**

   ```bash
   git clone https://github.com/EonSyntax/hng13-stage-0.git

   ```

2. **Navigate into the project folder**
   cd hng13-stage-0

3. **Open the project**
   - Double-click index.html or
   - Run via a live server (e.g. VS Code Live Server extension)

---

## Author

    Emmanuel Adebanji | Frontend Developer | HNG Intern
