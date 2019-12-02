import React from 'react';
import Grid from './Grid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 12,
      columns: 7,
      cellsOn: [],
      cellSize: 25,
      cellsSelected: [],
      gameStart: true,
      currentRow: 0
    };
  }

  componentDidMount() {
    this.animateRow(0);

    window.addEventListener('click', () => {
      const [selected] = this.state.cellsSelected;
      const cellsOn = this.state.cellsOn;
      cellsOn.push(selected);
      this.setState( (prev) => ({
        cellsOn,
        currentRow: prev.currentRow + 1
      }));
    });

    
  }

  componentDidUpdate() {
    
  }

  startGame = () => {

  }

  animateRow = (row) => {
    const end = this.state.column - 1;
    let reverse = false;
    let selected = [];

    setInterval( () => {
      for(let i = 0; i <= end; i++) {
        let id = `${row}${i}`;
        this.setState({cellsSelected: [id]});
      }
    }, 500);
    
  }

  // startRow = (row) => {
  //   let y = 0;
  //   let end = this.state.xSize - 1;
  //   let reverse = false;

  //   let obj = {
  //     x, y, end, reverse
  //   }

  //   setInterval(this.blockStart(obj), 500);
  // }

  // moveBlock = ({x, y, end, reverse}) => {
  //   if(y === end) {
  //     reverse = true;
  //   } else if (y === 0){
  //     reverse = false;
  //   }

  //   let id = `${x}${y}`;
  //   let cellsSelected = [id];
  //   this.setState({cellsSelected})
    
  //   if(!reverse) {
  //     start++
  //   } else {
  //     start--;
  //   }
  // }

  render() {
    return(
      <>
        <h1> Stacker </h1>
        <Grid 
          rows={this.state.rows} 
          columns={this.state.columns}
          cellSize={this.state.cellSize} 
          on={this.state.cellsOn} 
          selected={this.state.cellsSelected}
        />  
      </>
    );
  }
}

export default Game;