
// Create an HTML table based on an array.
// This should automatically update the board based on the JS...
// not clear yet how to get user input
const boardToHTML = function (array) {
  const boardDiv = document.getElementById('game-board')
  const table = document.createElement('table')
  for (let row = 0; row < array.length; row++) {
    const tableRow = document.createElement('tr')
    for (let col = 0; col < array[row].length; col++) {
      const tableData = document.createElement('td')
      const textNode = document.createTextNode(array[row][col])
      tableData.appendChild(textNode)
      tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
  }
  boardDiv.appendChild(table)
}

const testArray = [
  ['x', 'o', 'x'],
  ['', '', ''],
  ['', '', '']
]

const makeBoard = function () {
  boardToHTML(testArray)
}

module.exports = {
  makeBoard
}
