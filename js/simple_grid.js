/**
 * Created by Robert on 2015-03-20.
 */
simpleGrid = function () {

    var gridPage;
    var initialized = false;

    return {
        init : function (page) {
            if (!initialized) {
                gridPage = page;

                $(gridPage).find('#el1').on('click', function (evt) {
                    $(evt.target).toggleClass('grid_element_selected');
                });

                initialized = true;
            }
        }
    };
}();