class GameState {
  #grid; // Private field for the grid

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.#grid = this.createEmptyGrid();
    this.generation = 0;
    this.liveCount = this.#grid.flat().filter((cell) => cell).length;
    this.locked = false;
  }

  reset() {
    this.#grid = this.createEmptyGrid();
    this.generation = 0;
    this.locked = false;
  }

  createEmptyGrid() {
    return Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => false)
    );
  }

  toggleCell(row, col) {
    if (this.locked) return; // Prevent toggling if locked
    if (!(row >= 0 && row < this.rows) || !(col >= 0 && col < this.cols)) {
      throw new Error('Cell position out of bounds');
    }
    this.#grid[row][col] = !this.#grid[row][col];
  }

  updateLiveCount() {
    this.liveCount = this.#grid.flat().filter((cell) => cell).length;
  }

  countLiveNeighbors(row, col) {
    let liveNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Skip the cell itself
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 &&
          newRow < this.rows &&
          newCol >= 0 &&
          newCol < this.cols
        ) {
          liveNeighbors += this.#grid[newRow][newCol] ? 1 : 0;
        }
      }
    }
    return liveNeighbors;
  }

  generateNextState() {
    const nextGrid = this.createEmptyGrid();

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const liveNeighbors = this.countLiveNeighbors(row, col);
        if (this.#grid[row][col]) {
          nextGrid[row][col] = liveNeighbors === 2 || liveNeighbors === 3;
        } else {
          nextGrid[row][col] = liveNeighbors === 3;
        }
      }
    }
    this.#grid = nextGrid;
    this.generation += 1;
    this.updateLiveCount();
  }
}

export default GameState;
