const heartsContainer = document.getElementById("hearts");
const moreHeartsButton = document.getElementById("moreHearts");

const heartSymbols = ["❤", "♥", "💕", "💗", "💖", "💓"];
const colors = ["#ff2f67", "#ff5b94", "#ff91bd", "#ffffff", "#ff3e7d"];

function createHeart(extra = false) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";

  const size = Math.random() * 30 + 14;
  const duration = Math.random() * 5 + 7;
  const left = Math.random() * 100;
  const drift = (Math.random() * 220 - 110).toFixed(0) + "px";
  const rotate = (Math.random() * 50 - 25).toFixed(0) + "deg";

  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.setProperty("--drift", drift);
  heart.style.setProperty("--rotate", rotate);
  heart.style.animationDuration = `${extra ? duration * 0.75 : duration}s`;

  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

// Start with a full screen of hearts.
for (let i = 0; i < 32; i++) {
  setTimeout(() => createHeart(), Math.random() * 5000);
}

// Continuously create new hearts.
setInterval(() => createHeart(), 380);

// Button creates a small burst.
moreHeartsButton.addEventListener("click", () => {
  for (let i = 0; i < 18; i++) {
    setTimeout(() => createHeart(true), i * 55);
  }
});
