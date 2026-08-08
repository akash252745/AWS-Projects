const ui = document.getElementById("ui");
const totalItems = 100;

/* Create the same 100 staggered moving text elements. */
for (let i = 1; i <= totalItems; i++) {
  const love = document.createElement("div");

  love.className = "love";
  love.style.setProperty("--i", i);

  love.innerHTML = `
    <div class="love_horizontal">
      <div class="love_vertical">
        <div class="love_word">I love you</div>
      </div>
    </div>
  `;

  ui.appendChild(love);
}

/* Create the colorful twinkling stars seen around Pratibha. */
const sparkleField = document.getElementById("sparkles");

const sparkles = [
  { x: 24, y: 32, color: "#ff8a00", delay: "0s", scale: 1.0 },
  { x: 43, y: 23, color: "#ff2ca8", delay: ".45s", scale: .8 },
  { x: 61, y: 28, color: "#ffd21f", delay: ".9s", scale: .9 },
  { x: 79, y: 24, color: "#4cff36", delay: ".25s", scale: 1.0 },
  { x: 92, y: 31, color: "#ff2ca8", delay: "1.1s", scale: .85 },
  { x: 41, y: 70, color: "#ff37c8", delay: ".7s", scale: .85 },
  { x: 60, y: 70, color: "#69ff2f", delay: "1.25s", scale: .75 },
  { x: 79, y: 67, color: "#22aaff", delay: ".35s", scale: .9 },
  { x: 94, y: 66, color: "#ff9c2b", delay: ".85s", scale: .75 }
];

sparkles.forEach((item) => {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.style.left = `${item.x}%`;
  star.style.top = `${item.y}%`;
  star.style.color = item.color;
  star.style.animationDelay = item.delay;
  star.style.transform = `translate(-50%, -50%) rotate(45deg) scale(${item.scale})`;

  const dot = document.createElement("i");
  star.appendChild(dot);

  sparkleField.appendChild(star);
});
