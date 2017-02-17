import React from 'react';

class NewGame extends React.Component{

  constructor(props) {
    super(props);
  }

  handleButtonClick() {
    this.props.startNewGame();
  }

  render() {
    if (this.props.won || (this.props.turns == 9)) {
      return(
        <div>
          <button className="newGameBtn" onClick={this.handleButtonClick.bind(this)}>New Game</button> 
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default NewGame