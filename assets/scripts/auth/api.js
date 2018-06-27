const config = require('../config.js')
// sign up a new user using API
const signUp = function (data) {
  console.log('running signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data
    // data: '{ "credentials": { "email": "e2@e", "password": "123", "password_confirmation": "123" }}'
  })
}

const signIn = function (data) {
  console.log('running signIn')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {

}

const changePassword = function (data) {

}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
