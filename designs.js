// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {

    let inputHeight, inputWidth, table, color;

    inputHeight = $('#input_height').val();
    inputWidth = $('#input_width').val();

    table = document.getElementById('#pixel_canvas');

    color = $("#colorPicker");


    // loop to create grid and add event listner to each cell
    for (let i = 1; i < inputHeight; i++) {
        let row = table.insertRow(i);
        for (let j = 1; j < inputWidth; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }

    //Colors in the cell that was clicked and color change.

    let colorSelect = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
           // cell.css('background-color', color);
        });
    }

}

//When button clicks, grid will be created. 

$("sizePicker").submit(function(evt) {
    makeGrid();
});