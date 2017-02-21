import React from 'react'
import Cell from './Cell.jsx;

var GridRow = function(props) { 
  var board = this.props.board;

  var cell = (index) => (
      <Cell 
        id={index} 
        player={this.props.player} 
        playSquare={this.takeTurn.bind(this)} 
        gameWon={this.props.won}
        contents={board[index]}/>
  )

  var row = (rowNum) => (
      <tr>
        {cell(rowNum)}
        {cell(rowNum + 1)}
        {cell(rowNum + 2)}
      </tr>
  )


}