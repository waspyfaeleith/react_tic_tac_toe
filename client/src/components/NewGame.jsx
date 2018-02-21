import React from 'react';

const NewGame = props => {

  const handleButtonClick = function () {
    props.startNewGame();
  }

  if (props.won || (props.turns == 9)) {
    return(
      <div>
        <button className="newGameBtn" onClick={handleButtonClick}>New Game</button>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default NewGame
