# HNG Frontend Stage 0 Task – Testable Profile Card

This project is a responsive and accessible **Profile Card** built using **HTML, CSS, and Vanilla JavaScript** as part of the HNG Frontend Stage 0 task.  
It dynamically displays the current timestamp in milliseconds, supports light/dark theme toggling, and includes `data-testid` attributes for automated testing.

---

## Features

- Responsive design (mobile, tablet, desktop)
- Dynamic timestamp (auto-updates every second)
- Light/Dark mode with saved preference using LocalStorage
- Accessible semantic HTML with keyboard navigation
- All required `data-testid` attributes for HNG automated testing

---

## Technologies Used

- HTML5 (semantic tags)
- CSS3 (Flexbox, Grid, and CSS variables)
- Vanilla JavaScript (ES6)
- LocalStorage for theme persistence

---

## How to Run Locally

1. **Clone this repository:**
   ```bash
   git clone https://github.com/EonSyntax/hng13-stage-0.git

2. **Navigate into the project folder:**
    cd hng13-stage-0

3. **Open the project in your browser:**
    Simply double-click index.html
    OR use a live server (e.g., the VS Code “Live Server” extension)

---

## Testing Information

| Test ID                     | Description                                    |
| --------------------------- | ---------------------------------------------- |
| `test-profile-card`         | Root container of the profile card             |
| `test-user-name`            | Displays your full name                        |
| `test-user-bio`             | Displays your biography paragraph              |
| `test-user-time`            | Displays the current timestamp in milliseconds |
| `test-user-avatar`          | Displays your avatar image                     |
| `test-user-social-links`    | Container for all social links                 |
| `test-user-social-twitter`  | Twitter social link                            |
| `test-user-social-linkedin` | LinkedIn social link                           |
| `test-user-hobbies`         | List of hobbies                                |
| `test-user-dislikes`        | List of dislikes                               |

---

## Notes

* The timestamp updates every second using Date.now().
* The light/dark mode setting is remembered between sessions.
* Avatar is loaded from a local file or a remote URL.
* Layout remains stable and responsive for all screen sizes.

---

## Author

Emmanuel Adebanji
Frontend Developer | HNG Intern
