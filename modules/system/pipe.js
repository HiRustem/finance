var pipe = 
  ( fns ) => 
  ( value ) =>
  (
    fns.reduce(
      ( accumulator, current ) => (
        accumulator = current( accumulator ), accumulator
      ), 
      value
    )
  );

export default pipe;