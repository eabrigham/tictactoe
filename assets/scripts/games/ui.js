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

const newPlayer = function (mark) {
  $('#game-message').text(`It is now player ${mark}'s turn`)
}

const onCreateSuccess = function (data) {
  store.game = {}
  store.game.id = data.game.id
  $('#game-board').empty()
}

const onCreateFailure = function (error) {
  $('#game-message').text('The server cannot be reached.')
}

const onUpdateSuccess = function (data, domElement, mark, won) {
  const textNode = document.createTextNode(mark)
  domElement.replaceChild(textNode, domElement.firstChild)
  if (won) {
    $('#game-message').text(`Player ${mark} won!`)
  } else if (data.game.over) {
    $('#game-message').text(`It's a tie!`)
  }
}

const onDisplayGames = function (data) {
  $('#game-message').text(`${data.games.length} games have been completed on this account`)
}

const onAjaxFailure = function (error) {
  $('#game-message').text('The server cannot be reached.')
}

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed,
  newPlayer,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onDisplayGames,
  onAjaxFailure
}
