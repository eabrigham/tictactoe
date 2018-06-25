const config = require('../config.js')
// sign up a new user using API
const signUp = function () {
  console.log('running signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: '{ "credentials": { "email": "e2@e", "password": "123", "password_confirmation": "123" }}'
  })
}

module.exports = {
  signUp
}
