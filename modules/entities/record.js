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

export { createRecord };