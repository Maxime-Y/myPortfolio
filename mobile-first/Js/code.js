const btn = document.querySelector('#btn');
const c1 = document.querySelector('#c1')
btn.addEventListener('mouseover',()=>{
     c1.style.display = 'block';
   if (btn.style.display = 'none'){}})

var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
letters = letters.split('');

var fontSize = 10, 
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 50);
function canvasFun(){
    var canvas = document.getElementById('c1'); 
    if (canvas.getContext){    
      var ctx = canvas.getContext('2d'); 
      ctx.font = "20pt Calibri,Geneva,Arial";
      ctx.strokeStyle = "rgb(0,0,0)";
      ctx.fillStyle = "rgb(0,20,180)";
      ctx.strokeText("welcome to my portfolio", 10, 20);
      ctx.fillText("Autre exemple", 10, 60);
    }  
  }
  window.onload=canvasFun;
