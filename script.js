const box=document.getElementById("heart");
const count=140;
const w=270,h=235;

function point(t){
  const x=16*Math.sin(t)**3;
  const y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);
  return {x:x/32*w,y:-y/32*h};
}

for(let i=0;i<count;i++){
  const t=2*Math.PI*i/count;
  const p=point(t);
  const el=document.createElement("span");
  el.className="heart";
  el.textContent="I love you";
  el.style.left=`calc(50% + ${p.x}px)`;
  el.style.top=`calc(50% + ${p.y}px)`;
  el.style.transform="translate(-50%,-50%)";
  el.style.animationDelay=`${(i%20)*.07}s`;
  box.appendChild(el);
}
