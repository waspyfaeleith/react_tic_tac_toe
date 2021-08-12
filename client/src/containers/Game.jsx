import React, { useState } from 'react';
import Board from '../components/Board.jsx'
import GameStatus from '../components/GameStatus.jsx'
import NewGame from '../components/NewGame.jsx'

const Game = () =>  {

  const grid = ["","","","","","","","",""];

  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState("A");
  const [turns, setTurns] = useState(0);
  const [won, setWon] = useState(false);
  const [board, setBoard] = useState(grid);
  
  const reset = () => {
    setWinner("");
    setPlayer("A");
    setTurns(0);
    setWon(false);
    setBoard(grid)
  }

  const setGameWinner = () => {
    setWinner(player);
    setWon(true);
  }

  const updateBoard = (square) => {
    let updatedGrid = board;
    updatedGrid[square] = player;
    setBoard(updatedGrid);
  }

  const switchPlayer = () =>  {
    if (player == "A") {
      setPlayer("B");
    } else {
      setPlayer("A")
    }
    setTurns(turns + 1);
  }

  return (
      <div>
        <Board
          player={player}
          changePlayer={switchPlayer}
          endGame={setGameWinner}
          won={won}
          turns={turns}
          update={updateBoard}
          board={board}
        />
        <GameStatus
          winner={winner}
          currentPlayer={player}
          won={won}
          turns={turns}/>
        <NewGame
          won={won}
          turns={turns}
          startNewGame={reset}/>
      </div>
      )
}

export default Game;
