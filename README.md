# Floating Hearts GitHub Pages Project ❤️

A simple animated message page where multiple hearts continuously float upward.

## Files

- `index.html` — page content
- `style.css` — design and heart animation
- `script.js` — continuously creates floating hearts
- `assets/` — optional images/assets

## Put it online with GitHub Pages

1. Create a new GitHub repository, for example `floating-hearts`.
2. Upload all files from this folder to the repository.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save and wait for GitHub Pages to deploy.
6. Your public link will look like:

   `https://YOUR-USERNAME.github.io/floating-hearts/`

## Change the message

Open `index.html` and edit:

```html
<h1>You are Special!</h1>
<p>Thank you for being<br>a wonderful part of my life.</p>
```

## Change the heart speed

Open `script.js` and change:

```javascript
setInterval(() => createHeart(), 380);
```

A smaller number creates hearts more frequently.

## Change the heart appearance

In `script.js`, edit:

```javascript
const heartSymbols = ["❤", "♥", "💕", "💗", "💖", "💓"];
```

You can also change the colors in the `colors` array.
