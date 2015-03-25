/**
 * Created by Robert on 2015-03-20.
 */
simpleGrid = function () {

    var gridPage;
    var initialized = false;
    var days = 7;
    var slots = 5;


    function renderGrid(rows, columns) {
        var gridHtml = '';

        for(var ri = 0; ri < rows; ri++ ) {
            gridHtml += '<div class="row">';
            for(var ci = 0; ci < columns; ci++) {
                if(ci === 0) {
                    gridHtml += '<div class="time_slot col-sm-1 col-xs-5">07:00 - 10:00</div>';
                }
                else {
                    gridHtml += '<div class="time_slot col-sm-1 col-xs-5 visible-xs">07:00 - 10:00</div>';
                }
                // Create the grid cell
                var cellId = ri.toString() + ":" + ci.toString();
                gridHtml += "<div id=" + '"el' + cellId + '" class="grid_element col-sm-1 col-xs-5">' + cellId + "</div>";
            }
            gridHtml += "</div>";
        }

        $(gridPage).find('#calendar_grid').append(gridHtml);
    }


    return {
        init : function (page) {
            if (!initialized) {
                gridPage = page;

                // Create the grid
                renderGrid(slots, days);

                // Add on click event listener to the grid
                $(gridPage).find('#calendar_grid').on('click', function (evt) {
                    evt.preventDefault();

                    // Iterate all the child elements in the grid.
                    // Toggle the selected class on the clicked element and
                    // make sure that the selected class is removed form all the other elements
                    $(gridPage).find('#calendar_grid').find("div").each(function( i ) {
                       if(this.id == evt.target.id && $(this).hasClass("grid_element")) {
                           $(this).toggleClass("grid_element_selected");
                        }
                       else {
                           $(this).removeClass("grid_element_selected");
                       }
                    });
                });

                initialized = true;
            }
        }
    };
}();