const contain = document.querySelector('.square-container');

//Starting dimensions
for (let i=0; i<16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    contain.appendChild(row);
    for (let i=0; i<16; i++) {
        const temp = document.createElement('div');
        temp.classList.add('square');
        let whMeasure = 400 / 16;
        temp.style.width = `${whMeasure}px`
        temp.style.height = `${whMeasure}px`
        row.appendChild(temp);
    }
}