// script.js

const balloonButton = document.getElementById('balloon-button');
const balloonsContainer = document.querySelector('.balloons');

balloonButton.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.innerText = '🎈';
        balloon.style.left = `${Math.random() * 100}%`;
        balloonsContainer.appendChild(balloon);
    }
});
