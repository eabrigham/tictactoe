const user = require('./user.js')


const testArray1D = ['', '', 'o', 'o', 'x', 'x', 'x', 'o', '']


const makeBoard = function () {
  user.boardToHTML(testArray1D)
}

module.exports = {
  makeBoard
}
