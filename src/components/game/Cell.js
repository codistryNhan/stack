import React from 'react';
import './Cell.css';

function Cell({count, id, x, on, selected, cellSize}) {
  let cellClass = "cell";
  if(selected) {
    cellClass += " selected";
  }

  if(on) {
    cellClass += " on";
  }

  return(
    <td 
      class={cellClass} 
      width={cellSize}
      height={cellSize}
      key={count} 
      data-id={id} 
      data-x={x}>
    </td>
  );
}

export default Cell;