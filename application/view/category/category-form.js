import { CATEGORIES_TYPE, createCategory } from "../../../modules/entities/category.js";

var renderCategoryFormDialog = ( categoryManager ) => ( onCategoryCreated ) => {
  var cachedCreateCategoryFormObject = null;

  var createCategoryFormDialog = document.querySelector('#createCategoryFormDialog');
  var createCategoryFormDialogOpenButton = document.querySelector('#createCategoryFormDialogOpenButton');
  var createCategoryFormDialogCloseButton = createCategoryFormDialog.querySelector('button');

  createCategoryFormDialogOpenButton.onclick = ( event ) => {
    createCategoryFormDialog.showModal();
  }

  createCategoryFormDialogCloseButton.onclick = () => (
    createCategoryFormDialog.close()
  )

  var initCreateCategoryFormObject = () => {
    var createCategoryFormHeader = createCategoryFormDialog.querySelector('#createCategoryFormHeader');

    cachedCreateCategoryFormObject = (
      makeCreateCategoryFormObject( categoryManager )
      ( CATEGORIES_TYPE )
      ( 
        () => (
          createCategoryFormDialog.close(),
          onCategoryCreated()
        ) 
      ) 
    );

    createCategoryFormHeader.after( cachedCreateCategoryFormObject.node );
  }

  createCategoryFormDialog.addEventListener("beforetoggle", (e) => (
    requestAnimationFrame(() => (
      e.newState === 'open' 
    ? (
      !cachedCreateCategoryFormObject ? initCreateCategoryFormObject() : null
      ) 
    : (
        cachedCreateCategoryFormObject.resetFields()
      )
    ))
  ));
}

var makeCreateCategoryFormObject = ( categoryManager ) => ( categoriesTypesEnum ) => ( onCategoryCreated ) => {
  var createCategoryFormTemplate = document.querySelector('#createCategoryFormTemplate');
  var createCategoryFormTemplateClone = document.importNode( createCategoryFormTemplate.content, true );

  var createCategoryForm = createCategoryFormTemplateClone.querySelector('form');
  var createCategoryFormNameInput = createCategoryForm.querySelector('#categoryName');
  var createCategoryFormDescriptionTextarea = createCategoryForm.querySelector('#categoryDescription');
  var createCategoryFormTypeFieldset = createCategoryForm.querySelector('#categoryTypeFieldset');
  var createCategoryFormSubmitButton = createCategoryForm.querySelector('button');

  var categoryTypes = Object.keys( categoriesTypesEnum );

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

    var checkedRadioElement = Array.from(createCategoryFormTypeFieldset.querySelectorAll('input')).find(( element ) => !!element.checked );

    categoryManager.addCategory( 
      createCategory( `categoryId: ${Math.random()}` )
      ( CATEGORIES_TYPE[checkedRadioElement.value] )
      ( createCategoryFormNameInput.value )
      ( createCategoryFormDescriptionTextarea.value )
    );

    onCategoryCreated?.();
  }

  var resetFields = () => {
    createCategoryFormNameInput.value = '';
    createCategoryFormDescriptionTextarea.value = '';

    var fieldSetRadioElements = createCategoryFormTypeFieldset.querySelectorAll('input');

    for (let i = 0; i < fieldSetRadioElements.length; i++) {
      fieldSetRadioElements[i].checked = false;
    }
  };

  var getFormFieldsValues = () => ({
    categoryName: createCategoryFormNameInput.value,
    categoryDescription: createCategoryFormDescriptionTextarea.value
  });

  createCategoryFormSubmitButton.onclick = onSubmit;

  return {
    node: createCategoryFormTemplateClone,
    resetFields,
    getFormFieldsValues,
  };
}

export { renderCategoryFormDialog };