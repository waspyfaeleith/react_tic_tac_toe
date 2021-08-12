import React from 'react'
import Cell from './Cell.jsx'

const GridRow = ({player, gameWon, firstCell, board, playSquare}) => {

  const selectSquare = (cell) => {
    playSquare(cell)
  }

  //const board = board;

  const cell = (index) => (
    <Cell
      id={index}
      player={player}
      playSquare={selectSquare}
      gameWon={gameWon}
      contents={board[index]}/>
  )

  return(
    <tr>
      {cell(firstCell)}
      {cell(firstCell + 1)}
      {cell(firstCell + 2)}
    </tr>
  )
}

export default GridRow;
