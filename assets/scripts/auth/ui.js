'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  document.getElementById('sign-up').reset()
  $('#game-message').text('Signed up successfully')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (err) {
  document.getElementById('sign-up').reset()
  $('#game-message').text('Error on sign up.')
  console.log('signUpFailure ran. Data is :', err)
}

const signInSuccess = function (data) {
  document.getElementById('sign-in').reset()
  $('#game-message').text('Signed in successfully')
  $('#sign-up, #sign-in').css('visibility', 'hidden')
  $('#sign-out, #change-password, #new-game, #display-games').css('visibility', 'visible')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (err) {
  document.getElementById('sign-in').reset()
  $('#game-message').text('Error on sign in.')
  console.log('signInFailure ran. Error is :', err)
}

const changePasswordSuccess = function (data) {
  document.getElementById('change-password').reset()
  $('#game-message').text('Changed password successfully')
  console.log('changePasswordSuccess ran and nothing was returned')
}

const changePasswordFailure = function (err) {
  document.getElementById('change-password').reset()
  $('#game-message').text('Error on change password.')
  console.log('changePasswordFailure ran. Error is :', err)
}

const signOutSuccess = function (data) {
  document.getElementById('sign-out').reset()
  $('#game-message').text('Signed out successfully')
  $('#sign-up, #sign-in').css('visibility', 'visible')
  $('#sign-out, #change-password, #new-game, #display-games').css('visibility', 'hidden')
  $('#game-board').empty()
  console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function (err) {
  document.getElementById('sign-out').reset()
  $('#game-message').text('Error on sign out.')
  console.log('signOutFailure ran. Error is :', err)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
