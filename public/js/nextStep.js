/**
 * Function that draw the next step.
 */
const drawNextStep = function () {
    // go through all cells
    let updatedCellsAreAlive = [];
    for (let x = 0; x < grid.length; x++) {
        updatedCellsAreAlive[x] = [];

        for (let y = 0; y < grid[x].length; y++) {
            // checks the classes to find the state
            let oldCellIsAlive = grid[x][y].classList.contains("alive") && !grid[x][y].classList.contains("dead");
            let cellsAround = [];

            updatedCellsAreAlive[x][y] = null;

            // copy all of neighbour cells
            for (let i = -1; i <= 1; i++) {
                if (grid[x + i] === undefined) {
                    continue;
                }

                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    cellsAround.push(grid[x + i][y + j]);
                }
            }

            // saves the state of the newCell variable (dead or alive)
            let numberOfAlive = 0;

            for (let toCheckIndex in cellsAround) {
                if (cellsAround[toCheckIndex] === undefined) {
                    continue;
                }

                let toCheckClassList = cellsAround[toCheckIndex].classList;
                if (toCheckClassList.contains("alive")) {
                    numberOfAlive++;

                    // if there are more cells than required, the newCell is dead
                    if (numberOfAlive > 3) {
                        break;
                    }
                }
            }

            // set the right class
            if (oldCellIsAlive) {
                if (numberOfAlive < 2 || numberOfAlive > 3) {
                    updatedCellsAreAlive[x][y] = false;
                }
            } else {
                if (numberOfAlive === 3) {
                    updatedCellsAreAlive[x][y] = true;
                }
            }
        }
    }


    for (let x in grid) {
        for (let y in grid[x]) {
            let updateCellIsAlive = updatedCellsAreAlive[x][y];

            // the state does not change, continue to next step
            if (updateCellIsAlive === null) {
                continue;
            }

            let classList = grid[x][y].classList;

            if (updateCellIsAlive === true) {
                classList.remove("dead");
                classList.add("alive");
            } else  {
                classList.remove("alive");
                classList.add("dead");
            }
        }
    }
    stepsCounter.value++;
};

// fires the function when clicking the button
nextStep.addEventListener("click", drawNextStep);
