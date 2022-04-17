const square = document.createElement('div');
const resetButton = document.getElementById('resetButton');
let numSquares = 25;

generateSquares(numSquares);

function generateSquares(numSquares){
    for(let i = 0; i < numSquares*numSquares; i++){
        square.classList.add('square');
        square.style.width = `${600/numSquares}px`;
        square.style.height =`${600/numSquares}px`;
        container.appendChild(square.cloneNode(true));  
    }
}

let createdSquares = document.querySelectorAll('.square');
let squaresArray = [...createdSquares];

generateHoverEffect();

function generateHoverEffect(){
    squaresArray.forEach(square => square.addEventListener('mouseover', () => {
        //square.classList.add('square-hovered');
        square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)})`;
    }));
}

resetButton.addEventListener('click', () => {
    squaresArray.forEach(square => {
        square.classList.remove('square-hovered');
        container.removeChild(square);
        square.classList.remove('square');
    });
    numSquares = +prompt('Please define the number of squares');
    generateSquares(numSquares);
    createdSquares = document.querySelectorAll('.square');
    squaresArray = [...createdSquares];
    generateHoverEffect(squaresArray);
});

