import { LOCAL_STORAGE_EXPENSE_CALENDAR_KEY } from "../../../modules/system/general.js";

function ExpenseDataManager() {
  this.getExpenseDataState = () => ( localStorage.getItem( LOCAL_STORAGE_EXPENSE_CALENDAR_KEY ) );

  this.updateExpenseState = ( expenseState ) => ( localStorage.setItem( LOCAL_STORAGE_EXPENSE_CALENDAR_KEY, JSON.stringify( expenseState ) ) );

  this.removeExpenseState = () => ( localStorage.removeItem( LOCAL_STORAGE_EXPENSE_CALENDAR_KEY ) );
}

export { ExpenseDataManager };