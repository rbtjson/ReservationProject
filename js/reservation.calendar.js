/*
* reservation.calendar.js
* Calendar for Reservation Project
*/

/** @jsx React.DOM */
var WeekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var TimeSlots = [
  {start_time: '07:00', end_time: '10:00'},
  {start_time: '10:00', end_time: '13:00'},
  {start_time: '13:00', end_time: '16:00'},
  {start_time: '16:00', end_time: '19:00'},
  {start_time: '19:00', end_time: '22:00'},
];


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


/*
* Create a single time slot
*/
var TimeSlot = React.createClass({

  render: function() {
    return (
      <tr>
      <td className="time-slot">{this.props.start_time} - {this.props.end_time}</td>
      </tr>
    );
  }
});


/*
* Creates the time slots table
*/
var TimeSlotTable = React.createClass({
  render: function() {
    var slots = [];

    this.props.timeslots.forEach(function(slot) {
      slots.push(<TimeSlot start_time={slot.start_time} end_time={slot.end_time} key={slot.start_time}/>);
    });

    return (
      <table className="floatingTable">
      {slots}
      </table>
    );
  }
});

var ResCalHead = React.createClass({
  render: function() {
    var days = [];

    this.props.weekdays.forEach(function(day) {
      days.push(<CalendarHead weekday={day} key={day}/>);
    });

    return (
      <table>
          <tr className="calendarHead">{days}</tr>
      </table>
    );
  }
});


var ResCalGrid = React.createClass({
  render: function() {
    var rows = [];

    for (intervals = 0; intervals < this.props.row_count; intervals++) {
      rows.push(<CalendarRow reselements={this.props.element_count} key={intervals}/>);
    }

    return (
      <table className="resCalGrid">
          <tbody>{rows}</tbody>
      </table>
    );
  }
});


var ResCal= React.createClass({
  render : function() {
    return(
      <div>
        <ResCalHead weekdays={this.props.weekdays}/>
        <TimeSlotTable timeslots={this.props.timeslots}/>
        <ResCalGrid element_count={this.props.weekdays.length} row_count={this.props.timeslots.length}/>
      </div>
    );
  }
});

React.render(<ResCal timeslots={TimeSlots} weekdays={WeekDays}/>, document.getElementById('calendar'));
