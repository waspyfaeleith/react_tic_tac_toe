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
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table id="ticTacToeGrid">
          <tbody>
            <tr>
              <td><Cell id={0} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={board[0]}/>
              </td>
              <td><Cell id={1} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={board[1]}/>
              </td>
              <td><Cell id={2} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[2]}/>
              </td>
            </tr>
            <tr>
              <td><Cell id={3} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[3]}/>
              </td>
              <td><Cell id={4} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[4]}/>
              </td>
              <td><Cell id={5} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[5]}/></td>
            </tr>
            <tr>
              <td><Cell id={6} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[6]}/>
              </td>
              <td><Cell id={7} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[7]}/>
              </td>
              <td><Cell id={8} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={board[8]}/>
              </td>
            </tr>                  
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;