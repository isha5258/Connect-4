/**-------------------- constants ---------------------*/
const winningCombos = [
  //Horizontal winning combos (Example: -- )
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
  //Vertical winning combos (Example: | )
  [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
  [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
  [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
  [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
  [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
  [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
  [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
  //Diagnal winning combos (Example: \ ) 
  [14, 22, 30, 38],
  [7, 15, 23, 31], [15, 23, 31, 39],
  [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
  [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
  [2, 10, 18, 26], [10, 18, 26, 34],
  [3, 11, 19, 27],
  //Diagnal winning combos (Example: / ) 
  [3, 9, 15, 21],
  [4, 10, 16, 22], [10, 16, 22, 28],
  [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
  [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
  [13, 19, 25, 31], [19, 25, 31, 37],
  [20, 26, 32, 38]
]

/**------------------ Variables (state) -------------- */
let winner, playerTurn, boardArray, player_1, player_2


/**-------------- Cached Element References ---------- */
let squares = document.querySelectorAll('.squares')
let messageEl = document.querySelector('#message')
let replay = document.querySelector('#replay-button')
let board = document.querySelector('.board')
popover = new bootstrap.Popover(document.querySelector('#info-Btn'), {
  container: 'body'
})

/**------------------- Event Listeners --------------- */
replay.addEventListener('click', init)

board.addEventListener('click', handleClick)

/**---------------------- Functions ------------------ */
init()

function init() {
  messageEl.textContent = 'Click a Square to Start'
  boardArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  winner = null
  playerTurn = 1
  replay.setAttribute('hidden', true)
  messageEl.className = ""
  render()
}

function render() {
  let squareColor
  boardArray.forEach((square, idx) => {
    if (square === 1) {
      squareColor = '#AC0011'
      squares[idx].style.opacity = 1
    } else if (square === -1) {
      squareColor = '#0073BF'
      squares[idx].style.opacity = 1
    } else if (square === null) {
      squareColor = 'white'
      squares[idx].style.opacity = .2
    }
    squares[idx].style.backgroundColor = squareColor
  })
  // State of game:
  if (!winner) {
    messageEl.textContent = `${playerTurn === 1 ? " Red's" : " Blue's"} turn`
    messageEl.style.textShadow = `${playerTurn === 1 || playerTurn === -1 ?  '0 0 10px black, 0 0 15px black, 0 0 20px black, 0px 0px 30px black, 0 0 40px' : ''}`
    messageEl.style.color = `${playerTurn === 1 ? "#CC2727" : "#0073BF"}`
  } else if (winner === "T") {
    messageEl.textContent = "Tie! Let's try again!"
    messageEl.style.color = '#667D83'
    messageEl.style.textShadow = `${playerTurn === 1 || playerTurn === -1 ?  '10px 0 10px black, 20px 0 20px black, 30pxpx 0px 30px black' : ''}`
  } else {
    messageEl.textContent = `Congratulations, ${winner === 1 ? 'Red' : 'Blue'} Wins!!`
    messageEl.style.color = `${winner === 1 ? '#CC2727' : '#0073BF'}`
    confetti.start(1500)
    messageEl.className = `${winner === 1 || winner === -1 ? 'animate__heartBeat' : ''}`
    const tadaAudio = new Audio(`../Sounds/tada.mp3`)
    tadaAudio.volume = .1
    tadaAudio.play()
  }
}

function handleClick(evt) {
  if (evt.target === board) {
    return 
  } 
  let id = parseInt(evt.target.id.replace('sq', ''))
  if (boardArray[id] === -1 || boardArray[id] === 1) {
    return
  } else if (winner !== null) {
    return
  } else {
    if (boardArray[id] === null) {
      chipPosition(id)
    }
  }
  replay.removeAttribute('hidden')
  playerTurn *= -1
  winner = getWinner()
  render()
}

function chipPosition(id) {
  if (boardArray[id + 35] === null) {
    boardArray[id + 35] = playerTurn
    return 
  } else if (boardArray[id + 28] === null) {
    boardArray[id + 28] = playerTurn
    boardArray[id] = null
    return
  } else if (boardArray[id + 21] === null) {
    boardArray[id + 21] = playerTurn
    boardArray[id] = null
    return
  } else if (boardArray[id + 14] === null) {
    boardArray[id + 14] = playerTurn
    boardArray[id] = null
    return
  } else if (boardArray[id + 7] === null) {
    boardArray[id + 7] = playerTurn
    boardArray[id] = null
    return
  } else {
    boardArray[id] = playerTurn
    return
  }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(boardArray[winningCombos[i][0]] + boardArray[winningCombos[i][1]] + boardArray[winningCombos[i][2]] + boardArray[winningCombos[i][3]]) === 4) {
      return boardArray[winningCombos[i][0]]
    }
  }
  if (boardArray.includes(null)) {
    return null
  } else {
    return 'T'
  }
}

