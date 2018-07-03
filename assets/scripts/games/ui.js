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
  store.game = {}
  store.game.id = data.game.id
  console.log('The game id is', store.game.id)
  $('#game-board').empty()
}

const onCreateFailure = function (error) {
  $('#game-message').text('The server cannot be reached.')
  console.log(`Create board API call failed: ${error}`)
}

const onUpdateSuccess = function (data, domElement, mark) {
  console.log(data)
  console.log(`The mark is ${mark} inside ui.js`)
  const textNode = document.createTextNode(mark)
  domElement.replaceChild(textNode, domElement.firstChild)
}

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed,
  winner,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess
}
