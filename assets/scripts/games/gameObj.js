// For now, I am hard-coding these sample values for the game.
// eventually, they will come from the API?

const gameFxns = require('./gameFxns.js')
const ui = require('./ui.js')
const api = require('./api.js')

const marks = ['x', 'o']

function Game (cells) {
  this.cells = cells
  this.turns = 0
  this.over = false
  this.currPlayerMark = marks[0]
}

// Function which has the current player move at the given html DOM element
// and check for a winner
Game.prototype.move = function (domElement) {
  ui.wipeMessage()
  if (this.over === true) {
    ui.gameAlreadyOver()
    console.log('The game is over')
    return false
  }
  const index = domElement.id
  if (this.cells[index] !== '') {
    console.error('This spot has already been played in')
    ui.alreadyPlayed()
    return false
  }
  // update array locally
  this.cells[index] = this.currPlayerMark
  // check for winner
  this.over = gameFxns.checkWinner(this.cells, this.currPlayerMark)

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
  // TODO remove console log
  console.log(JSON.stringify(apiData))

  console.log(`The current player mark is ${this.currPlayerMark} inside gameObj.js`)

  api.updateMove(JSON.stringify(apiData))
    .then((data) => {
      ui.onUpdateSuccess(data, domElement, this.currPlayerMark)
    })
    .then(
      // TODO: change the player
      // but see below for 'this'
    )
    .catch((error) => console.error(error))

  console.log(`Is the game over? ${this.over}`)
  // Change the Player:
  this.turns++
  this.currPlayerMark = marks[this.turns % 2]
  return true
}

module.exports = {
  Game
}
