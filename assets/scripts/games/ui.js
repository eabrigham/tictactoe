const store = require('./../store.js')

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

const onCreateSuccess = function (data) {
  store.id = data.game.id
  $('#game-board').empty()
}

const onCreateFailure = function (error) {
  $('#game-message').text('The server cannot be reached. Please try again later.')
  console.log(`Create board API call failed: ${error}`)
}

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed,
  winner,
  onCreateSuccess,
  onCreateFailure
}
