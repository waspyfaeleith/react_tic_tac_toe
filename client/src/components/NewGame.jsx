import React from 'react';

const NewGame = ({startNewGame, won, turns}) => {

  const handleButtonClick = () => {
    startNewGame();
  }

  if (won === true || (turns === 9)) {
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
