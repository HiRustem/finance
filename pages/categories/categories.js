import { CategoryManager } from "../../application/model/category-manager.js";
import { renderCategoryTable } from '../../application/view/category/category-table.js';
import { renderCategoryForm } from '../../application/view/category/category-form.js';
import { CATEGORIES_TYPE, createCategory } from "../../modules/entities/category.js";

var categoryManager = new CategoryManager();
categoryManager.addCategory( createCategory( 'id' )( CATEGORIES_TYPE.INCOME )( 'Category' )( 'Description' )  );
categoryManager.addCategory( createCategory( 'id2' )( CATEGORIES_TYPE.INCOME )( 'Another' )( 'Description' )  );

renderCategoryTable( categoryManager );
renderCategoryForm( categoryManager );