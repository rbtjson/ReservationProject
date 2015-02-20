/*
 * reservation.calendar.js
 * Calendar for Reservation Project
 */

/*
 var child1 = React.createElement('li', null, 'First Text Content');
 var child2 = React.createElement('li', null, 'Second Text Content');
 var root = React.createElement('ul', { className: 'my-list' }, child1, child2);

 React.render( root, document.getElementById('calendar') );

 */
 // React.render( React.createElement('h1', null, 'Hello, world!'), document.getElementById('calendar') );
 /*
 <table>
  <tr>
    <th class="calendar-weekday">Monday</th>
    <th class="calendar-weekday">Tuesday</th>
  </tr>
  <tr>
    <td class="calendar-element">3</td>
    <td class="calendar-element">4</td>
  </tr>
  <tr>
    <td class="calendar-element">5</td>
    <td class="calendar-element">6</td>
  </tr>
</table>
*/



var Table = React.createClass({

  render: function render() {
    var _self = this;

    var thead = React.DOM.thead({},
      React.DOM.tr({},
        this.props.cols.map(function (col) {
          return React.DOM.th({}, col);
        })));

        var tbody = this.props.rows.map(function (row) {
          return React.DOM.tr({},
            _self.props.cols.map(function (col) {
              return React.DOM.td({}, row[col] || "");
            }));
          });

          return React.DOM.table({}, [thead, tbody]);
        }

      });

      var container = document.getElementById('calendar');

      var tableModel = {
        cols: ["Monday", "Tuesday"],
        rows: [
          {"Monday": "1", "Tuesday": "2",},
          {"Monday": "3", "Tuesday": "4"}
          ],

      }

      React.renderComponent(Table(tableModel), container);
