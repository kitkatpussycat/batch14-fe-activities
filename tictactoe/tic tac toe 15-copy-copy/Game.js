const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

let movements = []
let movement = []
let numberClicked = -1;
let maxNumberClicked = -1;

document.querySelector(`.gameContainer`).addEventListener(`click`, function(){
    
    let boxes = document.querySelectorAll('.square')
    let firstLayer = []
    let secondLayer = []
    let thirdLayer = []
        firstLayer.push(boxes[0].innerHTML);firstLayer.push(boxes[1].innerHTML);firstLayer.push(boxes[2].innerHTML);
        secondLayer.push(boxes[3].innerHTML);secondLayer.push(boxes[4].innerHTML);secondLayer.push(boxes[5].innerHTML);    
        thirdLayer.push(boxes[6].innerHTML);thirdLayer.push(boxes[7].innerHTML);thirdLayer.push(boxes[8].innerHTML);    
    movement = [[...firstLayer], [...secondLayer], [...thirdLayer]]
    movements.push(movement)
    console.table(movement)
    console.log(movements)
    numberClicked++;
    maxNumberClicked++;
    console.log("number of click: ", numberClicked);
    console.log("max click: ", maxNumberClicked);
    console.log(movement.length);
})

prevButton.classList.add('hide');
nextButton.classList.add('hide');


const updateBoardfromArray = (movement, rows) => {
    for (let i=0; i<movement.length; i++){
        var boxes = rows[i].querySelectorAll('.square')
        for (let j=0; j<movement[i].length; j++){
            console.log(boxes[j]);
            boxes[j].innerHTML = movement[i][j];
        }
    }
}

prevButton.addEventListener('click',() => {
    //debugger;
    let rows = document.querySelectorAll(`.squareRow`)
    numberClicked = numberClicked-1;
    //debugger;
    updateBoardfromArray(movements[numberClicked], rows);
   // debugger;
    console.log(numberClicked);
    nextButton.disabled = false;
    if(numberClicked < 1){
        prevButton.disabled = true;
    }
})

nextButton.addEventListener('click',() => {
    //debugger;
    let rows = document.querySelectorAll(`.squareRow`)
    numberClicked = numberClicked+1;
    //debugger;
    updateBoardfromArray(movements[numberClicked], rows);
    //debugger;
    console.log(numberClicked);
    if (numberClicked === maxNumberClicked){
        nextButton.disabled = true;
    }
})