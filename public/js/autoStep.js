// the variable holding the interval ID
let intervalHolder = null;

// Enabling or disabling automatically doing the next step.
autoStep.addEventListener("click", function(_event){
    let interval = parseInt(autoStepInterval.value);

    // the checkbox is checked, so the interval has to be on
    if (this.checked) {
        intervalHolder = window.setInterval(drawNextStep, interval);
    } else {
        window.clearInterval(intervalHolder);
    }
});
