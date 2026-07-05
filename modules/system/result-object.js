var RESULT_OBJECT_TYPES = Object.freeze({
  NORMAL: 'NORMAL',
  ERROR: 'ERROR',
  RETURN: 'RETURN',
});

var createResultObject = 
  ( type ) => 
  ( value ) => 
    ({
      type,
      value,
    });

export { createResultObject, RESULT_OBJECT_TYPES };