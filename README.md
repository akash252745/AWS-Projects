# I Love You Heart Animation ❤️

This project recreates the animation mechanism shown in the Coding Stella reference:
100 dynamically-created `I love you` elements, staggered with negative animation delays,
with separate horizontal and vertical CSS keyframe animations.

## GitHub Pages

Upload these files directly into the repository root:

- `index.html`
- `style.css`
- `script.js`

Then:

1. Open **Settings**
2. Open **Pages**
3. Choose **Deploy from a branch**
4. Select **main**
5. Select **/(root)**
6. Click **Save**

## Change the message

Edit this line in `script.js`:

```javascript
<div class="love_word">I love you</div>
```

For example:

```javascript
<div class="love_word">Happy Birthday ❤️</div>
```

or:

```javascript
<div class="love_word">जन्मदिन मुबारक ❤️</div>
```

The animation itself is controlled by CSS, so changing the text does not require changing the
animation logic.

## Important

This is intentionally based on the mechanism visible in the reference: the heart shape is an
emergent result of the nested horizontal + vertical animations and the staggered `--i` delays.
It is NOT a mathematical heart-path animation.
