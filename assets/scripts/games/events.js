const setup = require('./setup.js')
const gameObj = require('./gameObj.js')
const ui = require('./ui.js')

const newGame = function (event) {
  event.preventDefault()
  ui.wipeMessage()
  $('#game-board').empty()
  const blankBoard = ['', '', '', '', '', '', '', '', '']
  const currGame = new gameObj.Game(blankBoard)
  setup.boardToHTML(currGame)
}

module.exports = {
  newGame
}
