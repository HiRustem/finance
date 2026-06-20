var RESULT_OBJECT_TYPES = Object.freeze({
  NORMAL: Symbol( 'NORMAL' ),
  ERROR: Symbol( 'ERROR' ),
  RETURN: Symbol( 'RETURN' ),
});

var createResultObject = 
  ( type ) => 
  ( value ) => 
    ({
      type,
      value,
    });

export { createResultObject, RESULT_OBJECT_TYPES };