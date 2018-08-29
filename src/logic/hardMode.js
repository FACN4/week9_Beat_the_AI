const minimax = (board, player) => {
  const huPlayer = "X";
  const aiPlayer = "O";
  // Change all empty positions on board to the array index
  const reBoard = board.map((item, index) => {
    if (!item) {
      return index;
    }
  });
  // Filter out spots which are filled
  let remMoves = reBoard.filter( item => item !== huPlayer && item !== aiPlayer)
  // Check if a player has won or if the game is over
  if (winning(reBoard, huPlayer)) {
    return {
      score: -10
    };
  } else if (winning(reBoard, aiPlayer)) {
    return {
      score: 10
    };
  } else if (remMoves.length === 0) {
    return {
      score: 0
    };
  }
//   //Define moves to be collected
//   var moves = [];
//   //Loop through all remaining spaces
//   for (let i = 0; i < remMoves.length; i++) {
//     let move = {};
//     // Store the move with an index property of the space used
//     // move { index: 0, score:10}
//     move.index = remMoves[i];
//     // Update the board to include that move
//     reBoard[remMoves[i]] = player;
//
//     if (player === aiPlayer) {
//       // Recursively run until somebody wins or draw
//       let g = minimax(reBoard, huPlayer);
//       // Store the score in move
//       move.score = g.score;
//     } else {
//       let g = minimax(reBoard, aiPlayer);
//       move.score = g.score;
//     }
//     // Undo the board update
//     reBoard[remMoves[i]] = move.index;
//     // Add move to the moves array
//     moves.push(move);
//   }
//
//   var bestMove;
//   if (player === aiPlayer) {
//     let bestScore = -10000;
//     for (var i = 0; i < moves.length; i++) {
//       if (moves[i].score > bestScore) {
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   } else {
//     let bestScore = 10000;
//     for (let i = 0; i < moves.length; i++) {
//       if (moves[i].score < bestScore) {
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   }
//   return moves[bestMove];
// }
//
//
// const winning = (board, player) => {
//   if (
//     (board[0] == player && board[1] == player && board[2] == player) ||
//     (board[3] == player && board[4] == player && board[5] == player) ||
//     (board[6] == player && board[7] == player && board[8] == player) ||
//     (board[0] == player && board[3] == player && board[6] == player) ||
//     (board[1] == player && board[4] == player && board[7] == player) ||
//     (board[2] == player && board[5] == player && board[8] == player) ||
//     (board[0] == player && board[4] == player && board[8] == player) ||
//     (board[2] == player && board[4] == player && board[6] == player)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
