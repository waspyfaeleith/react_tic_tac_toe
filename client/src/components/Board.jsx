import React from 'react'
import Cell from './Cell.jsx'
import Row from './GridRow.jsx'

const Board = ({ board, player, endGame, changePlayer, won, update, switchPlayer }) => {

  const checkRowsForWinner = () => {
    if (((board[0] !== "") && (board[0] === board[1]) &&
         (board[0] === board[2])) ||
        ((board[3] !== "") &&(board[3] === board[4]) &&
         (board[3] === board[5])) ||
        ((board[6] !== "") &&(board[6] === board[7]) &&
         (board[6] === board[8]))
      ) {
      return true
    }
    return false
  }

  const checkColumnsForWinner = () => {
    if (((board[0] !== "") && (board[0] === board[3]) &&
         (board[0] === board[6])) ||
        ((board[1] !== "") &&(board[1] === board[4]) &&
         (board[1] === board[7])) ||
        ((board[5] !== "") &&(board[2] === board[5]) &&
         (board[2] === board[8]))
      ) {
      return true;
    }
    return false;
  }

  const checkDiagonalsForWinner = () => {
    if ((board[4] !== "") && (((board[0] === board[4]) && (board[0] === board[8])) ||
        ((board[2] === board[4]) && (board[2] === board[6])))) {
        return true;
    }
    return false;
  }

  const checkForWinner = () => {
    if (
      (checkColumnsForWinner() === true) ||
      (checkRowsForWinner() === true) ||
      (checkDiagonalsForWinner() === true)
      ) {
        endGame();
      } else {
        changePlayer();
      }
  }

  const takeTurn = (square) => {
    update(square);
    checkForWinner();
  }

  const row = (firstCell) => (
      <Row
        firstCell={firstCell}
        player={player}
        playSquare={takeTurn}
        gameWon={won}
        board={board}
      />
  )

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table id="ticTacToeGrid">
        <tbody>
          {row(0)}
          {row(3)}
          {row(6)}
        </tbody>
      </table>
    </div>
  )
}

export default Board;
