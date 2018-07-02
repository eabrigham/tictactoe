const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  console.log('running createGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// hard coded data to debug api request
const updateMove = function () {
  console.log('running api request to update move')
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    // contentType: 'application/json',
    headers: {
      "Content-type": 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: '{ "game": { "cell": { "index": 0, "value": "x" },"over": false } }'
  })
}

module.exports = {
  createGame,
  updateMove
}
