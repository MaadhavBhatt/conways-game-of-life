import { useState } from 'react';
import { Link } from 'react-router-dom';
import GameGrid from '../../components/GameGrid';

const ROWS = 10;
const COLS = 10;

function createEmptyGrid() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => false)
  );
}

export default function Simulator() {
  const [grid, setGrid] = useState(createEmptyGrid());

  const handleCellClick = (row, col) => {
    setGrid((prevGrid) =>
      prevGrid.map((r, rowIdx) =>
        r.map((cell, colIdx) =>
          rowIdx === row && colIdx === col ? !cell : cell
        )
      )
    );
  };

  return (
    <section className="container">
      <h2>Simulator</h2>
      <Link to="/">Go to Home</Link>
      <GameGrid grid={grid} onCellClick={handleCellClick} />
    </section>
  );
}
