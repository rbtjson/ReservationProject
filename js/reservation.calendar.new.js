/**
 * Created by Robert on 2015-02-28.
 */

/** @jsx React.DOM */
var WeekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var TimeSlots = [
    {start_time: '07:00', end_time: '10:00'},
    {start_time: '10:00', end_time: '13:00'},
    {start_time: '13:00', end_time: '16:00'},
    {start_time: '16:00', end_time: '19:00'},
    {start_time: '19:00', end_time: '22:00'}
];



/*
 * Create a single time slot
 */
var TimeSlot = React.createClass({

    render: function() {
        return (
            <div className="time-slot">{this.props.start_time}<br/>{this.props.end_time}</div>
        );
    }
});


/*
 * Creates the time slots column
 */
var TimeSlotCol = React.createClass({
    render: function() {
        var slots = [];

        this.props.timeslots.forEach(function(slot) {
            slots.push(<TimeSlot start_time={slot.start_time} end_time={slot.end_time} key={slot.start_time}/>);
        });

        return (
            <div className="timeslotcol">
                {slots}
            </div>
        );
    }
});




var ResCal= React.createClass({
    render : function() {
        return(
            <div>
                <TimeSlotCol timeslots={this.props.timeslots}/>
            </div>
        );
    }
});

React.render(<ResCal timeslots={TimeSlots} weekdays={WeekDays}/>, document.getElementById('calendar'));