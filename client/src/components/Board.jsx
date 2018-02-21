import React from 'react'
import Cell from './Cell.jsx'
import Row from './GridRow.jsx'

const Board = props => {

  const checkRowsForWinner = function () {
    const board = props.board;
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

  const checkColumnsForWinner = function () {
    const board = props.board;
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

  const checkDiagonalsForWinner = function () {
    const board = props.board;
    if ((board[4] !== "") && (((board[0] === board[4]) && (board[0] === board[8])) ||
        ((board[2] === board[4]) && (board[2] === board[6])))) {
        return true;
    }
    return false;
  }

  const checkForWinner = function () {
    if (
      (checkColumnsForWinner() === true) ||
      (checkRowsForWinner() === true) ||
      (checkDiagonalsForWinner() === true)
      ) {
        props.endGame();
      } else {
        props.changePlayer();
      }
  }

  const takeTurn = function (square) {
    props.update(square);
    checkForWinner();
  }



  const row = (firstCell) => (
      <Row
        firstCell={firstCell}
        player={props.player}
        playSquare={takeTurn}
        gameWon={props.won}
        board={props.board}
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
