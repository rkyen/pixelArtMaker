// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {

    let inputHeight, inputWidth, table, color;

    inputHeight = $('#input_height').val();
    inputWidth = $('#input_width').val();

    table = document.getElementById('pixel_canvas');

    color = $("#colorPicker");


    // loop to create grid and add event listner to each cell

    for (let i = 0; i < inputHeight; i++) {
        let row = table.insertRow();
        for (let j = 0; j < inputWidth; j++) {
            let cell = row.insertCell();
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = color.val(); //Colors in the cell that was clicked and color change.
            });
        }
    }

}

//When button clicks, grid will be created. 

$("#sizePicker").submit(function(evt) {
    makeGrid();
    evt.preventDefault();
});