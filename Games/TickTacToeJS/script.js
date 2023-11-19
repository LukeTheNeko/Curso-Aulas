var currentPlayer = "X";
var gameActive = true;
var xScore = 0;
var oScore = 0;
var draws = 0;

var gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(row, col) {
  if (!gameActive || gameBoard[row][col] !== "") {
    return;
  }

  gameBoard[row][col] = currentPlayer;
  var cell = document.getElementsByClassName("cell")[row * 3 + col];
  cell.innerText = currentPlayer;
  cell.classList.add(currentPlayer);

  if (checkWin()) {
    endGame();
    updateScore(currentPlayer);
  } else if (checkDraw()) {
    endGame();
    updateScore("draw");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === currentPlayer &&
      gameBoard[i][1] === currentPlayer &&
      gameBoard[i][2] === currentPlayer
    ) {
      return true;
    }
  }

  // Check columns
  for (var j = 0; j < 3; j++) {
    if (
      gameBoard[0][j] === currentPlayer &&
      gameBoard[1][j] === currentPlayer &&
      gameBoard[2][j] === currentPlayer
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    gameBoard[0][0] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][2] === currentPlayer
  ) {
    return true;
  }
  if (
    gameBoard[0][2] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function endGame() {
  gameActive = false;
}

function updateScore(winner) {
  if (winner === "X") {
    xScore++;
    document.getElementById("xScore").innerText = xScore;
  } else if (winner === "O") {
    oScore++;
    document.getElementById("oScore").innerText = oScore;
  } else {
    draws++;
    document.getElementById("draws").innerText = draws;
  }
}

function resetGame() {
  gameActive = true;
  currentPlayer = "X";
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].classList.remove("X");
    cells[i].classList.remove("O");
  }
}

function resetScore() {
  xScore = 0;
  oScore = 0;
  draws = 0;
  document.getElementById("xScore").innerText = xScore;
  document.getElementById("oScore").innerText = oScore;
  document.getElementById("draws").innerText = draws;
}

function endGame() {
  gameActive = false;
  
  if (checkWin()) {
    if (currentPlayer === "X") {
      alert("O jogador X venceu!");
    } else {
      alert("O jogador O venceu!");
    }
  } else {
    alert("O jogo empatou!");
  }
}
