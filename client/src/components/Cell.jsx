import React, { useState }from 'react';

const Cell = ({playSquare, contents, id, gameWon, player }) => {

  const [cellContents, setCellContents] = useState(contents)

  const selectSquare = () => {
    playSquare(id);
    setCellContents(player);
  }


  if (cellContents === "" && gameWon === false) {
     return(
       <td>
         <button className="gridCell" onClick={selectSquare}>{cellContents}</button>
       </td>
    )
  }
  
  return (
    <td>
      { cellContents }
    </td>
  )

}

export default Cell;
