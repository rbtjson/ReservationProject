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
            gridHtml += "<div class=row></div>";
            for(var ci = 0; ci < columns; ci++) {
                var cellId = ri.toString() + ":" + ci.toString();
                gridHtml += "<div id=" + '"el' + cellId + '" class="grid_element col-md-6 col-xs-12">' + cellId + "</div>";
            }
        }

        $(gridPage).find('#calendar_grid').append(gridHtml);
    }

    /*
     <div id="el1" class="grid_element col-md-6 col-xs-12">1:1</div>
    var data = ["a", "bunch", "of", "things", "to", "insert"];
     var html = '';
     for (var i=0; i < data.length; i++) {
     html += "<td>" + data + "</td>";
     }
     $("#tablerow").append(html);
     */

    return {
        init : function (page) {
            if (!initialized) {
                gridPage = page;

                // Create the grid
                renderGrid(days, slots);

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