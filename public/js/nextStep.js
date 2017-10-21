function nextStep() {
    // go through all cells
    let updatedClassList = [];
    for (let x = 0; x < grid.length; x++) {
        updatedClassList[x] = [];

        for (let y = 0; y < grid[x].length; y++) {
            let oldClassList = grid[x][y].classList;
            let cellsAround = [];

            // creates a dummy element
            let dummyElement = document.createElement("div");
            // saves the state of the cell
            let newClassList = dummyElement.classList;

            // adds the cell class to retain the value
            newClassList.add("cell");

            if (oldClassList.contains("dead")) {
                newClassList.add("dead");
            }

            if (oldClassList.contains("alive")) {
                newClassList.add("alive");
            }

            updatedClassList[x][y] = newClassList;

            // copy all of neighbour cells
            for (let i = -1; i <= 1; i++) {
                if (typeof grid[x + i] == "undefined") {
                    continue;
                }

                for (let j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) {
                        continue;
                    }
                    cellsAround.push(grid[x + i][y + j]);
                }
            }

            // saves the state of the newCell variable (dead or alive)
            let isAlive = oldClassList.contains("alive");
            let numberOfAlive = 0;

            for (let toCheckIndex in cellsAround) {
                if (cellsAround[toCheckIndex] == undefined) {
                    continue;
                }

                let toCheckClassList = cellsAround[toCheckIndex].classList;
                if (toCheckClassList.contains("alive")) {
                    numberOfAlive++;

                    // if there are more cells than required, the newCell is dead
                    if (isAlive && numberOfAlive > 2) {
                        break;
                    } else if (!isAlive && numberOfAlive > 3) {
                        break;
                    }
                }
            }

            // set the right class
            if (isAlive) {
                if (numberOfAlive != 2) {
                    newClassList.remove("alive");
                    newClassList.add("dead");
                }
            } else {
                if (numberOfAlive == 3) {
                    newClassList.remove("dead");
                    newClassList.add("alive");
                }
            }
        }
    }


    for (let x in grid) {
        for (let y in grid[x]) {
            grid[x][y].classList = updatedClassList[x][y];
        }
    }
}

let nextStepButton = document.querySelector("[name=nextStep]");

nextStepButton.addEventListener("click", function(_event) {
    nextStep();
});