import React from 'react';
import Board from '../components/Board.jsx'
import GameStatus from '../components/GameStatus.jsx'
import NewGame from '../components/NewGame.jsx'

class Game extends React.Component {
  constructor(props) {
    super(props);
    const grid = ["","","","","","","","",""];
    this.state = { winner: "", player: "X", turns: 0, won: false, board: grid };
  }

  reset() {
    const grid = ["","","","","","","","",""];
    this.setState({ winner: "", player: "X",  turns: 0, won: false, board: grid });
  }

  setWinner() {
    this.setState({ winner: this.state.player, won: true });
  }

  updateBoard(square) {
    const updatedGrid = this.state.board;
    updatedGrid[square] = this.state.player;
    this.setState({ board: updatedGrid });  
  }

  switchPlayer() {
    if (this.state.player == "X") {
      this.setState({ player: "O", turns: this.state.turns + 1 });
    } else {
      this.setState({ player: "X", turns: this.state.turns + 1 });
    }
  }

  render() {
    return (
      <div>
        <Board 
          player={this.state.player} 
          changePlayer={this.switchPlayer.bind(this)} 
          endGame={this.setWinner.bind(this)}
          won={this.state.won} 
          turns={this.state.turns} 
          update={this.updateBoard.bind(this)} 
          board={this.state.board}/>
        <GameStatus 
          winner={this.state.winner} 
          currentPlayer={this.state.player} 
          won={this.state.won} 
          turns={this.state.turns}/>
        <NewGame 
          won={this.state.won} 
          turns={this.state.turns} 
          startNewGame={this.reset.bind(this)}/>
      </div>
      )
  }
}

export default Game;