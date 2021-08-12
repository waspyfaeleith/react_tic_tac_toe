import React from 'react'

const GameStatus = ({winner, turns, won, currentPlayer }) => {
  let currentState;

  if (winner !== "") {
    currentState = winner + " wins!";
  } else if (!won && turns === 9) {
    currentState = "It's a tie";
  } else {
    currentState = currentPlayer + " to go.";
  }
  return(
    <div>
      <h2>{currentState}</h2>
    </div>
  )
}

export default GameStatus;
