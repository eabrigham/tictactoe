// For now, I am hard-coding these sample values for the game.
// eventually, they will come from the API?

function Game (cells, currentPlayer) {
  this.cells = cells
  this.currentPlayer = currentPlayer
}

module.exports = {
  Game
}
