function getRandomColor(){return'#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');}const faces=document.querySelectorAll('.face');setInterval(()=>{faces.forEach(f=>{f.style.background=getRandomColor();});},1000);let angleX=0,angleY=0;function animate(){angleX+=0.5;angleY+=0.5;document.getElementById('cube').style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg)`;requestAnimationFrame(animate);}animate();