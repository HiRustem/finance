var createMonth = 
  ( days ) =>
  ( income ) => 
  ( consumption ) => 
  ( yearNumber ) => 
  ( monthNumber ) => 
  ({
    days,
    income,
    consumption,
    yearNumber,
    monthNumber
  });

var initialMonth = ( 
  createMonth( {} )( 0 )( 0 )( new Date().getFullYear() )( new Date().getMonth() + 1 ) 
);

export { 
  createMonth,
  initialMonth
}