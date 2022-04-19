const square = document.createElement('div');
const resetButton = document.getElementById('resetButton');
let numSquares = 25;
let numSquaresSelected;
let colorOptionSelected;
let colorSubmitValue;
let randColor;

const colorOptions = document.getElementById('colorOptions');
const colorPicker = document.getElementById('colorPicker');
const colorSubmit = document.getElementById('colorSubmit');
const numberSquares = document.getElementById('numberSquares');

const blackColorSelector = document.querySelector('input[type=checkbox]');
blackColorSelector.addEventListener('change', () => {
    if (blackColorSelector.checked) {
        colorOptions.classList.add('show');
      
      
        console.log("Checkbox is checked..");
    } else {
        colorOptions.classList.remove('show');
      console.log("Checkbox is not checked..");
    }
  });







colorOptions.addEventListener('submit', () => {
    colorOptionSelected = document.querySelector('input[name="color"]:checked').value;
    if(colorOptionSelected == 'pickOne'){
        //colorPicker.classList.toggle('show');
        //colorOptions.style.display = 'none';
        getNewColor();
        resetSketch(numSquares);
        console.log(colorSubmitValue);
    } else if (colorOptionSelected =='randomColor'){
        randColor = `rgb(${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)})`;
        resetSketch(numSquares);
        generateHoverEffect(squaresArray,randColor);
        console.log(randColor); 
    } else {
        resetSketch(numSquares);
    }   

});




function handleForm(event) { event.preventDefault(); }
colorOptions.addEventListener('submit', handleForm);
colorPicker.addEventListener('submit', handleForm);
numberSquares.addEventListener('submit', handleForm);

colorPicker.addEventListener('submit', getNewColor);

function getNewColor(){
    colorSubmitValue = document.getElementById('selectedColor').value;
    resetSketch(numSquares);
    generateHoverEffect(squaresArray,colorSubmitValue);
    colorPicker.classList.toggle('show');
}

numberSquares.addEventListener('submit', () => {
    numSquaresSelected = document.getElementById('numberOfSquares').value;
    if (numSquaresSelected){
        numSquares = numSquaresSelected;
    } 
        resetButtonHandle(numSquares);
        numberSquares.classList.remove('show');
});












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

generateHoverEffect(squaresArray);

function generateHoverEffect(squaresArray,color){
    if (color === undefined){
        squaresArray.forEach(square => square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)},${Math.floor(Math.random()*255 +1)})`;
        }));
    } else {
        squaresArray.forEach(square => square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
    }))}
}
    


function resetSketch(numSquares){
    squaresArray.forEach(square => {
        container.removeChild(square);
        square.classList.remove('square');
    });
        generateSquares(numSquares);
        createdSquares = document.querySelectorAll('.square');
        squaresArray = [...createdSquares];
        generateHoverEffect(squaresArray);
}


resetButton.addEventListener('click', resetButtonHandle)
function resetButtonHandle(){
        squaresArray.forEach(square => {
            square.classList.remove('square-hovered');
            container.removeChild(square);
            square.classList.remove('square');
        });
        numberSquares.classList.add('show');
        //numSquares = +prompt('Please define the number of squares');
        generateSquares(numSquares);
        createdSquares = document.querySelectorAll('.square');
        squaresArray = [...createdSquares];
        generateHoverEffect(squaresArray);
        return numSquares;
    };






