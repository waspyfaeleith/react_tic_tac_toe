import React from 'react';
import Board from '../components/Board.jsx'
import GameStatus from '../components/GameStatus.jsx'
import NewGame from '../components/NewGame.jsx'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { winner: "", player: "X", turns: 0, won: false };
  }

  reset() {
    this.setState({ winner: "", player: "X",  turns: 0, won: false });
  }

  setWinner() {
    this.setState({ winner: this.state.player, won: true });
  }

  switchPlayer() {
    console.log("switching player from " + this.state.player);
    if (this.state.player == "X") {
      this.setState({ player: "O", turns: this.state.turns + 1 });
    } else {
      this.setState({ player: "X", turns: this.state.turns + 1 });
    }
  }

  render() {
    return (
      <div>
        <Board player={this.state.player} changePlayer={this.switchPlayer.bind(this)} endGame={this.setWinner.bind(this)}
          won={this.state.won} turns={this.state.turns}/>
        <GameStatus winner={this.state.winner} currentPlayer={this.state.player} won={this.state.won} turns={this.state.turns}/>
        <NewGame won={this.state.won} startNewGame={this.reset.bind(this)}/>
      </div>
      )
  }
}

export default Game;