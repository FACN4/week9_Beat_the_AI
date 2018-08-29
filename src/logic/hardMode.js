import {winning} from './winning'

export const minimax = (board, player,constHumSymbol) => {
  // Set symbols to be imported
  const humanSymbol = constHumSymbol;
  const aiSymbol = humanSymbol === "X"? "O":'X';

  // Change all empty positions on board to the array index
  const reBoard = board.map((item, index) => {
    if (!item) {
      return index;
    } else {
      return item;
    }
  });
  // Filter out spots which are filled
  let remMoves = reBoard.filter( item => item !== humanSymbol && item !== aiSymbol)
  // Check if a player has won or if the game is over if so return the function with an object including a score
  // winning is a function that returns true is somebody has won and false if nobody has won yet
  if (winning(reBoard, humanSymbol)) {
    return {
      score: -10
    };
  } else if (winning(reBoard, aiSymbol)) {
    return {
      score: 10
    };
  } else if (remMoves.length === 0) {
    return {
      score: 0
    };
  }
  //Define moves to be collected
  var moves = [];
  //Loop through all remaining spaces
  for (let i = 0; i < remMoves.length; i++) {
    let move = {};
    // Store the move with an index property of the space used
    //  e.g. move = { index: 0, score:10}
    move.index = remMoves[i];
    // Update the board to include that move
    reBoard[remMoves[i]] = player;

    if (player === aiSymbol) {
      // Recursively run until somebody wins or draw
      let g = minimax(reBoard, humanSymbol, constHumSymbol);
      // Store the score in move
      move.score = g.score;
    } else {
      let g = minimax(reBoard, aiSymbol, constHumSymbol);
      move.score = g.score;
    }
    // Undo the board update
    reBoard[remMoves[i]] = move.index;
    // Add move to the moves array
    moves.push(move);
  }
//
  var bestMove;
  if (player === aiSymbol) {
    let bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
};
