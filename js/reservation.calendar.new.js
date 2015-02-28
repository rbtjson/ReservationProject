/*
 * Created by Robert on 2015-02-28.
 */

/** @jsx React.DOM */

/* START MOCK DATA */
var WeekDays = [
    {weekday: 'mon', date: '28', month: 'feb'},
    {weekday: 'tue', date: '1', month: 'feb'},
    {weekday: 'wed', date: '2', month: 'feb'},
    {weekday: 'thu', date: '3', month: 'feb'},
    {weekday: 'fri', date: '4', month: 'feb'},
    {weekday: 'sat', date: '5', month: 'feb'},
    {weekday: 'sun', date: '6', month: 'feb'}
];

var TimeSlots = [
    {start_time: '07:00', end_time: '10:00'},
    {start_time: '10:00', end_time: '13:00'},
    {start_time: '13:00', end_time: '16:00'},
    {start_time: '16:00', end_time: '19:00'},
    {start_time: '19:00', end_time: '22:00'}
];

var ResObjects = [
    {obj_name: 'Laundry Room', obj_id: '123'},
    {obj_name: 'Sauna', obj_id: '456'}
];
/* END MOCK DATA */


/*
 * Create a resobject
 */
var ResObject = React.createClass({

    render: function() {
        return (
            <div className="res_obj">{this.props.res_objects.obj_name}</div>
        );
    }
});


/*
 * Create a single time slot
 */
var DayHeader = React.createClass({

    render: function() {
        return (
            <div className="day_header">{this.props.weekdays.weekday} {this.props.weekdays.date} {this.props.weekdays.month}</div>
        );
    }
});

/*
 * Create a single time slot
 */
var TimeSlot = React.createClass({

    render: function() {
        return (
            <div className="time_slot">{this.props.start_time}<br/>{this.props.end_time}</div>
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
            <div className="timeslot_col">
                {slots}
            </div>
        );
    }
});




var ResCal= React.createClass({
    render : function() {
        return(
            <div>
                <ResObject res_objects={this.props.res_objects[0]}/>
                <DayHeader weekdays={this.props.weekdays[0]}/>
                <TimeSlotCol timeslots={this.props.timeslots}/>
            </div>
        );
    }
});

React.render(<ResCal timeslots={TimeSlots} weekdays={WeekDays} res_objects={ResObjects}/>, document.getElementById('calendar'));