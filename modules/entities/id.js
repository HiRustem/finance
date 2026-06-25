var generateId = 
  ( keyword ) => (
    `${keyword}: ${Math.floor(Math.random() * 10000)}`
  );

export { generateId };