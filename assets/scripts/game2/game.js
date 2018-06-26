const setup = require('./setup.js')

const testArray1D = ['', '', 'o', 'o', 'x', 'x', 'x', 'o', '']

const makeBoard = function () {
  setup.boardToHTML(testArray1D)
}

module.exports = {
  makeBoard
}
