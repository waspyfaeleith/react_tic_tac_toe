import React from 'react'
import Cell from './Cell.jsx'

const GridRow = ({props}) => {

  playSquare(cell) {
    props.playSquare(cell)
  }

  render() {
    const board = this.props.board;

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
}

export default GridRow;
