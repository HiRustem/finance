var CATEGORIES_TYPE = Object.freeze({
  INCOME: Symbol( 'INCOME' ),
  CONSUMPTION: Symbol( 'CONSUMPTION' ),
});

var createCategory = 
  ( id ) =>
  ( type ) => 
  ( name ) => 
  ( description ) => ({
    id,
    type,
    name,
    description,
  });

export { 
  CATEGORIES_TYPE,
  createCategory
};