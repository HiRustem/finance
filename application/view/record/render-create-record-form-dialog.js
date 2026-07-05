import { renderCategoriesTable } from "../category/render-categories-table.js";
import { createRecord, RECORD_ID_KEYWORD } from '../../../modules/entities/record.js';
import { generateId } from "../../../modules/entities/id.js";

var renderCreateRecordFormDialog = 
( categoryManager ) => 
( expenseCalendar ) =>
( onChange ) => {
  var cachedCreateRecordFormObject = { instance: null };

  var createRecordFormDialog = document.querySelector('#createRecordFormDialog');
  
  renderCreateRecordFormDialogButtons( createRecordFormDialog );

  addCreateRecordFormDialogEvent
  ( createRecordFormDialog )
  ( cachedCreateRecordFormObject )
  ( 
    () => ( 
      initCreateRecordFormObject
      ( createRecordFormDialog )
      ( cachedCreateRecordFormObject )
      ( 
        () => ( 
          makeCreateRecordFormObject
          ( createRecordFormDialog )
          ( categoryManager )
          ( expenseCalendar ) 
          ( onChange )
        ) 
      ) 
    ) 
  );
}

var renderCreateRecordFormDialogButtons = ( createRecordFormDialog ) => {
  var createRecordFormDialogOpenButton = document.querySelector('#createRecordFormDialogOpenButton');
  var createRecordFormDialogCloseButton = createRecordFormDialog.querySelector('button');

  createRecordFormDialogOpenButton.onclick = () => ( createRecordFormDialog.showModal() );
  createRecordFormDialogCloseButton.onclick = () => ( createRecordFormDialog.close() );
}

var addCreateRecordFormDialogEvent = 
( createRecordFormDialog ) =>
( cachedCreateRecordFormObject ) =>
( initCreateRecordFormObject ) => (
  createRecordFormDialog.addEventListener("beforetoggle", ( e ) => (
    requestAnimationFrame(() => (
      e.newState === 'open'
      ? ( !cachedCreateRecordFormObject.instance ? initCreateRecordFormObject() : null )
      : ( cachedCreateRecordFormObject.instance?.resetFields() )
    ))
  ))
);

var initCreateRecordFormObject = 
( createRecordFormDialog ) => 
( cachedCreateRecordFormObject ) =>
( makeCreateRecordFormObject ) => {
  var createRecordFormDialogHeader = createRecordFormDialog.querySelector('#createRecordFormDialogHeader');

  cachedCreateRecordFormObject.instance = makeCreateRecordFormObject();

  createRecordFormDialogHeader.after( cachedCreateRecordFormObject.instance.node );
}

var makeCreateRecordFormObject = 
( createRecordFormDialog ) =>
( categoryManager ) =>
( expenseCalendar ) =>
( onChange ) => {
  var selectedCategory = null;
  var categoriesTableDialog = document.querySelector('#categoriesTableDialog');
  var createRecordFormTemplate = document.querySelector('#createRecordFormTemplate');
  var createRecordFormTemplateClone = document.importNode( createRecordFormTemplate.content, true );

  var createRecordForm = createRecordFormTemplateClone.querySelector('form');
  var createRecordFormNameInput = createRecordForm.querySelector('#recordName');
  var createRecordFormDescriptionTextarea = createRecordForm.querySelector('#recordDescription');
  var createRecordFormAmountInput = createRecordForm.querySelector('#recordAmount');
  var selectedCategoryParagraphSpan = createRecordForm.querySelector('#selectedCategoryParagraph > span');
  var selectCategoryButton = createRecordForm.querySelector('#selectCategoryButton');
  var createRecordFormSubmitButton = createRecordForm.querySelector('#submitButton');

  var openCategoriesDialog = () => (
    renderCategoriesTable
    ({
      onClick: ( categoryId ) => ( 
        selectedCategory = categoryManager.getCategoryById( categoryId ),
        selectedCategoryParagraphSpan.textContent = selectedCategory.name,
        categoriesTableDialog.close()
      ),
      textContent: 'Select',
    })
    ( categoryManager ),
    categoriesTableDialog.showModal()
  );

  var onSubmit = ( event ) => (
    ( event.preventDefault() ),
    (
      expenseCalendar.addRecord(
        createRecord
        ( generateId( RECORD_ID_KEYWORD ) )
        ( 'RUB' )
        ( selectedCategory )
        ( createRecordFormNameInput.value )
        ( createRecordFormDescriptionTextarea.value )
        ( createRecordFormAmountInput.value )
      )
    ),
    createRecordFormDialog.close(),
    onChange?.()
  );

  var resetFields = () => (
    createRecordFormNameInput.value = '',
    createRecordFormDescriptionTextarea.value = '',
    createRecordFormAmountInput.value = '',
    selectedCategory = null,
    selectedCategoryParagraphSpan.textContent = 'none'
  );

  var getFormFieldsValues = () => ({
    recordName: createRecordFormNameInput.value,
    recordDescription: createRecordFormDescriptionTextarea.value,
    recordAmount: createRecordFormAmountInput.value,
    selectedCategory,
  });

  createRecordFormSubmitButton.onclick = onSubmit;
  selectCategoryButton.onclick = openCategoriesDialog;

  return {
    node: createRecordFormTemplateClone,
    resetFields,
    getFormFieldsValues,
  }
}

export { renderCreateRecordFormDialog };