let allSquares;
let colorMode = 'black';
let hslWheel = 0;
const contain = document.querySelector('.square-container');
const resetBtn = document.getElementById('reset-b');
const rainbowBtn = document.getElementById('rainbow-color');
const blackBtn = document.getElementById('black-color');

canvasDimensions(16);
blackBtn.style.backgroundColor = 'yellow';

allSquares.forEach(sqr => sqr.addEventListener('mouseover', differentColors));
resetBtn.addEventListener('mousedown', resetCanvas);
rainbowBtn.addEventListener('mousedown', function() {
    rainbowBtn.style.backgroundColor = 'yellow';
    colorMode = 'rainbow'
    blackBtn.style.backgroundColor = 'white';
});
blackBtn.addEventListener('mousedown', function() {
    rainbowBtn.style.backgroundColor = 'white';
    colorMode = 'black'
    blackBtn.style.backgroundColor = 'yellow';
});

function canvasDimensions(squares) {
    for (let i=0; i<squares**2; i++) {
        const temp = document.createElement('div');
        temp.classList.add('square');
        let whMeasure = 100 / squares;
        temp.style.width = `${whMeasure}%`
        temp.style.height = `${whMeasure}%`
        contain.appendChild(temp);
    }
    allSquares = document.querySelectorAll('.square');
}

function resetCanvas() {
    hslWheel = 0;
    for (let i=0; i<allSquares.length; i++) {
        allSquares[i].style.backgroundColor = 'white';
    }
    resetBtn.style.backgroundColor = 'yellow';
    resetBtn.addEventListener('mouseup', function() {
        resetBtn.style.backgroundColor = 'white';
    });
}

function differentColors() {
    if (colorMode == 'black') {
        this.style.backgroundColor = 'black';
    } else if (colorMode == 'rainbow') {
        this.style.backgroundColor = `hsl(${hslWheel} 100% 50%)`;
        hslWheel += 15;
        if (hslWheel > 360) {hslWheel = 0}
    }
}