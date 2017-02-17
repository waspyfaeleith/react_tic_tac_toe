import React from 'react';

class Cell extends React.Component{

  constructor(props) {
    super(props);
    this.state = { contents: this.props.contents };
  }

  selectSquare() {
    this.props.playSquare(this.props.id);
    this.setState({ contents: this.props.contents });
  }
  
  render(){
    console.log("contents:",this.state.contents);
    if (this.state.contents === "" && this.props.gameWon === false) {
      return(
        <div>
          <button className="gridCell" onClick={this.selectSquare.bind(this)}></button>  
        </div>
    )
    }
    return (
      <div>
        { this.state.contents }
      </div>
      )
  }
  
}

export default Cell;