import { CATEGORIES_TYPE, createCategory } from "../../modules/entities/category.js";

var renderCategoryForm = ( categoryManager ) => {
  var categoryFormTemplate = document.querySelector('#categoryFormTemplate');
  var categoryFormTemplateClone = document.importNode( categoryFormTemplate.content, true );
  
  var categoryForm = categoryFormTemplateClone.querySelector('form');
  var categoryFormNameInput = categoryForm.querySelector('#categoryName');
  var categoryFormDescriptionTextarea = categoryForm.querySelector('#description');
  var categoryFormTypeFieldset = categoryForm.querySelector('#categoryTypeFieldset');
  var categoryFormSubmitButton = categoryForm.querySelector('button');

  var categoryTypes = Object.keys(CATEGORIES_TYPE);

  requestAnimationFrame(() => {
    for (let i = 0; i < categoryTypes.length; i++) {
      var inputElement = document.createElement('input');
      inputElement.name = 'type';
      inputElement.type = 'radio';
      inputElement.value = categoryTypes[i];
      inputElement.setAttribute( 'id', `radio-${categoryTypes[i]}` );

      var labelInput = document.createElement('label');
      labelInput.setAttribute('for', `radio-${categoryTypes[i]}`);
      labelInput.textContent = inputElement.value;

      categoryFormTypeFieldset.appendChild( inputElement );
      categoryFormTypeFieldset.appendChild( labelInput );
    }

    var onSubmit = ( event ) => {
      event.preventDefault();

      categoryManager.addCategory( createCategory( `categoryId: ${Math.random()}` )(  ) );
    }

    categoryFormSubmitButton.onclick = onSubmit;
    
    document.querySelector('#categoryFormBlock').append( categoryFormTemplateClone );
  });
}

export { renderCategoryForm };