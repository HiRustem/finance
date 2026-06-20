var CHAIN_VARIABLE_SYMBOL = Symbol('IS_CHAIN_VARIABLE');

var createChainVariable =
  ( fn ) => 
  (
    fn[CHAIN_VARIABLE_SYMBOL] = true, fn
  );

var chain = 
  ( variable ) => 
  (
    variable?.[CHAIN_VARIABLE_SYMBOL]
    ? variable
    : createChainVariable(
      ( callback ) => ( 
        chain( 
          callback( 
            variable 
          ) 
        ) 
      )
    )
  );

export default chain;