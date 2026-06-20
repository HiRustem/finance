import { createInitialDay, initialMonth } from "../../entities/index.js";

var updateCalendarMonth = 
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) =>
  ( month ) => 
  (
    calendarState.calendar[yearString][monthString] = month,
    calendarState
  );

var addDay = 
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) =>
  ( dayString ) =>
  ( newDay ) =>
  (
    calendarState.calendar[yearString][monthString].days[dayString] = newDay
  );

var addEmptyDay =
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) =>
  ( dayString ) => addDay( calendarState )( yearString )( monthString )( dayString )( createInitialDay( new Date() ) );

var addMonth = 
  ( calendarState ) =>
  ( yearString ) => 
  ( monthString ) =>
  ( newMonth ) =>
  ( calendarState.calendar[yearString][monthString] = newMonth );

var addEmptyMonth =
  ( calendarState ) => 
  ( yearString ) => 
  ( monthString ) => 
  ( addMonth( calendarState )( yearString )( monthString )( initialMonth ) );

var addYear =
  ( calendarState ) => 
  ( yearString ) => 
  ( year ) => 
  ( calendarState.calendar[yearString] = year );

var addEmptyYear = 
  ( calendarState ) => 
  ( yearString ) => 
  ( addYear( calendarState )( yearString )( {} ) );

var addRecordToCalendar =
  ( calendarState ) => 
  ( yearString ) => 
  ( monthString ) =>
  ( dayString ) => 
  ( record ) => 
  ( calendarState.calendar[yearString][monthString].days[dayString].records.unshift(record) );

var removeRecordFromCalendar =
  ( calendarState ) => 
  ( yearString ) => 
  ( monthString ) =>
  ( dayString ) => 
  ( record ) => 
  (
    calendarState.calendar[yearString][monthString].days[dayString].records = calendarState.calendar[monthString][dayString].records.filter(
      ( current ) => current.id !== record.id 
    )
  );

export {
  updateCalendarMonth,
  addDay,
  addMonth,
  addRecordToCalendar,
  removeRecordFromCalendar,
  addEmptyDay,
  addEmptyMonth,
  addEmptyYear
}