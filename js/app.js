// Create an html template and copy over css starter from course supplement page.

// Create html elements: h1, h2, 42divs, and reset button.

// Create a grid in css for chips to be shown in. Similar to tic tac toe, but expanded to a 6row and 7 column grid.
    // grid-column: repeat (7, )

// State variables in JS.
    //let winner, playerTurn, boardArray

// Add cached elements References.
    //div ALL squares  
        //this will be used to determine winner
    //h2 message 
        // init () message will say click a square to put first chip
        // message will then tell whose players turn it is 

// Add event listeners for button clicks for replay button and  handleClick events.
    // Replay -- on click return game state to init () state
    // handleClick -- target evt.target.id (div squares)

// write stated functions (handleclick and init)
    //dont write inside fuctions yet

// console.log everything so far to make sure it's working.

// Add initial state function and add necessary variables. 
    // board array [null, null, etc]
    // winner = null
    // reset button = hidden
    //render()
    //player turn = -1 (player 1)

// console.log

// Add render function
  // iterate over the boardarray and change the html div text to show which squares are who's
  // State of game :
      // Winner, tie(unlikely), and whose turn

//console.log to make sure game renders all necessary squares

// write handleClick function
    //change square index to show whose clicked square (1 or -1)
    //remove the hidden attribute of the replay button
    // determine whose turn it is 
        //player 1 or -1
    //check for winner with a winning function
    //render() at the end of the handleClick function

// Define winning combinations.
  // there are a lot of winning combos
    //explore winning combos using a objects array to save time
    //or hard code (not advised) this will be very time consuming



// Possibly use another js file and import this info.
// Add a winner function to determine if someone has won.
// If there is a winner,  style with confetti.
// Confetti colors to mimic winners colors.
// Add sound effects to column clicks and winner clicks. 
// Add a favicon of something cool.
// Add dark mode with optional neon lit chips, buttons, and game board.
// Optional - implement a function that will allow a powerup ability.
// 1x powerup chance per person. 
// Swap colors of a single chip if successful.
// Success will be determined with a Math.floor(Math.random().
// Optional -  implement an animation that will show the chips fall from the top once the players click the column they want.
