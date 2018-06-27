const setup = require('./setup.js')
const gameObj = require('./gameObj.js')

const currCells = ['', '', '', '', '', '', '', '', '']
const currPlayer = 'x'

const currGame = new gameObj.Game(currCells, currPlayer)



const makeBoard = function () {
  setup.boardToHTML(currGame)
}

module.exports = {
  makeBoard
}
