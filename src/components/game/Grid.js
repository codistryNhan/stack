import React from 'react';
import './Grid.css';
import Cell from './Cell'

function Grid(props) {
  let grid = createGrid(props);

  return(
    grid
  );
}

function createGrid({rows, columns, on, selected, cellSize}) {
  let grid = [];
  let count = 0;

  for(let i = 0; i < rows; i++) {
    let cells = [];
    for(let j = 0; j < columns; j++) {
        let id = `${i}${j}`;
        cells.push(
          <Cell
            cellSize={cellSize} 
            count={count++} 
            id={id}
            on={on.includes(id) ? true : false} 
            selected={selected.includes(id) ? true : false}
          />
        )
    }
    grid.push(<tr key={i} data-row={i}>{cells}</tr>)
  }

  return(
    <table class="table-grid">
      {grid}
    </table>
  );
}

export default Grid;