import React, { useState }from 'react';

const Cell = ({playSquare, contents, id, gameWon, player }) => {
  
  const selectSquare = () => {
    playSquare(id);
    setCellContents(player);
  }
  
  if (contents === "" && gameWon === false) {
     return(
       <td>
         <button className="gridCell" onClick={selectSquare}>{contents}</button>
       </td>
    )
  }
  
  return (
    <td>
      { contents }
    </td>
  )

}

export default Cell;
