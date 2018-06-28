const wipeMessage = function () {
  $('#game-message').empty()
}

const gameAlreadyOver = function () {
  $('#game-message').text('The game is already over. Press New Game to play again.')
}

const alreadyPlayed = function () {
  $('#game-message').text('That square has already been played in')
}

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed
}
