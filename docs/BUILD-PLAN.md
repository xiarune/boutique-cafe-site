Micro-iteration build plan for adding a manuscript theme toggle.

Step 1
Add <button id="theme-toggle">Manuscript Mode</button> to the navigation/header area of index.html only.
Verify the button appears and does not affect layout. No CSS or JavaScript yet.

Step 2
Create a CSS theme class in styles.css:

body.theme-manuscript changes background color, text color, and font.
Temporarily add class="theme-manuscript" to the <body> element in index.html to confirm the visual change, then remove it.

Step 3
Add JavaScript to toggle the theme class on click.
Clicking the button should add/remove the theme-manuscript class from <body>.
Refresh should reset to default state.

Step 4
Add localStorage persistence.
When the page loads, check localStorage and apply the theme if previously enabled.
When the button is clicked, update localStorage based on whether the theme is active.
Refresh should keep the selected mode.

Step 5
Copy the same button element into about.html, contact.html, and services.html in the same navigation position.
Navigate between pages to confirm the theme stays consistent across the site.