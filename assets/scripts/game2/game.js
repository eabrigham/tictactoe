const setup = require('./setup.js')
const gameObj = require('./gameObj.js')

const makeBoard = function () {
  setup.boardToHTML(gameObj.currGame.cells)
}

module.exports = {
  makeBoard
}
