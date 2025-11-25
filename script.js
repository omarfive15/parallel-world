console.log("Parallel World Loaded Successfully!");
const enterButton = document.getElementById('enterWorld');
const background = document.querySelector('.background');
if(enterButton){enterButton.addEventListener('click',()=>{background.style.filter='brightness(0.5) hue-rotate(120deg)'; enterButton.innerText="Welcome to the Parallel World!";});}
const characterImages = document.querySelectorAll('.character-card img');
characterImages.forEach(img=>{img.addEventListener('mouseenter',()=>{const audio=new Audio('assets/effect.mp3'); audio.play();});});