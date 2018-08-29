import {minimax} from './hardMode';

const reBoard = (board) => {
  return board.map((item, index) => {
    if (!item) {
      return index;
    } else {
      return item;
    }
  });
}
const filterUsedSpaces = (board) => {
  return board.filter( item => item !== "X" && item !== "O");
}

export const aiTurn = (board,gameMode, humanSymbol) => {
  const aiSymbol = humanSymbol === "X"? "O": "X";
  if (gameMode === "easy"){
    const reboard = reBoard(board);
    const filteredBoard = filterUsedSpaces(reboard);
    const randomIndex = Math.floor(Math.random() * filteredBoard.length);
    return filteredBoard[randomIndex];
  } else if (gameMode === "hard"){
    console.log('hard mode starting');
    //hard mode function
    const move = minimax(board,aiSymbol,humanSymbol)
    return move.index;
  }

}
