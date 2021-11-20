const squares = document.getElementsByClassName("square");
const gameCompleteMessage = document.getElementById("gameStatus");
const restart = document.getElementById("restart");
const playerOneCounterText = document.getElementById("playerOneCounter");
const playerTwoCounterText = document.getElementById("playerTwoCounter");
const turn = document.getElementById("turn");
const gameContainer = document.getElementById("game");
const winner = document.getElementById("winnerDiv");
const xButton = document.querySelector("#xButton");
const oButton = document.querySelector("#oButton");
const refresh = document.querySelector(".refresh");
const playAgain = document.getElementById("playAgain");
const wrapper = document.getElementsByClassName("wrapper");
const firstButton = document.querySelector("#firstButton");
const firstOverlay = document.getElementById("firstOverlay");
const mainOverlay = document.getElementById("mainOverlay");
const mainMain = document.getElementById("mainMain");
const op = document.getElementById('op');
const lastOverlay = document.getElementById("lastOverlay");
const checkHistory = document.getElementById("checkHistory");
const thirdOverlay = document.getElementById("thirdOverlay");
const lastOverlayContainer = document.getElementById("lastOverlayContainer");
const firstOverlayContainer = document.getElementById("firstOverlayContainer");

//  console.log(squares);

 mainMain.classList.add("hide");
 //thirdOverlay.classList.add("hide");
 firstButton.disabled = true;

 gameContainer.setAttribute("style", "pointer-events: none;");

 xButton.addEventListener("click",() => {
     firstButton.disabled = false;
      window.playerOneTurn = true;
     window.playerTwoTurn = false;
     xButton.style.backgroundColor = "pink";
     //oButton.style.pointerEvents = "none";
     //xButton.style.pointerEvents = "none"
     //oButton.disabled = true;
     oButton.style.backgroundColor= "white";
     turn.innerText ="X turn First";

     gameContainer.setAttribute("style", "pointer-events: auto;");
 });


oButton.addEventListener("click",() => {
    firstButton.disabled = false;
    window.playerOneTurn = false;
    window.playerTwoTurn = true;
    oButton.style.backgroundColor = "#729AF3";
    //xButton.style.pointerEvents = "none";
    //oButton.style.pointerEvents = "none";
   // xButton.disabled = true;
    xButton.style.backgroundColor = "white";
    turn.innerText = "O turn First";

    gameContainer.setAttribute("style", "pointer-events: auto;");
});

firstButton.addEventListener("click", ()=>{
    mainMain.classList.remove('hide');
    firstOverlayContainer.classList.add('hide');
})


console.log(squares);

let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
console.log(boardState);

let squareMatrix = [
    {index: 0, user: null},
    {index: 1, user: null},
    {index: 2, user: null},
    {index: 3, user: null},
    {index: 4, user: null},
    {index: 5, user: null},
    {index: 6, user: null},
    {index: 7, user: null},
    {index: 8, user: null},
];

let gameComplete = false;
let isDraw = true;
let playerOneCounter = 0;
let playerTwoCounter = 0;

playAgain.addEventListener("click", () => {
   // console.log("click restart");
    Array.from(squares).forEach((square, index) => {
        square.style.backgroundColor = "transparent";
        square.innerText = "";
        square.style.pointerEvents = "auto";
        numberClicked = 0;
        maxNumberClicked = 0;
        movements = [[]];
        prevButton.classList.add('hide');
        nextButton.classList.add('hide');
        isDraw = true;
        
    });

    gameCompleteMessage.innerHTML = "";
    gameContainer.setAttribute("style", "pointer-events: auto;");

    squareMatrix = [
        {index: 0, user: null},
        {index: 1, user: null},
        {index: 2, user: null},
        {index: 3, user: null},
        {index: 4, user: null},
        {index: 5, user: null},
        {index: 6, user: null},
        {index: 7, user: null},
        {index: 8, user: null},
    ];

    boardState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    console.log(boardState);
    
})

refresh.addEventListener("click", () => {
    location.reload();
})


