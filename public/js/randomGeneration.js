/**
 * Randomly creates alive and dead cells.
 */
const randomGeneration = function() {
    let probabilityValue = aliveProbability.value / 100;

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            let cellClassList = grid[x][y].classList;

            // gives live randomly, according to the probability
            if (Math.random() >= probabilityValue) {
                cellClassList.remove("alive");
                cellClassList.add("dead");
            } else {
                cellClassList.remove("dead");
                cellClassList.add("alive");
            }
        }
    }

    stepsCounter.value = 0;
};

randomGenerator.addEventListener("click", randomGeneration);
