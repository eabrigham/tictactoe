// search the board for three in a row of a given mark
const search = function (board, mark) {

}

// A function to turn a 9-element array into a 3X3 2D testArray
const arrayTo2D = function (array) {
  const arrayBoard = []
  const boardWidth = 3
  for (let row = 0; row < boardWidth; row++) {
    const arrayRow = []
    for (let col = 0; col < boardWidth; col++) {
      arrayRow[col] = array[ row * boardWidth + col ]
    }
    arrayBoard.push(arrayRow)
  }
  return arrayBoard
}

// Creates an HTML table in the DOM based on a JS array.
// Attaches a click listener to each table element.
const boardToHTML = function (array) {
  const boardDiv = document.getElementById('game-board')
  const table = document.createElement('table')
  for (let row = 0; row < array.length; row++) {
    const tableRow = document.createElement('tr')
    for (let col = 0; col < array[row].length; col++) {
      const tableData = document.createElement('td')
      const textNode = document.createTextNode(array[row][col])
      $(tableData).click(onSquareClick)
      tableData.appendChild(textNode)
      tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
  }
  boardDiv.appendChild(table)
}

// function which runs when an element of the tic tac toe board array
// is clicked
const onSquareClick = function () {
  console.log('clicked')
  this.firstChild.textContent = 'a'
}

const testArray1D = ["o","a","o","x","o","x","o","x","o"]

const makeBoard = function () {
  boardToHTML(arrayTo2D(testArray1D))
}

module.exports = {
  makeBoard
}
