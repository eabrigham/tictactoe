const store = require('./../store.js')
const setup = require('./setup.js')
const gameObj = require('./gameObj.js')

const wipeMessage = function () {
  $('#game-message').text('')
}

const gameAlreadyOver = function () {
  $('#game-message').text('The game is already over. Press New Game to play again.')
}

const alreadyPlayed = function () {
  $('#game-message').text('That square has already been played in')
}

const winner = function (winnerMark) {
  $('#game-message').text(`Player ${winnerMark} won!`)
}

const onCreateGameSuccess = function (data) {
  store.id = data.game.id
  console.log(data)
  // $('#game-board').empty()
  // const blankBoard = ['', '', '', '', '', '', '', '', '']
  // const currGame = new gameObj.Game(blankBoard)
  // setup.boardToHTML(currGame)
}

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed,
  winner,
  onCreateGameSuccess
}
