// retrieves all of the required DOM element
const gameBoard = document.querySelector("#game-board");
const nextStep = document.querySelector("#next-step");
const stepsCounter = document.querySelector("#steps-counter");
const xSize = document.querySelector("#x-size");
const ySize = document.querySelector("#y-size");
const autoStep = document.querySelector("#auto-step");
const autoStepInterval = document.querySelector("#auto-step-interval");
const randomGenerator = document.querySelector("#random-generation");
const aliveProbability = document.querySelector("#alive-probability");

// internal storage for the grid
const grid = [];
