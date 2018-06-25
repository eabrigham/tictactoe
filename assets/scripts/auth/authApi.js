const config = require('../config.js')
// sign up a new user using API
const signUp = function (data) {
  console.log('running signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST'
  })
}

module.exports = {
  signUp
}
