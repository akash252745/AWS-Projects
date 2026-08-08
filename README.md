# Clockwise Moving I Love You Heart ❤️

This version is different from a static heart.

Multiple `I love you` words continuously travel **clockwise along the heart outline**:

**TOP → RIGHT → BOTTOM → LEFT → TOP**

## GitHub Pages

Upload these files to the repository root:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

Then:

Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

## Change the moving message

In `script.js`:

```javascript
word.textContent = "I love you";
```

Change it to any text, including Hindi:

```javascript
word.textContent = "जन्मदिन मुबारक";
```

## Change speed

In `script.js`:

```javascript
const SPEED = 0.00032;
```

Try `0.00020` for slower movement or `0.00050` for faster movement.
