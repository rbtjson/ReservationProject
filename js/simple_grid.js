/**
 * Created by Robert on 2015-03-20.
 */
simpleGrid = function () {

    var gridPage;
    var initialized = false;

    function renderGrid() {
        console.log("renderGrid");
    }

    return {
        init : function (page) {
            if (!initialized) {
                gridPage = page;

                // Create the grid
                renderGrid();

                // Add on click event listener to the grid
                $(gridPage).find('#calendar_grid').on('click', function (evt) {
                    evt.preventDefault();

                    // Iterate all the child elements in the grid.
                    // Toggle the selected class on the clicked element and
                    // make sure that the selected class is removed form all the other elements
                    $(gridPage).find('#calendar_grid').children().each(function( i ) {
                       if(this.id == evt.target.id) {
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