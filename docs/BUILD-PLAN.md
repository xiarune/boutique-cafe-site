Here's a clean breakdown of 5 micro-iterations, each testable in 5-10 minutes:
Step 1 - Add the toggle button to the HTML (one page first) Add a <button id="theme-toggle"> inside the <nav> or <header> of index.html only. No JS, no CSS yet. Just confirm it renders in the right place and doesn't break your layout. This is your "does it exist?" check.

Step 2 - Write the CSS for theme-manuscript In styles.css, add a block like:


body.theme-manuscript {
  background: #f5f0e8;
  color: #2c2c2c;
  font-family: Georgia, serif;
  max-width: 680px;
  margin: 0 auto;
}

Test it by manually adding class="theme-manuscript" to <body> in index.html. Confirm the visual change looks right, then remove it. No JS needed yet.

Step 3 - Wire up the toggle with JS (no persistence yet) In script.js, add:


const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('theme-manuscript');
});

Test: click the button, confirm the class toggles on/off, confirm styles apply. Refresh - it should reset. That's expected. Persistence comes next.

Step 4 - Add localStorage persistence Wrap your existing JS so it saves and restores the preference:


// On load
if (localStorage.getItem('theme') === 'manuscript') {
  document.body.classList.add('theme-manuscript');
}

// On click
btn.addEventListener('click', () => {
  const isOn = document.body.classList.toggle('theme-manuscript');
  localStorage.setItem('theme', isOn ? 'manuscript' : '');
});

Test: toggle on, refresh - it should persist. Toggle off, refresh - it should be gone.

Step 5 - Copy the button to all other pages Paste the same <button id="theme-toggle"> into about.html, contact.html, and services.html. Since script.js and styles.css are already linked site-wide, no other changes are needed. Test by navigating between pages with the theme on - it should stay consistent.

Optional Step 6 - Update the button label dynamically A tiny UX polish: set the button text to reflect state.


btn.textContent = document.body.classList.contains('theme-manuscript')
  ? 'Default Mode'
  : 'Manuscript Mode';

Call this on load and inside the click handler. Test that the label stays in sync after refresh.
Why this order matters: Each step has a single, verifiable outcome.


