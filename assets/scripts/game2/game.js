const setup = require('./setup.js')
const gameObj = require('./gameObj.js')


const newGame = function (event) {
  event.preventDefault()

  const blankBoard = ['', '', '', '', '', '', '', '', '']
  const currGame = new gameObj.Game(blankBoard)
  setup.boardToHTML(currGame)
}

module.exports = {
  newGame
}
