var createDay = 
  ( date ) => 
  ( records ) => 
  ( income ) => 
  ( consumption ) => ({
    date,
    records,
    income,
    consumption,
  });

var createInitialDay = 
  ( date ) => createDay( date )( [] )( 0 )( 0 );

export { createDay, createInitialDay };