'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#new-game').css('visibility', 'visible')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (err) {
  $('#message').text('Error on sign up.')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Data is :', err)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#new-game').css('visibility', 'visible')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (err) {
  $('#message').text('Error on sign in.')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', err)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned')
}

const changePasswordFailure = function (err) {
  $('#message').text('Error on change password.')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', err)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function (err) {
  $('#message').text('Error on sign out.')
  $('#message').css('background-color', 'red')
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
