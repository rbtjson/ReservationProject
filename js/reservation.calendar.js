/*
 * reservation.calendar.js
 * Calendar for Reservation Project
 */

 /** @jsx React.DOM */
 var WeekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
 var CalendarRowCount = 5;

 var CalendarHead = React.createClass({
   render: function() {
     return (
         <th className="calendar-weekday">{this.props.weekday}</th>
     );
   }
 });


 var CalendarElement = React.createClass({
   render: function() {
     return (
         <td className="calendar-element"></td>
     );
   }
 });

 var CalendarRow = React.createClass({
   render: function() {

     var weekRow = [];

     var elements;
     for (element = 0; element < this.props.reselements; element++) {
       weekRow.push(<CalendarElement key={element}/>);
     }

     return (
       <tr className="calendarRow">
         {weekRow}
       </tr>
     );
   }
 });


 var ResCal = React.createClass({
   render: function() {
     var days = [];
     var rows = [];

     this.props.weekdays.forEach(function(day) {
         days.push(<CalendarHead weekday={day} key={day}/>);
     });

     var intervals;
     for (intervals = 0; intervals < this.props.calrows; intervals++) {
       rows.push(<CalendarRow reselements={this.props.calcolumns} key={intervals}/>);
     }

     return (
       <table>
        <thead>
         <tr className="calendarHead">{days}</tr>
         </thead>
         <tbody>{rows}</tbody>
       </table>
     );
   }
 });

 React.render(<ResCal weekdays={WeekDays} calcolumns={WeekDays.length} calrows={CalendarRowCount}/>, document.getElementById('calendar'));
