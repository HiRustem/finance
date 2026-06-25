import { renderCategoryTable } from '../../application/view/category/category-table.js';
import { renderCategoryFormDialog } from '../../application/view/category/category-form.js';
import { CategoryManager } from '../../application/model/category/category-manager.js';
import { CategoryDataManager } from '../../application/model/category/category-data-manager.js';

var categoryDataManager = new CategoryDataManager();
var categoryManager = new CategoryManager( 
  JSON.parse( 
    categoryDataManager.getCategoryDataState() 
  ) 
);

renderCategoryTable( categoryManager );
renderCategoryFormDialog( categoryManager )
  ( categoryDataManager )
  ( 
    () => renderCategoryTable( categoryManager ) 
  );