// For now, I am hard-coding these sample values for the game.
// eventually, they will come from the API?
const currCells = ['', '', 'o', 'o', 'x', 'x', 'x', 'o', '']
const currPlayer = 'x'

function Game (cells, currentPlayer) {
  this.cells = cells
  this.currentPlayer = currentPlayer
}

const currGame = new Game(currCells, currPlayer)

module.exports = {
  currGame
}
