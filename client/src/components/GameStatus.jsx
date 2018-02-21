import React from 'react'

const GameStatus = props => {
  let currentState;

  if (props.winner !== "") {
    currentState = props.winner + " wins!";
  } else if (!props.won && props.turns === 9) {
    currentState = "It's a tie";
  } else {
    currentState = props.currentPlayer + " to go.";
  }
  return(
    <div>
      <h2>{currentState}</h2>
    </div>
  )
}

export default GameStatus;
