// Takes a nine-value 1-D array and checks for three in a row
const checkWinner = function (array, mark) {
  // check the possible crosses for three in a row
  if (threeInARow(array, mark, 0, 1, 2) || threeInARow(array, mark, 3, 4, 5) ||
    threeInARow(array, mark, 6, 7, 8) ||
    // up & down
    threeInARow(array, mark, 0, 3, 6) || threeInARow(array, mark, 1, 4, 7) ||
    threeInARow(array, mark, 2, 5, 8) ||
    // diagonals
    threeInARow(array, mark, 0, 4, 8) || threeInARow(array, mark, 2, 4, 6)) {
    console.log('We have a winner!')
    return true
  }
  return false
}
// Checks whether three cells at given indices of an array have the given mark
const threeInARow = function (array, mark, id1, id2, id3) {
  if (array[id1] !== mark) {
    return false
  } else if (array[id2] !== mark) {
    return false
  } else if (array[id3] !== mark) {
    return false
  } else { return true }
}

// a function which counts element in an array which are not empty strings
const countPlayedCells = function (array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== '') {
      count++
    }
  }
  return count
}

module.exports = {
  checkWinner,
  countPlayedCells
}
