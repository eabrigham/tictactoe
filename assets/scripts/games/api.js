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

const updateMove = function (data) {
  console.log('running api request to update move')
  
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    // contentType: 'application/json',
    headers: {
      "Content-type": 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getCompletedGames = function() {
  console.log('running api request to get games')
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      "Content-type": 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateMove,
  getCompletedGames
}
