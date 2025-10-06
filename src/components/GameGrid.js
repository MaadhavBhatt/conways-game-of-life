import React from 'react';
import Cell from './Cell';

export default function GameGrid({ grid, onCellClick }) {
  return (
    <div className="cell-grid" style={{ '--grid-cols': grid[0].length }}>
      {grid.map((row, rowIdx) =>
        row.map((alive, colIdx) => (
          <Cell
            key={`${rowIdx}-${colIdx}`}
            alive={alive}
            onClick={() => onCellClick(rowIdx, colIdx)}
          />
        ))
      )}
    </div>
  );
}
