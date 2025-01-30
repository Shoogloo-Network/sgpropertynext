import { useState }  from 'react'

const InteractiveGrid = () => {
    const rows = 6;
    const cols = 6;
    const [activeCells, setActiveCells] = useState([]);

    const handleClick = (row, col) => {
        const newActiveCells = [];

        // Highlight main diagonal
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (i - j === row - col || i + j === row + col) {
                    newActiveCells.push(`${i}-${j}`);
                }
            }
        }

        setActiveCells(newActiveCells);
    };

    return (
        <div className="grid-container">
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => (
                    <div
                        key={`${row}-${col}`}
                        className={`grid-cell ${activeCells.includes(`${row}-${col}`) ? 'active' : ''}`}
                        onClick={() => handleClick(row, col)}
                    >
                        {row},{col}
                    </div>
                ))
            )}
        </div>
    );
}

export default InteractiveGrid










/* 

Goal
We want to create a 4x5 grid where clicking on any cell highlights its diagonal cells.

Steps
Create the Grid:
We need a 4x5 grid of cells. Each cell will have a unique position identified by its row and column numbers.
Handle Clicks:
When a cell is clicked, we need to find its diagonal cells and change their color.
Highlight Diagonal Cells:
There are two types of diagonals:
Main Diagonal: Cells where the difference between the row and column indices is the same.
Anti-Diagonal: Cells where the sum of the row and column indices is the same.
Code Explanation
HTML and CSS
We use HTML to create the structure and CSS to style the grid.

JavaScript (React)
We use React to handle the logic of clicking and highlighting cells.

Detailed Breakdown
Grid Setup:
We create a grid with 4 rows and 5 columns using nested loops.
Each cell is given a data-row and data-col attribute to identify its position.
State Management:
We use React’s useState to keep track of which cells are highlighted.
Click Event Handling:
When a cell is clicked, the handleClick function is called.
This function calculates which cells should be highlighted based on the clicked cell’s position.
Highlighting Diagonal Cells:
We use two conditions to find the diagonal cells:
Main Diagonal: Cells where i - j === row - col.
Anti-Diagonal: Cells where i + j === row + col.

*/