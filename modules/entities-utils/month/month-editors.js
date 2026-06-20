var updateMonthIncome = 
  ( month ) => 
  ( newIncome ) =>  
  (
    month.income = newIncome,
    month
  );

var updateMonthConsumption = 
  ( month ) => 
  ( newConsumption ) =>  
  (
    month.consumption = newConsumption,
    month
  );

export { 
  updateMonthIncome,
  updateMonthConsumption
};