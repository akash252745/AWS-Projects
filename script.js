const heart = document.getElementById("heart");
const words = [];

// Number of "I love you" words travelling around the heart.
const WORD_COUNT = 32;

// Heart size inside the container.
const HEART_WIDTH = 245;
const HEART_HEIGHT = 205;

// Speed: larger number = faster clockwise movement.
const SPEED = 0.00032;

// Standard mathematical heart.
// As t increases from 0 -> 2PI, the path moves:
// TOP -> RIGHT -> BOTTOM -> LEFT -> TOP,
// which is clockwise on the screen.
function heartPoint(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  return {
    x: (x / 32) * HEART_WIDTH,
    y: (-y / 32) * HEART_HEIGHT
  };
}

// Create words at equal distances around the heart.
for (let i = 0; i < WORD_COUNT; i++) {
  const word = document.createElement("span");
  word.className = "love-word";

  if (i === 0) word.classList.add("lead");

  word.textContent = "I love you";
  heart.appendChild(word);

  words.push({
    element: word,
    offset: (Math.PI * 2 * i) / WORD_COUNT
  });
}

let startTime = performance.now();

function animate(now) {
  const elapsed = now - startTime;

  words.forEach((item, index) => {
    // Increasing t moves clockwise around the heart.
    const t = (item.offset + elapsed * SPEED) % (Math.PI * 2);
    const point = heartPoint(t);

    item.element.style.left = `calc(50% + ${point.x}px)`;
    item.element.style.top = `calc(50% + ${point.y}px)`;

    // Keep the first moving word visually highlighted.
    item.element.classList.toggle("lead", index === 0);
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
