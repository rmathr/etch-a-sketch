const square = document.createElement('div');

for(let i = 0; i < 1024; i++){
    square.classList.add('square');
    container.appendChild(square.cloneNode(true));  
}
const createdSquares = document.querySelectorAll('.square');
const squaresArray = [...createdSquares];


squaresArray.forEach(square => square.addEventListener('mouseover', () => {
    square.classList.add('square-hovered');
}));


// createdSquares.forEach(square => square.addEventListener('mouseover', () => {
//     square.classList.add('square-hovered');
// }));