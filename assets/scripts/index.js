'use strict'

const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#new-game').on('submit', gamesEvents.newGame)
  $('#display-games').submit(gamesEvents.displayGames)
})
