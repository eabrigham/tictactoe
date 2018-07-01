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

const updateMove = function (data) {
  console.log('running api request to update move')
  return $.ajax({
    url: config.apiUrl + '/games/:' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  updateMove
}
