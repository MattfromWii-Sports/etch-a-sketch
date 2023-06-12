let allSquares;
const contain = document.querySelector('.square-container');
const resetBtn = document.getElementById('reset');

canvasDimensions(16);

allSquares.forEach(sqr => sqr.addEventListener('mouseover', colorChange));
resetBtn.addEventListener('click', resetCanvas);

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

function colorChange() {
    this.style.backgroundColor = 'black';
}

function resetCanvas() {
    for (let i=0; i<allSquares.length; i++) {
        allSquares[i].style.backgroundColor = 'white';
    }
}