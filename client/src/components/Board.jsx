import React from 'react'
import Cell from './Cell.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: this.props.board, won: false};
  }

  checkRowsForWinner() {
    var board = this.props.board;
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

  checkColumnsForWinner() {
    var board = this.props.board;
    if (((board[0] !== "") && (board[0] == board[3]) &&
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

  checkDiagonalsForWinner() {
    var board = this.props.board;
    if ((board[4] !== "") && (((board[0] === board[4]) && (board[0] === board[8])) ||
        ((board[2] === board[4]) && (board[2] === board[6])))) {
        return true;
    }
    return false;
  }

  checkForWinner() {
    if (
      (this.checkColumnsForWinner() === true) || 
      (this.checkRowsForWinner() === true) ||
      (this.checkDiagonalsForWinner() === true) 
      ) {
        this.props.endGame();
      } else {
        this.props.changePlayer();
      }
  }

  takeTurn(square) {
    this.props.update(square); 
    this.checkForWinner();
  }

  render() {
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

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table id="ticTacToeGrid">
          <tbody>
          {row(0)}
          {row(3)}
          {row(6)}
            {/*<tr>
              <Cell 
                id={0} 
                player={this.props.player} 
                playSquare={this.takeTurn.bind(this)} 
                gameWon={this.props.won}
                contents={board[0]}/>
           
              <Cell id={1} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={board[1]}/>
              
              <Cell id={2} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={board[2]}/>
            </tr>
            <tr>
              <Cell id={3} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[3]}/>
              <Cell id={4} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[4]}/>
              <Cell id={5} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[5]}/>
            </tr>
            <tr>
              <Cell id={6} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[6]}/>
              <Cell id={7} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[7]}/>
              <Cell id={8} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[8]}/>
            </tr> */}                 
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;