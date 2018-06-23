'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // const testArray = [
  //   ['x', 'o', 'x'],
  //   ['', '', ''],
  //   ['', '', '']
  // ]

  // const boardToHTML = require('./game.js').boardToHTML()
  // boardToHTML(testArray)

  const board = document.getElementById('game-board')
  board.textContent = 'testing'

  // document.getElementById('testing').textContent = 'testing'

})
