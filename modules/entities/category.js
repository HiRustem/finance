var CATEGORIES_TYPE = Object.freeze({
  INCOME: Symbol( 'INCOME' ),
  CONSUMPTION: Symbol( 'CONSUMPTION' ),
});

var CATEGORY_ID_KEYWORD = 'categoryId';

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
  CATEGORY_ID_KEYWORD,
  createCategory
};