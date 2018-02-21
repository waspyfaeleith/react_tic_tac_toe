import React from 'react'
import Cell from './Cell.jsx'

const GridRow = props => {

  const playSquare = function(cell) {
    props.playSquare(cell)
  }

  const board = props.board;

  const cell = (index) => (
    <Cell
      id={index}
      player={props.player}
      playSquare={playSquare}
      gameWon={props.gameWon}
      contents={board[index]}/>
  )

  return(
    <tr>
      {cell(props.firstCell)}
      {cell(props.firstCell + 1)}
      {cell(props.firstCell + 2)}
    </tr>
  )
}

export default GridRow;
