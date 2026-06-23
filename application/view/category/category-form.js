import { CATEGORIES_TYPE, createCategory } from "../../../modules/entities/category.js";

var renderCategoryForm = ( categoryManager ) => {
  var cachedCreateCategoryFormObject = null;

  var createCategoryFormDialog = document.querySelector('#createCategoryFormDialog');
  var createCategoryFormDialogCloseButton = createCategoryFormDialog.querySelector('button');
  var createCategoryDialogButton = document.querySelector('#createCategoryDialogButton');

  var openCreateCategoryDialog = () => {
    return !!cachedCreateCategoryFormObject ? ( createCategoryFormDialog.showModal() ) : ( cachedCreateCategoryFormObject = initCreateCategoryFormObject(), createCategoryFormDialog.show() );
  }

  var initCreateCategoryFormObject = () => {
    var createCategoryFormDialog = document.querySelector('#createCategoryFormDialog');
    var createCategoryFormDialogH3 = createCategoryFormDialog.querySelector('h3');
    var createCategoryFormObject = makeCreateCategoryFormObject( categoryManager )( Object.keys( CATEGORIES_TYPE ) );
    
    createCategoryFormDialogH3.after( createCategoryFormObject.node );

    console.log('отработал');

    return createCategoryFormObject;
  }

  var closeCreateCategoryDialog = () => {
    return ( cachedCreateCategoryFormObject.resetFields(), createCategoryFormDialog.close() );
  }

  createCategoryDialogButton.onclick = openCreateCategoryDialog;
  createCategoryFormDialogCloseButton.onclick = closeCreateCategoryDialog;
}

var makeCreateCategoryFormObject = ( categoryManager ) => ( categoryTypes ) => {
  var createCategoryFormTemplate = document.querySelector('#createCategoryFormTemplate');
  var createCategoryFormTemplateClone = document.importNode( createCategoryFormTemplate.content, true );

  var createCategoryForm = createCategoryFormTemplateClone.querySelector('form');
  var createCategoryFormNameInput = createCategoryForm.querySelector('#categoryName');
  var createCategoryFormDescriptionTextarea = createCategoryForm.querySelector('#categoryDescription');
  var createCategoryFormTypeFieldset = createCategoryForm.querySelector('#categoryTypeFieldset');
  var createCategoryFormSubmitButton = createCategoryForm.querySelector('button');

  for (let i = 0; i < categoryTypes.length; i++) {
    var inputElement = document.createElement('input');
    inputElement.name = 'type';
    inputElement.type = 'radio';
    inputElement.value = categoryTypes[i];
    inputElement.setAttribute( 'id', `radio-${categoryTypes[i]}` );

    var labelInput = document.createElement('label');
    labelInput.setAttribute('for', `radio-${categoryTypes[i]}`);
    labelInput.textContent = inputElement.value;

    createCategoryFormTypeFieldset.appendChild( inputElement );
    createCategoryFormTypeFieldset.appendChild( labelInput );
  }

  var onSubmit = ( event ) => {
    event.preventDefault();

    console.log('new category', createCategory( `categoryId: ${Math.random()}` )(  ));

    // categoryManager.addCategory( createCategory( `categoryId: ${Math.random()}` )(  ) );
  }

  var resetFields = () => {
    createCategoryFormNameInput.value = '';
    createCategoryFormDescriptionTextarea.value = '';

    var fieldSetRadioElements = createCategoryFormTypeFieldset.querySelectorAll('input');

    for (let i = 0; i < fieldSetRadioElements.length; i++) {
      fieldSetRadioElements[i].checked = false;
    }
  };

  var getFormFieldsValues = () => {
    
  }

  createCategoryFormSubmitButton.onclick = onSubmit;

  return {
    node: createCategoryFormTemplateClone,
    resetFields,
    getFormFieldsValues,
  };
}

export { renderCategoryForm };