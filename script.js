let gameCells = document.querySelectorAll(".cell");
let player1 = document.querySelectorAll(".player1");
let player2 = document.querySelectorAll(".player2");
let restartBtn = document.querySelectorAll(".restartBtn");

//Making variables

let currentPlayer = "x";
let nextPlayer = "0";
let playerTurn = currentPlayer;

// function to start a game
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handlClick);
  });
};

const handlClick = (e)=>{
  if (e.target.textContent === "") {
    e.target.textContent = playerTurn;
    if(checkwin()){
        alert(`${playerTurn} is a winnner`);
        disableCells();
    }
    else if (checkTie()){
      alert("It's a Tie!!");
      disableCells();
    }
      changePlayerTurn();
    
    
  }
}

// Function to Change Player Turn
const changePlayerTurn = () => {
  if (playerTurn === currentPlayer) {
      playerTurn = nextPlayer;
  } else {
      playerTurn = currentPlayer;
  }
};

//function to check win
const checkwin = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i=0; i<winningConditions.length; i++){
    const  [pos1, pos2 ,pos3] = winningConditions[i];
    if(gameCells[pos1].textContent  !==  "" && 
        gameCells[pos1].textContent  === gameCells[pos2].textContent &&
        gameCells[pos2].textContent  === gameCells[pos3].textContent ){
            return true;
        }
  }
  return false ;
};

// function to check for tie 

const checkTie =()=>{
   let emptycellsCount = 0;
   gameCells.forEach(cell =>{
      if(cell.textContent === ''){
        emptycellsCount ++;
      }
   });

   return  emptycellsCount === 0 && !checkwin();
}


//function to disable cells 
const disableCells =()=>{
       gameCells.forEach (cell =>{
        cell.removeEventListener('click', handlClick);
        cell.classList.add('disabled');
       });
}

const restartGame= () =>{
  gameCells.forEach(cell =>{
     cell.textContent = '';
     cell.classList.remove('disabled');
  });
  startGame();

}





// calling start game function 
startGame();
