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

// Create an HTML table based on an array.
// This should automatically update the board based on the JS...
// not clear yet how to get user input
// TODO: attach an event listener to the node before I
// append it to the table row
// use text node? Or table data?
const boardToHTML = function (array) {
  const boardDiv = document.getElementById('game-board')
  const table = document.createElement('table')
  for (let row = 0; row < array.length; row++) {
    const tableRow = document.createElement('tr')
    for (let col = 0; col < array[row].length; col++) {
      const tableData = document.createElement('td')
      const textNode = document.createTextNode(array[row][col])
      $(tableData).click(function () {
        console.log('clicked')
        this.firstChild.textContent = 'a'
      })
      tableData.appendChild(textNode)
      tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
  }
  boardDiv.appendChild(table)
}

const testArray1D = ["o","a","o","x","o","x","o","x","o"]

const makeBoard = function () {
  boardToHTML(arrayTo2D(testArray1D))
}

module.exports = {
  makeBoard
}
