let allSquares;
let colorMode = 'black';
let hslWheel = 0;
const contain = document.querySelector('.square-container');
const resizeBtn = document.getElementById('resize');
const resetBtn = document.getElementById('reset');
const rainbowBtn = document.getElementById('rainbow-color');
const blackBtn = document.getElementById('black-color');
const eraserBtn = document.getElementById('eraser');

resizeBtn.addEventListener('mousedown', resizeCanvas);
resetBtn.addEventListener('mousedown', resetCanvas);
rainbowBtn.addEventListener('mousedown', function() {
    blackBtn.style.backgroundColor = 'white';
    eraserBtn.style.backgroundColor = 'white';
    colorMode = 'rainbow'
    rainbowBtn.style.backgroundColor = 'yellow';
});
blackBtn.addEventListener('mousedown', function() {
    rainbowBtn.style.backgroundColor = 'white';
    eraserBtn.style.backgroundColor = 'white';
    colorMode = 'black'
    blackBtn.style.backgroundColor = 'yellow';
});
eraserBtn.addEventListener('mousedown', function() {
    rainbowBtn.style.backgroundColor = 'white';
    blackBtn.style.backgroundColor = 'white';
    colorMode = 'white'
    eraserBtn.style.backgroundColor = 'yellow';
});

function canvasDimensions(squares) {
    while (contain.firstChild) {contain.removeChild(contain.lastChild)};
    for (let i=0; i<squares**2; i++) {
        const temp = document.createElement('div');
        temp.classList.add('square');
        let whMeasure = 100 / squares;
        temp.style.width = `${whMeasure}%`
        temp.style.height = `${whMeasure}%`
        contain.appendChild(temp);
    }
    allSquares = document.querySelectorAll('.square');
    colorMode = 'black';
    blackBtn.style.backgroundColor = 'yellow';
    allSquares.forEach(sqr => sqr.addEventListener('mouseover', differentColors));
}

function resizeCanvas() {
    resizeBtn.style.backgroundColor = 'yellow';
    rainbowBtn.style.backgroundColor = 'white';
    blackBtn.style.backgroundColor = 'white';
    eraserBtn.style.backgroundColor = 'white';
    setTimeout(promptCheck, 100)
}

function promptCheck() {
    let userPrompt = parseInt(prompt('Choose Your Dimensions!'));
    if (isNaN(userPrompt) == true) {
        alert('Please input a Number');
        promptCheck();
    } else if (userPrompt <= 0) {
        alert('Please input A Number greater then 0');
        promptCheck();
    } else if (userPrompt > 64) {
        alert('Please input A Number less then or equal to 64');
        promptCheck();
    }
    canvasDimensions(userPrompt);
    resizeBtn.style.backgroundColor = 'white';
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
    } else if (colorMode == 'white') {
        this.style.backgroundColor = 'white';
    }
}

canvasDimensions(16);