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

module.exports = {
  wipeMessage,
  gameAlreadyOver,
  alreadyPlayed,
  winner
}
