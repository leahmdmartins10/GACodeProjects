// this is a game of tictactoe

const readline = require("readline");

// Setup for reading user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Player {
  constructor(playerName, theirCharacter, theirTurn) {
    this.playerName = playerName;
    this.theirCharacter = theirCharacter;
    this.theirTurn = theirTurn;
  }
  placePiece(row, columnm, board) {
    if (board[row][column] === "-") {
      board[row][column] = this.theirCharacter;
      console.log(
        this.playerName,
        " placed their piece in: ",
        row,
        " ",
        column
      );
      return true;
    } else {
      console.log("That spot is already taken. Try again.");
      return false;
    }
  }
}

class TicTacToe {
  constructor(player1, player2) {
    this.board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.size = 3; // this is the size of the board
    this.rowCounts = {
      
    }
  }
}

// // initialization of everyting
// let board =

// let player1, player2;

// function displayBoard(board){
//   console.log("The current board looks like:\n");
//   for (let row = 0; row < 3; row++) {
//     console.log(board[row].join(" ")); // Print the board with each row on a new line
//   }
//   console.log("\n");
// }

// function startGame(){
//   rl.question("What is player one's name: ", function (playerOneName) {
//     rl.question("What is player two's name: ", function (playerTwoName) {
//       player1 = new Player(playerOneName, "X", true);
//       player2 = new Player(playerTwoName, "O", false);

//       console.log("Player 1: ", player1);
//       console.log("Player 2: ", player2);

//       displayBoard(board);
//       gamePlay(player1);
//       // Closing the input interface
//       rl.close();
//     });
//   });
// }

// function gamePlay(currentPlayer) {
//   displayBoard(board);

//   rl.question(`${currentPlayer.playerName}, enter your move as a row,column: `, function(move){
//     const [row, column] = move.split(",").map(Number);
//     currentPlayer.placePiece(row, column, board);
//   })
// }

// function winCheckLogic(board, gameOver){
//   let count = 0;
//   for(let row = 0; row < 3; row++){
//     for(let col = 0; col < 3; col++){

//     }
//   }
// }

// while (!endGame) {
//   console.log
//   gamePlay();
// }
