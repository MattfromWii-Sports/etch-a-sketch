const contain = document.querySelector('.square-container');

canvasDimensions(16);

function canvasDimensions(squares) {
    for (let i=0; i<squares**2; i++) {
        const temp = document.createElement('div');
        temp.classList.add('square');
        let whMeasure = 400 / squares;
        temp.style.width = `${whMeasure}px`
        temp.style.height = `${whMeasure}px`
        contain.appendChild(temp);
    }
}