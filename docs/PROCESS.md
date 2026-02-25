

I built a manuscript mode theme toggle for my static multi-page café website. The feature adds a button to the navigation bar that switches the site into a book-like reading mode with different colors and a serif font. The preference is saved using localStorage so the theme stays active after refreshing and when moving between pages.

Working in micro-iterations felt slower at first because I wanted to just implement everything at once, but it actually made debugging easier. Each step only changed one thing, so if something broke I immediately knew what caused it. For example, I added the button first, then styling, then JavaScript, then persistence, and finally copied it across pages.

The self-review step was the most useful part. When I asked claude to review its own code it caught issues I would not have noticed, like the button missing type="button", accessibility problems with aria-pressed, and a potential error if localStorage was unavailable in some browsers. It also pointed out layout risks on mobile navigation.

I liked claude web because it kept the workflow organized and easy to review, but it sometimes tried to do multiple steps at once, so I had to explicitly limit it to one step each time.