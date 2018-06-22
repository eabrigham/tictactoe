// TODO: make this DRYer
let row0 = [null, null, null]
let row1 = [null, null, null]
let row2 = [null, null, null]

let board = [row0, row1, row2]

const marks = ['x', 'o']

// make a Player object which has a name and a mark
// later will be connected to data on the server thru the API
const Player = function (userName, mark) {
  this.userName = userName
  this.mark = mark
}

Player.prototype.makeMove = function (rowIdx, valIdx) {
  let location = board[rowIdx][valIdx]
  if (location !== null) {
    console.log ('That place on the board has already been played.')
  } else {
    location = this.mark
  }
}
