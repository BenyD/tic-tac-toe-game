// Create a Tic Tac Toe game object
const TicTacToe = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  gameOver: false,

  // Function to handle a player's move
  makeMove: function (position) {
    if (this.board[position] === "" && !this.gameOver) {
      this.board[position] = this.currentPlayer;
      this.checkWin(this.currentPlayer);
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
  },

  // Function to check for a winning condition
  checkWin: function (player) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        this.board[a] === player &&
        this.board[b] === player &&
        this.board[c] === player
      ) {
        this.gameOver = true;
        console.log(`Player ${player} wins!`);
        return;
      }
    }

    // Check for a tie
    if (!this.board.includes("")) {
      this.gameOver = true;
      console.log("It's a tie!");
    }
  },
};

// Example usage
TicTacToe.makeMove(0); // X makes a move at position 0
TicTacToe.makeMove(4); // O makes a move at position 4
TicTacToe.makeMove(1); // X makes a move at position 1
TicTacToe.makeMove(3); // O makes a move at position 3
TicTacToe.makeMove(2); // X makes a move at position 2 (winning move)
