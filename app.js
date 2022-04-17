const square = document.createElement('div');
const squaresArray = [];


for(let i = 0; i <= 16; i++){
    container.appendChild(square.cloneNode(true));
    square.classList.add('square');
    console.log(i);
}
