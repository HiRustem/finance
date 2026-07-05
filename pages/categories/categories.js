import { renderCategoriesTable } from '../../application/view/category/render-categories-table.js';
import { renderCategoryFormDialog } from '../../application/view/category/category-form.js';
import { CategoryManager } from '../../application/model/category/category-manager.js';
import { CategoryDataManager } from '../../application/model/category/category-data-manager.js';

var categoryDataManager = new CategoryDataManager();
var categoryManager = new CategoryManager( JSON.parse( categoryDataManager.getCategoryDataState() ) );

var deleteCategoryButtonProps = {
  textContent: 'Delete',
  onClick: ( categoryId ) => (
    categoryManager.removeCategory( categoryId ),
    categoryDataManager.updateCategories( categoryManager.getState() )
  ),
};

var renderCategoriesTableCallback = () => renderCategoriesTable( deleteCategoryButtonProps )( categoryManager );

renderCategoriesTableCallback();

renderCategoryFormDialog
( categoryManager )
( 
  () => (
    ( renderCategoriesTableCallback() ),
    ( categoryDataManager.updateCategories( categoryManager.getState() ) )
  ) 
);