Array.from(squares).forEach((square, index) => {
    square.addEventListener("click", () =>{
       // console.log("clicked");

        //turn
        if (playerOneTurn == true){
            turn.innerText = "O's Turn";
           // if (square.getAttribute("style") === "background-color: azure;"){
             //   return;
            //}
            square.style.pointerEvents = "none";
            square.style.backgroundColor ="transparent";
            square.innerText = "X"
            square.style.color = "red";
            squareMatrix[index].user = "playerOne"
            boardState[index] = "X";
        }else if (playerTwoTurn == true){
            turn.innerText = "X's Turn";
            //if (square.getAttribute("style") == "background-color: pink;"){
              //  return;
            //}
            square.style.pointerEvents = "none";
            square.style.backgroundColor ="transparent";
            square.innerText = "O";
            square.style.color = "green";
            squareMatrix[index].user = "playerTwo"
            boardState[index] ="O"
        }

        //change Turns
        playerOneTurn = !playerOneTurn;
        playerTwoTurn = !playerTwoTurn;
        console.table("squareMatrix:", squareMatrix);

        let xArray = [];
        let oArray = [];

        //winning combos
        const firstRow = [0, 1, 2];
        const secondRow = [3, 4, 5];
        const thirdRow = [6, 7, 8];
        const firstColumn = [0, 3, 6];
        const secondColumn = [1, 4, 7];
        const thirdColumn = [2, 5, 8];
        const leftDiagonal = [0, 4, 8];
        const rightDiagonal = [2, 4, 6];

        squareMatrix.forEach((square) =>{
            if (square.user == "playerOne"){
                xArray.push(square.index);
               // boardState.push(square.index);
            }
            if (square.user == "playerTwo"){
                oArray.push(square.index);
               // boardState.push(square.index);
            }  
        });

        console.log("xArray:", xArray);
        console.log("oArray:", oArray);
        console.log(boardState);

        if (
            firstRow.every((current) => xArray.includes(current)) ||
            secondRow.every((current) => xArray.includes(current)) ||
            thirdRow.every((current) => xArray.includes(current)) ||
            firstColumn.every((current) => xArray.includes(current)) ||
            secondColumn.every((current) => xArray.includes(current)) ||
            thirdColumn.every((current) => xArray.includes(current)) ||
            leftDiagonal.every((current) => xArray.includes(current)) ||
            rightDiagonal.every((current) => xArray.includes(current))
        ){
            console.log("X is the winner")
            winner.innerHTML = "X wins!";
            isDraw = false;
            playerOneCounter++;
            gameComplete = true;
        }
        if (
            firstRow.every((current) => oArray.includes(current)) ||
            secondRow.every((current) => oArray.includes(current)) ||
            thirdRow.every((current) => oArray.includes(current)) ||
            firstColumn.every((current) => oArray.includes(current)) ||
            secondColumn.every((current) => oArray.includes(current)) ||
            thirdColumn.every((current) => oArray.includes(current)) ||
            leftDiagonal.every((current) => oArray.includes(current)) ||
            rightDiagonal.every((current) => oArray.includes(current))
        ){
            console.log("O is the winner")
            winner.innerText = "O Wins!";
            isDraw = false;
            playerTwoCounter++;
            gameComplete = true;
        }
        if (
            (numberClicked >=8) && (isDraw ===true)
            
        ){
            console.log("TIE is the winner")
            winner.innerText = "Draw!";
            gameComplete = true;}

        if (gameComplete){
            gameCompleteMessage.innerHTML = "Game Over";
            prevButton.classList.remove('hide');
            nextButton.classList.remove('hide');
            playerOneCounterText.innerHTML = playerOneCounter;
            playerTwoCounterText.innerHTML = playerTwoCounter;
            //numberClicked = -1;
            nextButton.disabled = true;
            prevButton.disabled = false;

            gameContainer.setAttribute("style", "pointer-events: none;");

            gameComplete = false;

        }

    });
});
