import { CATEGORIES_TYPE, createCategory } from './modules/entities/category.js';
import { createRecord } from './modules/entities/record.js';
import { ExpenseCalendar } from './application/model/expense-manager.js';
import { CategoryManager } from './application/model/category-manager.js';
import { renderCalendarTable } from './application/view/calendar/calendar-table.js';

var categoryManager = new CategoryManager();
categoryManager.addCategory( createCategory( 'id' )( CATEGORIES_TYPE.INCOME )( 'Category' )( 'Description' )  );
categoryManager.addCategory( createCategory( 'id2' )( CATEGORIES_TYPE.INCOME )( 'Another' )( 'Description' )  );

console.log('categoryManager', categoryManager);

var expenseCalendar = new ExpenseCalendar();
expenseCalendar.addIncome( 100 );
expenseCalendar.addConsumption( 50 );
expenseCalendar.removeIncome( 30 );
expenseCalendar.removeConsumption( 10 );

expenseCalendar.addRecord( createRecord( 'id' )( 'RUB' )( categoryManager.getCategoryById( 'id' ) )( 'Study' )( 'I need knowledge' )( 1000 ) );

expenseCalendar.addRecord( createRecord( 'id2' )( 'RUB' )( categoryManager.getCategoryById( 'id2' ) )( 'Study' )( 'I need knowledge' )( 30 ) );

console.log( 'getIncome', expenseCalendar.getIncome() );
console.log( 'getConsumption', expenseCalendar.getConsumption() );
console.log( 'currentDay', expenseCalendar.getCurrentDay() );
console.log( 'currentMonth', expenseCalendar.getCurrentMonth() );
console.log( 'expenseCalendar', expenseCalendar );
console.log( 'recordByIndex', expenseCalendar.getRecordByIndex( 0 ) );
console.log( 'recordById', expenseCalendar.getRecordById( 'id2' ) );

console.log( 'categoryById', categoryManager.getCategoryById( 'id2' ) );
console.log( 'categoryByName', categoryManager.findCategoryByName( 'Categ' ) );
categoryManager.removeCategory( 'id' );

console.log( 'categoryManager', categoryManager );

renderCalendarTable( expenseCalendar );
