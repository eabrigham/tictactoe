
const gameFxns = require('./gameFxns.js')
const ui = require('./ui.js')
const api = require('./api.js')

const marks = ['x', 'o']

function Game (cells) {
  this.cells = cells
  this.turns = 0
  this.won = false
  this.over = false
  this.currPlayerMark = marks[0]
}

// Function which has the current player move at the given html DOM element
// and check for a winner
Game.prototype.move = function (domElement) {
  ui.wipeMessage()
  if (this.over === true) {
    ui.gameAlreadyOver()
    return false
  }
  const index = domElement.id
  if (this.cells[index] !== '') {
    ui.alreadyPlayed()
    return false
  }
  // update array locally
  this.cells[index] = this.currPlayerMark
  // check for winner
  this.won = gameFxns.checkWinner(this.cells, this.currPlayerMark)
  // the game is over if it is won or nine cells have been played in
  if (this.won || gameFxns.countPlayedCells(this.cells) === 9) {
    this.over = true
  }

  // API request goes here
  const apiData = {
    game: {
      cell: {
        index: index,
        value: this.currPlayerMark
      },
      over: this.over
    }
  }

  api.updateMove(JSON.stringify(apiData))
    .then((data) => {
      ui.onUpdateSuccess(data, domElement, this.currPlayerMark, this.won)
    })
    .then(() => {
      if (this.over === false) {
        this.changePlayer()
        ui.newPlayer(this.currPlayerMark)
      }
    })
    .catch(api.onAjaxFailure)
}

Game.prototype.changePlayer = function () {
  this.turns++
  this.currPlayerMark = marks[this.turns % 2]
}

module.exports = {
  Game
}
