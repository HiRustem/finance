var createYearString =
  ( date ) => (
    `Y-${date.getFullYear()}`
  );

var createMonthString = 
  ( date ) => (
    `M-${date.getMonth() + 1}`
  );

var createDayString = 
  ( date ) => (
    `D-${date.getDate()}`
  );

export { 
  createYearString,
  createMonthString,
  createDayString
};