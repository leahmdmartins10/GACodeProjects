// this is a game of Tic Tac Toe

class Player{
    constructor(playerName, theirCharacter, theirTurn){
        this.playerName = playerName;
        this.theirCharacter = theirCharacter;
        this.theirTurn = theirTurn;
    }
    placePiece(row, column){
        console.log(this.playerName, " placed their piece in: ", row, " ", column);
    }
}

let palyerOneName = prompt("Player 1 name: ");
