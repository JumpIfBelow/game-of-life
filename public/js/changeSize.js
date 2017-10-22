// adds an auto update on the button to change grid size
[xSize, ySize].forEach(
    function(_element, _index, _array) {
        _element.addEventListener("input", drawGameBoard);
    }
);
