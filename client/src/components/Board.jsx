import React from 'react'
import Cell from './Cell.jsx'

class Board extends React.Component {
  constructor(props) {
    super(props);
    //var grid = ["0","1","2","3","4","5","6","7","8"];
    var grid = ["","","","","","","","",""];
    this.state = { board: grid, won: false};
  }

  checkRowsForWinner() {
    var board = this.state.board;
    if (((board[0] !== "") && (board[0] === board[1]) &&
         (board[0] === board[2])) ||
        ((board[3] !== "") &&(board[3] === board[4]) &&
         (board[3] === board[5])) ||
        ((board[6] !== "") &&(board[6] === board[7]) &&
         (board[6] === board[8]))
      ) {

      console.log("winning row:", this.props.player)
      return true
    }
    return false
  }

  checkColumnsForWinner() {
    var board = this.state.board;
    if (((board[0] !== "") && (board[0] == board[3]) &&
         (board[0] === board[6])) ||
        ((board[1] !== "") &&(board[1] === board[4]) &&
         (board[1] === board[7])) ||
        ((board[5] !== "") &&(board[2] === board[5]) &&
         (board[2] === board[8]))
      ) {
      console.log("winning column:", this.props.player);
      return true;
    }
    return false;
  }

  checkDiagonalsForWinner() {
    var board = this.state.board;
    if ((board[4] !== "") && ((board[0] === board[4]) &&
        (board[0] === board[8])) ||
        ((board[2] === board[4]) &&
             (board[2] === board[6]))
        ){
        console.log("winning diagonal:", this.props.player);
        return true;
    }
    return false;
  }

  checkForWinner() {
    console.log("checking for a winner")
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

  updateGrid(player, square) {
    var updatedGrid = this.state.board;
    updatedGrid[square] = this.props.player;
    this.setState({ board: updatedGrid }, this.checkForWinner);  
  }

  takeTurn(square) {
    console.log("takeTurn:", this.props.player, square);
    this.updateGrid(this.props.player, square);   
    console.log("won:", this.state.won);
  }

  updateGame() {
    if (this.state.won === true) {
      console.log("we have a winner :-)");
      this.props.endGame();
    } else {
      console.log("switching player");
      this.props.changePlayer();
    }
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table id="ticTacToeGrid">
          <tbody>
            <tr>
              <td><Cell id={0} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={this.state.board[0]}/>
              </td>
              <td><Cell id={1} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
                contents={this.state.board[1]}/>
              </td>
              <td><Cell id={2} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[2]}/>
              </td>
            </tr>
            <tr>
              <td><Cell id={3} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[3]}/>
              </td>
              <td><Cell id={4} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[4]}/>
              </td>
              <td><Cell id={5} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[5]}/></td>
            </tr>
            <tr>
              <td><Cell id={6} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[6]}/>
              </td>
              <td><Cell id={7} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[7]}/>
              </td>
              <td><Cell id={8} player={this.props.player} playSquare={this.takeTurn.bind(this)} gameWon={this.props.won}
              contents={this.state.board[8]}/>
              </td>
            </tr>                  
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board;