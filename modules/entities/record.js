var RECORD_ID_KEYWORD = 'recordId';

var createRecord = 
  ( id ) =>
  ( currency ) => 
  ( category ) => 
  ( name ) =>
  ( description ) =>
  ( amount ) =>
  ({
    id,
    currency,
    category,
    name,
    description,
    amount,
  });

export { createRecord, RECORD_ID_KEYWORD };