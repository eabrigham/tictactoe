const checkWinnerFile = require('./checkWinner')
const checkWinner = checkWinnerFile.checkWinner

const testArray1D = ['', '', 'o', 'o', 'x', 'x', 'x', 'o', '']

// Temporarily assigning the mark to x:
let mark = 'x'

// Callback function when an element of the tic tac toe board array is clicked
// TODO: this will need to initiate updating the JS array
// (part of a game object...?) and searching for a winner
// TODO: put in events.js
const onSquareClick = function (event) {
  console.log(event)
  // gameArr[event.target.id] = 'X'

  // 1. Get the place where the user clicked (may need to add id to each element in boardToHTML)
  const id = this.id
  console.log(`The id of the table data is ${id}`)
  // 2. Update the game HTML
  const textNode = this.firstChild
  if (textNode.textContent === '') {
    console.log(`The space is unplayed and is being marked with ${mark}`)
    textNode.textContent = mark
    // for now, updating test array with mark
    // TODO in future update game array
    testArray1D[id] = mark
  } else {
    console.log('The space has already been played')
  }
  // 3. Update the JS game array (in Game?)
  //      - check for winner
  checkWinner(testArray1D, mark)
}

module.exports = {
  onSquareClick
}
