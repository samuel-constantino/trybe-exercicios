import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  const { value, onClick } = props;
  return (
    <button 
      className="square"
      onClick={() => onClick()}
    >
      {value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     squares: Array(9).fill(null),
     xIsNext: true,
   }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    const { xIsNext } = this.state

    squares[i] = xIsNext ? 'X' : 'O';

    this.setState({
      squares, 
      xIsNext: !xIsNext
    });
  }

  renderSquare(i) {
    const { squares } = this.state;
    return (
      <Square 
        value={squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const { xIsNext } = this.state;

    const player = xIsNext ? 'X' : 'O';

    return (
      <div>
        <div
          className="status"
        >
          {`Próximo Jogador: ${player}`}
        </div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
