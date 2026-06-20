var makeCalendarOperationWrapper = 
  ( currentYear ) =>
  ( currentMonth ) => 
  ( currentDay ) => 
  ( addInitialYear ) =>
  ( addInitialMonth ) =>
  ( addInitialDay ) => 
  ( operation ) => 
  (
    !!currentYear
    ? !!currentMonth
      ? !!currentDay
        ? operation()
        : ( addInitialDay(), operation() )
      : (
        addInitialMonth(),
        addInitialDay(),
        operation()
      )
    : (
      addInitialYear(),
      addInitialMonth(),
      addInitialDay(),
      operation()
    )
  );

export { makeCalendarOperationWrapper };