const heartsContainer=document.getElementById("hearts");
const bellButton=document.getElementById("bellButton");
const bellArea=document.querySelector(".bell-area");
const messageCard=document.getElementById("messageCard");
const closeButton=document.getElementById("closeButton");
const heartSymbols=["❤","♥","💕","💗","💖","💓"];
const colors=["#ff2f67","#ff5b94","#ff91bd","#ffffff","#ff3e7d"];

function createHeart(extra=false){
  const heart=document.createElement("span");
  heart.className="floating-heart";
  const size=Math.random()*30+14;
  const duration=Math.random()*5+7;
  heart.style.left=`${Math.random()*100}%`;
  heart.style.fontSize=`${size}px`;
  heart.style.color=colors[Math.floor(Math.random()*colors.length)];
  heart.style.setProperty("--drift",`${(Math.random()*220-110).toFixed(0)}px`);
  heart.style.setProperty("--rotate",`${(Math.random()*50-25).toFixed(0)}deg`);
  heart.style.animationDuration=`${extra?duration*.75:duration}s`;
  heart.textContent=heartSymbols[Math.floor(Math.random()*heartSymbols.length)];
  heartsContainer.appendChild(heart);
  heart.addEventListener("animationend",()=>heart.remove(),{once:true});
}
for(let i=0;i<28;i++) setTimeout(createHeart,Math.random()*4500);
setInterval(()=>createHeart(),420);

function heartBurst(){for(let i=0;i<25;i++)setTimeout(()=>createHeart(true),i*45)}

bellButton.addEventListener("click",()=>{
  heartBurst();
  setTimeout(()=>{
    bellArea.style.display="none";
    messageCard.classList.remove("hidden");
  },500);
});

closeButton.addEventListener("click",()=>{
  messageCard.classList.add("hidden");
  bellArea.style.display="";
});
