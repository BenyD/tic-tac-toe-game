// Define TicTacToe object
const TicTacToe = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  gameOver: false,
  players: {
    X: {
      name: "Player X",
      symbol: "X",
    },
    O: {
      name: "Player O",
      symbol: "O",
    },
  },

  makeMove: function (position) {
    if (this.board[position] === "" && !this.gameOver) {
      this.board[position] = this.currentPlayer;
      updateBoard();
      const winPlayer = this.checkWin(this.currentPlayer);
      if (winPlayer) {
        this.gameOver = true;
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
          cell.classList.remove("win-cell");
        });
        setTimeout(() => {
          highlightWinCells(winPlayer);
          alert(`${this.players[winPlayer].name} wins!`);
        }, 500);
      } else if (!this.board.includes("")) {
        this.gameOver = true;
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
          cell.classList.add("tie-cell");
        });
        setTimeout(() => {
          alert("It's a tie!");
        }, 1000);
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    }
  },

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
        return player;
      }
    }
    return null;
  },
};

// Function to update the board display
function updateBoard() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < TicTacToe.board.length; i++) {
    cells[i].textContent = TicTacToe.board[i];
  }
}

// Function to handle a player's move
function makeMove(position) {
  TicTacToe.makeMove(position);
}

// Function to highlight the winning cells
function highlightWinCells(player) {
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
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      TicTacToe.board[a] === player &&
      TicTacToe.board[b] === player &&
      TicTacToe.board[c] === player
    ) {
      cells[a].classList.add("win-cell");
      cells[b].classList.add("win-cell");
      cells[c].classList.add("win-cell");
    }
  }
}

// Restart the game
function restartGame() {
  TicTacToe.board = ["", "", "", "", "", "", "", "", ""];
  TicTacToe.currentPlayer = "X";
  TicTacToe.gameOver = false;
  updateBoard();
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("win-cell");
    cell.classList.remove("tie-cell");
  });
}
