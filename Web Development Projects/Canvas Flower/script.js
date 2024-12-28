const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//Draw a unique flower-like shape
const centerX=100;
const centerY=100;
const radius=60;

ctx.fillStyle = "#ff6f61" ;
for(let i=0; i<8; i++){
  ctx.beginPath();
  const angle = (Math.PI / 4) * i;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fill();
}
//Draw center circle
ctx.beginPath();
ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#ffd700";
ctx.fill();