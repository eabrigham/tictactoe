const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  console.log('running createGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame
}
