const setup = require('./setup.js')
const gameObj = require('./gameObj.js')
const ui = require('./ui.js')
const api = require('./api.js')

const newGame = function (event) {
  event.preventDefault()
  ui.wipeMessage()
  api.createGame()
    .then(function (data) {
      console.log('Ran api create game and data is: ', data)
      ui.onCreateSuccess(data)
      const blankBoard = ['', '', '', '', '', '', '', '', '']
      const currGame = new gameObj.Game(blankBoard)
      setup.boardToHTML(currGame)
      ui.newPlayer('x')
    })
    .catch(ui.onCreateFailure)
}

const displayGames = function (event) {
  event.preventDefault()
  console.log('running display games from events')
  // TODO get this working properly and work through logic
  // of how it should work
  api.getCompletedGames()
    .then(ui.onDisplayGames)
    .catch(ui.onAjaxFailure)
}

module.exports = {
  newGame,
  displayGames
}
