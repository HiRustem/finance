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

var createIncomeCategory = createCategory( CATEGORIES_TYPE.INCOME );
var createConsumptionCategory = createCategory( CATEGORIES_TYPE.CONSUMPTION );

export { 
  CATEGORIES_TYPE,
  createCategory,
  createIncomeCategory,
  createConsumptionCategory 
};