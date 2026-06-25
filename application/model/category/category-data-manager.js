import { LOCAL_STORAGE_CATEGORIES_KEY } from '../../../modules/system/general.js'

function CategoryDataManager() {
  this.getCategoryDataState = () => ( localStorage.getItem( LOCAL_STORAGE_CATEGORIES_KEY ) );

  this.updateCategories = ( categories ) => ( localStorage.setItem( LOCAL_STORAGE_CATEGORIES_KEY, JSON.stringify( categories ) ) );

  this.removeCategories = () => ( localStorage.removeItem( LOCAL_STORAGE_CATEGORIES_KEY ) );
}

export { CategoryDataManager };