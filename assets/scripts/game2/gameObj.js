// For now, I am hard-coding these sample values for the game.
// eventually, they will come from the API?

const checkWinner = require('./checkWinner.js')

function Game (cells, currPlayerMark) {
  this.cells = cells
  this.currPlayerMark = currPlayerMark
}

// Function which has the current player move at the given html DOM element and check for a winner
Game.prototype.move = function (domElement) {
  const index = domElement.id
  if (this.cells[index] !== '') {
    console.error('This spot has already been played in')
    // TODO make this a propper UI message
    return false
  }
  this.cells[index] = this.currPlayerMark

  const textNode = document.createTextNode(this.currPlayerMark)
  domElement.replaceChild(textNode, domElement.firstChild)

  // document.createTextNode(array[row][col])
  checkWinner(this.cells, this.currPlayerMark)
  return true
}

module.exports = {
  Game
}
