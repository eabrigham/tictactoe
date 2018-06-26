const setup = require('./setup.js')

const game = {
  cells: ['', '', 'o', 'o', 'x', 'x', 'x', 'o', ''],
  currentPlayer: 'x'
}

// const Game = function (cells, currentPlayer) {
//   this.cells = cells
//   this.currentPlayer = currentPlayer
// }

// Callback function when an element of the tic tac toe board array is clicked
// TODO: this will need to initiate updating the JS array
// (part of a game object...?) and searching for a winner
// TODO: put in events.js
const onSquareClick = function (event) {
  console.log('running on square click')
  console.log(event)
  // gameArr[event.target.id] = 'X'
  // 1. Get the place where the user clicked (may need to add id to each element in boardToHTML)
  const id = this.id
  console.log(`The id of the table data is ${id}`)
  // 2. Update the game HTML
  const textNode = this.firstChild
  if (textNode.textContent === '') {
    console.log(`The space is unplayed and is being marked with ${game.currentPlayer}`)
    textNode.textContent = game.currentPlayer
    // for now, updating test array with mark
    // TODO in future update game array
    game.cells[id] = game.currentPlayer
  } else {
    console.log('The space has already been played')
  }
  // 3. Update the JS game array (in Game?)
  //      - check for winner
  checkWinner(game.cells, game.currentPlayer)
}

// Takes a nine-value 1-D array and checks for three in a row
const checkWinner = function (array, mark) {
  // check the possible crosses for three in a row
  if (threeInARow(array, mark, 0, 1, 2) || threeInARow(array, mark, 3, 4, 5) ||
    threeInARow(array, mark, 6, 7, 8) || threeInARow(array, mark, 0, 4, 8) ||
    threeInARow(array, mark, 2, 4, 6)) {
    console.log('We have a winner!')
  }
}
const threeInARow = function (array, mark, id1, id2, id3) {
  if (array[id1] !== mark) {
    return false
  } else if (array[id2] !== mark) {
    return false
  } else if (array[id3] !== mark) {
    return false
  } else { return true }
}

const makeBoard = function () {
  setup.boardToHTML(game.cells)
}



module.exports = {
  makeBoard,
  onSquareClick
}
