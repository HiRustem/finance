import { CATEGORIES_TYPE } from "../../entities/category.js";

var makeFilterRecords = 
  ( predicate ) =>
  ( records ) => (
    records.filter(predicate)
  );

var makeFilterRecordsPredicate = 
  ( categoryType ) =>
  ( value ) => (
    value.category.type === categoryType
  );

var getOnlyIncomeRecords = makeFilterRecords(
  makeFilterRecordsPredicate(
    CATEGORIES_TYPE.INCOME
  )
);

var getOnlyConsumptionRecords = makeFilterRecords(
  makeFilterRecordsPredicate(
    CATEGORIES_TYPE.CONSUMPTION
  )
);

export { 
  getOnlyIncomeRecords, 
  getOnlyConsumptionRecords 
};