function getRandomColor(){return'#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');}const rows=50,cols=50;const gridEl=document.getElementById('grid');for(let i=0;i<rows*cols;i++){const pixel=document.createElement('div');pixel.className='pixel';gridEl.appendChild(pixel);}const pixelEls=document.querySelectorAll('.pixel');let index=0;const interval=setInterval(function(){if(index>=pixelEls.length){clearInterval(interval);return;}pixelEls[index].style.backgroundColor=getRandomColor();index++;},1);