// the gameBoard HTMLNode
const gameBoard = document.querySelector("#gameBoard");

// internal storage for the grid
const grid = [];

// builds the gameBoard
for (let i = 0, maxI = 10; i < maxI; i++) {
    grid[i] = [];

    for (let j = 0, maxJ = 10; j < maxJ; j++) {
        let cell = document.createElement("div");

        // adds classes to know cell state
        let cellClassList = cell.classList;
        cellClassList.add("cell");
        cellClassList.add("dead");

        // set the position in gameboard
        cell.style.gridRow = i + 1;
        cell.style.gridColumn = j + 1;

        // adds the event to switch cell state
        cell.addEventListener("click", function(_event) {
            if (cellClassList.contains("dead")) {
                cellClassList.remove("dead");
                cellClassList.add("alive");
            } else {
                cellClassList.remove("alive");
                cellClassList.add("dead");
            }
        });

        gameBoard.appendChild(cell);
        grid[i][j] = cell;
    }
}
