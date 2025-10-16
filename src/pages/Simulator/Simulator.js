import { useState } from 'react';
import { Link } from 'react-router-dom';
import GameGrid from '../../components/GameGrid';
import Game from '../../utils/gameOfLife';

const ROWS = 30;
const COLS = 30;

export default function Simulator() {
  const [gameState, setGameState] = useState(new Game(ROWS, COLS));

  const handleCellClick = (row, col) => {
    gameState.toggleCell(row, col);
    setGameState(new Game(ROWS, COLS, gameState.getGrid()));
  };

  const handleReset = () => {
    gameState.reset();
    setGameState(new Game(ROWS, COLS));
  };

  const handleEvolve = () => {
    gameState.evolve();
    setGameState(new Game(ROWS, COLS, gameState.getGrid()));
  };

  return (
    <>
      <GameGrid grid={gameState.getGrid()} onCellClick={handleCellClick} />

      <button onClick={handleReset}>Reset</button>
      <button onClick={handleEvolve}>Evolve</button>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </>
  );
}
