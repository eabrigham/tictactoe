
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
const boardToHTML = function (currGame) {
  const array = arrayTo2D(currGame.cells)
  const boardDiv = document.getElementById('game-board')
  const table = document.createElement('table')
  for (let row = 0; row < array.length; row++) {
    const tableRow = document.createElement('tr')
    // TODO call out to an outside function to break up code
    // use function names to make code clearer
    for (let col = 0; col < array[row].length; col++) {
      const tableData = document.createElement('td')
      tableData.className = 'data-table'
      const textNode = document.createTextNode(array[row][col])
      // the number in a 9-element list
      const listNum = 3 * row + col
      tableData.setAttribute('id', listNum)
      // TODO split out anonymous function and have it call multiple functions
      $(tableData).click(function (event) {
        currGame.move(event.target)
      })
      tableData.appendChild(textNode)
      tableRow.appendChild(tableData)
    }
    table.appendChild(tableRow)
  }
  boardDiv.appendChild(table)
}

module.exports = {
  boardToHTML
}
