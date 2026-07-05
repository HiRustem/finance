var renderCategoriesTable = 
( buttonProps ) => 
( categoryManager ) => {
  var categoryTable = document.querySelector('#categoryTableBody');
  var categoryRowTemplate = document.querySelector('#categoryRowTemplate');

  var categories = Object.values(categoryManager.getState());

  requestAnimationFrame(() => {
    categoryTable.hasChildNodes() ? categoryTable.replaceChildren([]) : categoryTable;

    for (let i = 0; i < categories.length; i++) {
      var currentCategory = categories[i];
      var categoryRowTemplateClone = document.importNode( categoryRowTemplate.content, true );

      var categoryRowTemplateCells = categoryRowTemplateClone.querySelectorAll( 'td' );

      categoryRowTemplateCells[0].textContent = currentCategory.id;
      categoryRowTemplateCells[1].textContent = currentCategory.name;
      categoryRowTemplateCells[2].textContent = currentCategory.description;
      categoryRowTemplateCells[3].textContent = currentCategory.type;

      if (!!buttonProps) {
        categoryRowTemplateCells[4].appendChild( 
          createCategoryActionButton
          ( () => renderCategoriesTable( buttonProps )( categoryManager ) )
          ( buttonProps )
          ( currentCategory.id )
        );
      }

      categoryTable.appendChild( categoryRowTemplateClone );
    }
  });
}

var createCategoryActionButton = 
( rerenderCallback ) =>
( buttonProps ) => 
( categoryId ) => {
  var categoryActionButton = document.createElement( 'button' );
  categoryActionButton.textContent = buttonProps.textContent;

  categoryActionButton.onclick = () => ( 
    buttonProps.onClick( categoryId ),
    rerenderCallback?.(),
    buttonProps.onAction?.()
  );

  return categoryActionButton;
};

export { renderCategoriesTable };