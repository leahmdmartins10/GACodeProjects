// this is a game of tictactoe

/* ---------------- This sets up the inputs ---------------------- */
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
  placePiece(row, column, board) {
    if (row >= 3 || row < 0 || column < 0 || column >= 3) {
      console.log("That spot is not in bounds of the board. Try again.\n");
      return false;
    }
    if (board[row][column] === "-") {
      board[row][column] = this.theirCharacter;
      console.log(
        this.playerName,
        " placed their piece in: ",
        row,
        " ",
        column
      );
      console.log("\n");
      return true;
    } else {
      console.log("That spot is already taken. Try again. \n");
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
      X: [0, 0, 0],
      O: [0, 0, 0],
    };
    this.colCounts = {
      X: [0, 0, 0],
      O: [0, 0, 0],
    };

    this.LRDiag = { X: 0, O: 0 };
    this.RLDiag = { X: 0, O: 0 };

    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1; // we'll start with player 1, they're automatically X
  }
  placePiece(row, col) {
    const player = this.currentPlayer;
    if (player.placePiece(row, col, this.board)) {
      this.updateCounters(row, col, player.theirCharacter);
      if (this.checkWin(row, col, player.theirCharacter)) {
        setTimeout(() => {
          console.log(`${player.playerName} wins!`);
          this.displayBoard();
        }, 2000); // 2000 milliseconds = 2 seconds

        rl.close();
        return true;
      }

      if (player === this.player1) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      }
    }
    return false;
  }

  updateCounters(row, col, char) {
    this.rowCounts[char][row]++;
    this.colCounts[char][col]++;
    if (row === col) {
      this.LRDiag[char]++;
    }
    if (row + col == this.size - 1) {
      this.RLDiag[char]++;
    }
  }

  checkWin(row, col, char) {
    return (
      this.rowCounts[char][row] === this.size ||
      this.colCounts[char][col] == this.size ||
      this.LRDiag[char] === this.size ||
      this.RLDiag[char] === this.size
    );
  }

  displayBoard() {
    console.log("Current board:");
    for (let row = 0; row < this.size; row++) {
      console.log(this.board[row].join(" "));
    }
    console.log("\n");
  }
}

// main gameplay

  rl.question("What is player one's name: ", function (playerOneName) {
    rl.question("What is player two's name: ", function (playerTwoName) {
      let player1 = new Player(playerOneName, "X", true);
      let player2 = new Player(playerTwoName, "O", false);

      console.log("\n");

      // this is printing all the data we just got from the user
      console.log(
        "Player 1's name is: ",
        player1.playerName,
        " and their piece is: ",
        player1.theirCharacter
      );
      console.log(
        "Player 2's name is: ",
        player2.playerName,
        " and their piece is: ",
        player2.theirCharacter
      );

      console.log("\n");

      const game = new TicTacToe(player1, player2);
      game.displayBoard();

      function gameLoop() {
        rl.question(
          `${game.currentPlayer.playerName} please enter a row and column (e.g., 1 2) that you would like to place a piece in. `,
          function (input) {
            const [row, col] = input.split(" ").map(Number);
            if (game.placePiece(row, col)) {
              return;
            }
            game.displayBoard();
            gameLoop();
          }
        );
      }
      gameLoop();
      
    });
  });

