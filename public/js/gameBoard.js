/**
 * Builds the game board
 */
const drawGameBoard = function () {
    // first cleans the game board in case it is already drawn
    gameBoard.innerHTML = null;

    let maxX = parseInt(xSize.value);
    let maxY = parseInt(ySize.value);

    for (let x = 0; x < maxX; x++) {
        grid[x] = [];

        for (let y = 0; y < maxY; y++) {
            let cell = document.createElement("div");

            // adds classes to know cell state
            let cellClassList = cell.classList;
            cellClassList.add("cell");
            cellClassList.add("dead");

            // set the position in gameboard
            cell.style.gridRow = x + 1;
            cell.style.gridColumn = y + 1;

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
            grid[x][y] = cell;
        }
    }

    stepsCounter.value = 0;
};

drawGameBoard();
