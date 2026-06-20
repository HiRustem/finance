var getCalendarYear =
  ( calendarState ) => 
  ( yearString ) =>
  ( calendarState.calendar?.[yearString] );

var getCalendarMonth = 
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) => 
  ( calendarState.calendar?.[yearString]?.[monthString] );

var getCalendarDay = 
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) => 
  ( dayString ) => ( getCalendarMonth( calendarState )( yearString )( monthString )?.days?.[dayString] );

var getCalendarMonthIncome =
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) =>
  ( getCalendarMonth( calendarState )( yearString )( monthString ).income );

var getCalendarMonthConsumption =
  ( calendarState ) => 
  ( yearString ) =>
  ( monthString ) =>
  ( getCalendarMonth( calendarState )( yearString )( monthString ).consumption );

var getCalendarRecordByIndex =
  ( calendarState ) => 
  ( yearString ) => 
  ( monthString ) => 
  ( dayString ) => 
  ( index ) => 
  (
    calendarState.calendar[yearString][monthString].days[dayString].records[index]
  );

var getCalendarRecordById =
  ( calendarState ) => 
  ( yearString ) => 
  ( monthString ) => 
  ( dayString ) => 
  ( id ) => 
  (
    calendarState.calendar[yearString][monthString].days[dayString].records.find( ( record ) => ( record.id === id ) )
  );

export { 
  getCalendarMonth,
  getCalendarDay,
  getCalendarMonthIncome,
  getCalendarMonthConsumption,
  getCalendarYear,
  getCalendarRecordByIndex,
  getCalendarRecordById
}