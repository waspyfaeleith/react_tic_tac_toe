import React from 'react';

const NewGame = ({props}) => {

  handleButtonClick() {
    props.startNewGame();
  }

  render() {
    if (props.won || (props.turns == 9)) {
      return(
        <div>
          <button className="newGameBtn" onClick={this.handleButtonClick}>New Game</button>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default NewGame
