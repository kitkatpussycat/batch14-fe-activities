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
const refresh = document.querySelector("#refresh");
const wrapper = document.getElementsByClassName("wrapper");

console.log(squares);

gameContainer.setAttribute("style", "pointer-events: none;");

xButton.addEventListener("click",() => {
     window.playerOneTurn = true;
    window.playerTwoTurn = false;
    xButton.style.backgroundColor = "pink";
    //oButton.style.pointerEvents = "none";
    xButton.style.pointerEvents = "none"
    oButton.disabled = true;
    turn.innerText ="X turn First";

    gameContainer.setAttribute("style", "pointer-events: auto;");
});


oButton.addEventListener("click",() => {
    window.playerOneTurn = false;
    window.playerTwoTurn = true;
    oButton.style.backgroundColor = "azure";
    //xButton.style.pointerEvents = "none";
    oButton.style.pointerEvents = "none";
    xButton.disabled = true;
    turn.innerText = "O turn First";

    gameContainer.setAttribute("style", "pointer-events: auto;");
});

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


refresh.addEventListener("click", () => {
    location.reload();
})


Array.from(squares).forEach((square, index) => {
    square.addEventListener("click", () =>{
      

        //turn
        if (playerOneTurn == true){
            turn.innerText = "O's Turn";
            if (square.getAttribute("style") === "background-color: azure;"){
                return;
            }
            square.style.backgroundColor ="pink";
            square.innerText = "X"
            squareMatrix[index].user = "playerOne"
            boardState[index] = "X";
           
        }else if (playerTwoTurn == true){
            turn.innerText = "X's Turn";
            if (square.getAttribute("style") == "background-color: pink;"){
                return;
            }
            square.style.backgroundColor ="azure";
            square.innerText = "O";
            squareMatrix[index].user = "playerTwo"
            boardState[index] ="O"
           
        }

       // if (square.innerText === "X"){
         //   square.setAttribute("style", "pointer-events: none")}

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
               
            }
            if (square.user == "playerTwo"){
                oArray.push(square.index);
               
            }  
        });

        console.log("xArray:", xArray);
        console.log("oArray:", oArray);
       

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
            //winner.innerHTML = "Winner Status: X is the winner";
            turn.innerText = "X Wins!";
            turn.style.color = "brown";
            
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
            //winner.innerText = "Winner Status: O is the Winner";
            turn.innerText = "O Wins!";
            turn.style.color="brown";
            
            
            gameComplete = true;
        }
        else if (
            (numberClicked >= 7) && firstRow.every((current) =>current !=='') && secondRow.every((current) => current !=='') && thirdRow.every((current) => current !=='') /*&&
            firstColumn.every((current) => current !=='') && secondColumn.every((current)=> current !=='') && thirdColumn.every((current)=> current !=='')*/
            
        ){
            console.log("TIE is the winner")
           // winner.innerText = "Winner Status: DRAW";
           turn.innerText = "Draw!"
            gameComplete = true;}

        if (gameComplete){
            gameCompleteMessage.innerHTML = "Game Over!";  

            gameContainer.setAttribute("style", "pointer-events: none;");
            prevButton.classList.remove('hide');
            nextButton.classList.remove('hide');
            nextButton.disabled= true;
            xButton.disabled = true;
            oButton.disabled = true;
            turn.style.fontSize = "50px";
        

            gameComplete = false;

        }

    });
});


