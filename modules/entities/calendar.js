var createCalendarState = 
  ( calendar ) => 
  ({
    calendar
  });

var emptyCalendarState = createCalendarState( {} );

export { 
  createCalendarState,
  emptyCalendarState,
};