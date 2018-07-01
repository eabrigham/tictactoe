const setup = require('./setup.js')
const gameObj = require('./gameObj.js')
const ui = require('./ui.js')
const api = require('./api.js')


const newGame = function (event) {
  event.preventDefault()
  ui.wipeMessage()
  api.createGame()
    .then(function (data) {
      ui.onCreateSuccess(data)
      const blankBoard = ['', '', '', '', '', '', '', '', '']
      const currGame = new gameObj.Game(blankBoard)
      setup.boardToHTML(currGame)
    })
    .catch(ui.onCreateFailure)


}

module.exports = {
  newGame
}
