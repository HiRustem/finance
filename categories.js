import { CategoryManager } from "./application/model/category-manager.js";
import { renderCategoryTable } from './application/view/category-table.js';
import { renderCategoryForm } from './application/view/category-form.js';

var categoryManager = new CategoryManager();

renderCategoryTable( categoryManager );
renderCategoryForm( categoryManager );