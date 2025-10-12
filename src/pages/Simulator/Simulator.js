import { useState } from 'react';
import GameGrid from '../../components/GameGrid';
import Game from '../../utils/gameOfLife';

const ROWS = 30;
const COLS = 30;

function createEmptyGrid() {
  const gameState = new Game(ROWS, COLS);
  return gameState.createEmptyGrid();
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

  return <GameGrid grid={grid} onCellClick={handleCellClick} />;
}
