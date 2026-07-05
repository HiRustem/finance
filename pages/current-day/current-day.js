import { CategoryDataManager } from "../../application/model/category/category-data-manager.js";
import { CategoryManager } from "../../application/model/category/category-manager.js";
import { ExpenseCalendar } from "../../application/model/expense/expense-manager.js";
import { renderCurrentDayTable } from "../../application/view/current-day/render-current-day-table.js";
import { renderCurrentMonthInfo } from "../../application/view/current-month/render-current-month-info.js";
import { renderCreateRecordFormDialog } from "../../application/view/record/render-create-record-form-dialog.js";

var categoryDataManager = new CategoryDataManager();
var categoryManager = new CategoryManager( 
  JSON.parse( 
    categoryDataManager.getCategoryDataState() 
  ) 
);

var expenseCalendar = new ExpenseCalendar();

renderCurrentMonthInfo( expenseCalendar );
renderCurrentDayTable( expenseCalendar );
renderCreateRecordFormDialog( categoryManager );
